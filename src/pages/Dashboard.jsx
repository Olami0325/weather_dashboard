import Header from "../components/Header";
import SavedCities from "../components/SavedCities";
import SearchBar from "../components/SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import FiveDayForecastCard from "../components/FiveDayForecastCard";
import ErrorBanner from "../components/ErrorBanner";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Dashboard() {
  const [forecast, setForecast] = useState(null); // current weather
  const [fiveDayForecast, setFiveDayForecast] = useState([]); // 5-day forecast
  const [error, setError] = useState(""); // store error messages
  const [loading, setLoading] = useState(false); // loading state

  // Function to fetch weather data from API
  const handleSearch = async (city) => {
    try {
      setError(""); // reset error state
      setLoading(true); // show loading

      const apiKey = "30ff8ff5d8dabeb299470339370ae62b";

      // Fetch current weather
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!currentResponse.ok) throw new Error("City not found");
      const currentData = await currentResponse.json();

      const newForecast = {
        temperature: currentData.main.temp,
        condition: currentData.weather[0].description,
        humidity: currentData.main.humidity,
        wind: currentData.wind.speed,
        icon: currentData.weather[0].icon,
      };
      setForecast(newForecast);

      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!forecastResponse.ok) throw new Error("Could not fetch forecast");
      const forecastData = await forecastResponse.json();

      // Process forecast (pick one data point per day, usually at 12:00)
      const dailyData = forecastData.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
      );

      const formattedForecast = dailyData.slice(0, 5).map((day) => ({
        day: new Date(day.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        temperature: Math.round(day.main.temp),
        icon: day.weather[0].icon,
        condition: day.weather[0].main,
      }));

      setFiveDayForecast(formattedForecast);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false); // stop loading
    }
  };

    // saved cities state
  const [savedCities, setSavedCities] = useState(()=>{
    const stored = localStorage.getItem("savedCities")
      return stored ? JSON.parse(stored) : []
  });

    useEffect(()=> {
      localStorage.setItem("savedCities", JSON.stringify(savedCities));
    }, [savedCities])

    // add city
    const handleAddSavedCity = (city) => {
      setSavedCities((prev) => 
        prev.includes(city)? prev : [...prev, city] //avoid duplicates
    );
      handleSearch(city); // fetch weather after adding
    }

    // select (load) city
  const handleSelectSavedCity = (city) => handleSearch(city);
  
    // remove city
  const handleRemoveSavedCity = (cityToRemove) =>
    setSavedCities((prev) => prev.filter((c) => c !== cityToRemove));

  return (
    <div className="min-h-screen w-full max-w-[540px] shadow-lg mx-auto bg-gradient-to-b from-blue-100 to-gray-100 flex flex-col rounded-lg overflow-hidden">
      <Header />

      {/* SearchBar with onSearch prop */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading State */}
      {loading && (
        <p className="text-center text-gray-600 py-4 animate-pulse">
          Fetching weather data...
        </p>
      )}

      {/* Conditionally render ErrorBanner */}
      {error && <ErrorBanner message={error} />}

      {/* Show current weather if available */}
      {forecast && <CurrentWeatherCard forecast={forecast} />}

      {/* Five Day Forecast Section */}
      {fiveDayForecast.length > 0 && (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
          {fiveDayForecast.map((day, index) => (
            <FiveDayForecastCard
              key={index}
              day={day.day}
              temperature={day.temperature}
              weatherIcon={
                <img
                  src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                  alt={day.condition}
                  className="w-10 h-10 mx-auto"
                />
              }
              condition={day.condition}
            />
          ))}
        </div>
      )}

      <SavedCities
        cities={savedCities}
        onSelect={handleSelectSavedCity}
        onRemove={handleRemoveSavedCity}
        onAdd={handleAddSavedCity}  // allow manual add via SavedCities input , searches-auto saves on success
      />
      <Footer />
    </div>
  );
}

export default Dashboard;
