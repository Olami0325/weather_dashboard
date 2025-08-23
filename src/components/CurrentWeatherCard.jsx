import React from 'react';

function CurrentWeatherCard({ forecast }) {
  if (!forecast) return null; // or a loading spinner, or some placeholder
   
       /*OpenWeatherIcon Url*/
  const iconUrl = `https://openweathermap.org/img/wn/${forecast.icon}@2x.png `;
  return (
    <section className="w-full max-w-xs mx-auto my-4">
      <div className="flex items-center justify-center bg-white p-4 rounded-md shadow-md gap-8">
        {forecast.icon && (
            <img src={iconUrl} alt={forecast.condition} className="w-16 h-16" />
        )}
        {/* Weather Details */}
        <div>
          <p>Temperature: {forecast.temperature} °C</p>
          <p>Condition: {forecast.condition} </p>
          <p>Humidity: {forecast.humidity} %</p>
          <p>Wind: {forecast.wind} mph</p>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeatherCard;
