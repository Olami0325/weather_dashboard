import React from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

function CurrentWeatherCard({ forecast }) {
  if (!forecast) return null;

  /*OpenWeatherIcon Url*/
  const iconUrl = `https://openweathermap.org/img/wn/${forecast.icon}@2x.png `;
  return (
    <section className="w-full max-w-xs mx-auto my-4 px-4">
      <div className="flex flex-col  items-center  bg-white/50 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 p-4 rounded-xl shadow-md gap-1 sm:gap-4">
        <h2 className="text-xl text-sky-800 dark:text-white font-bold">{forecast.city}</h2>
        {forecast.icon && (
          <img
            src={iconUrl}
            alt={forecast.condition}
            className="w-20 h-20 sm:w-22 sm:h-22"
          />
        )}
        {/* Weather Details */}
        <p className="text-lg capitalize">{forecast.condition}</p>
        <p className="text-2xl font-bold">{forecast.temperature} °C</p>

        <div className="flex justify-between w-full pt-4 text-sm text-gray-900 dark:text-white">
          <div className="flex items-center gap-1">
            <WiHumidity size={20}/>
            <span>{forecast.humidity} %</span>
          </div>
          <div className="flex items-center gap-1">
            <WiStrongWind size={20}/>
            <span>{forecast.wind} mph</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeatherCard;
