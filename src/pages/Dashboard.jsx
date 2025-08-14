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

function Dashboard() {
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
      <SearchBar />
      <CurrentWeatherCard
        forecast={{
          temperature: 28,
          condition: "clear",
          humidity: 55,
          wind: 5,
        }}
      />
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
      {/* <ErrorBanner /> */}
      <Footer />
    </div>
  );
}

export default Dashboard;
