import Header from "../components/Header";
import SavedCities from "../components/SavedCities";
import SearchBar from "../components/SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import FiveDayForecastCard from "../components/FiveDayForecastCard";
import { IoMdSunny } from "react-icons/io";
import { IoMdCloudy } from "react-icons/io";
import { IoMdRainy } from "react-icons/io";
import { IoMdThunderstorm } from "react-icons/io";
import ErrorBanner from "../components/ErrorBanner";
import Footer from "../components/Footer";
import { useState } from "react";

function Dashboard() {

  const [forecast, setForecast] = useState(null); //store weather data here
  const [error, setError] = useState(false); //error state

  // Function to fetch weather data from API
  const handleSearch = async (city) => {
    try {
      setError(false); //reset error state before fetching
      const apiKey = "30ff8ff5d8dabeb299470339370ae62b";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if(!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const newForecast ={
        temperature : data.main.temp,
        condition : data.weather[0].description,
        humidity : data.main.humidity,
        wind : data.wind.speed,
        icon : data.weather[0].icon,
      };
      setForecast(newForecast);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(true); //set error state to true if fetch fails
    }
  }

  const FiveDayForecast = [
    {
      day: "Mon",
      temperature: 25,
      weatherIcon: <IoMdSunny />,
      condition: "sunny",
    },
    {
      day: "Tue",
      temperature: 32,
      weatherIcon: <IoMdCloudy />,
      condition: "cloudy",
    },
    {
      day: "Wed",
      temperature: 28,
      weatherIcon: <IoMdRainy />,
      condition: "rainy",
    },
    {
      day: "Thur",
      temperature: 18,
      weatherIcon: <IoMdCloudy />,
      condition: "cloudy",
    },
    {
      day: "Fri",
      temperature: 20,
      weatherIcon: <IoMdSunny />,
      condition: "sunny",
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-[540px] shadow-md mx-auto bg-gray-100 flex flex-col">
      <Header />

      {/* SearchBar with onSearch prop */}
      <SearchBar onSearch={handleSearch} />

      {/* Conditionally render ErrorBanner if there's an error or API fails */}
      {error && <ErrorBanner />}

      {/* Show current weather if available */}
      {forecast && <CurrentWeatherCard forecast={forecast} />}

      {/* Five Day Forecast Section */}
      <div className="grid grid-cols-5 gap-4 p-4">
        {FiveDayForecast.map((forecast, index) => (
          <FiveDayForecastCard
            key={index}
            day={forecast.day}
            temperature={forecast.temperature}
            weatherIcon={forecast.weatherIcon}
            condition={forecast.condition}
          />
        ))}
      </div>
      <SavedCities />
      <Footer />
    </div>
  );
}

export default Dashboard;
