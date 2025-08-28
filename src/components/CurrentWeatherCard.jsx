import React from 'react';

function CurrentWeatherCard({ forecast }) {
  if (!forecast) return null; 
   
       /*OpenWeatherIcon Url*/
  const iconUrl = `https://openweathermap.org/img/wn/${forecast.icon}@2x.png `;
  return (
    <section className="w-full max-w-xs mx-auto my-4 px-2">
      <div className="flex flex-col sm:flex-row items-center justify-center bg-white p-x-2 py-4 rounded-xl shadow-md gap-4 sm:gap-8">
        {forecast.icon && (
            <img src={iconUrl} alt={forecast.condition} className="w-20 h-20 sm:w-24 sm:h-24" />
        )}
        {/* Weather Details */}
        <div className='text-center sm:text-left space-y-2'>
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
