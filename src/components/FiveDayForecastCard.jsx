function FiveDayForecastCard({ day, temperature, weatherIcon, condition }) {
  return (
    <div 
      className="
        bg-sky-200 p-4 rounded-xl text-center shadow-md flex flex-col dark:bg-gray-800 text-gray-900 dark:text-gray-100
          w-full
          sm:w-full
          md:max-w-[220px]"
      >
       
        <p className="font-bold">{day}</p>
        <p className="font-bold">{temperature} °C</p>
        <div className="flex justify-center items-center">{weatherIcon}</div>
        <p className="capitalize font-bold">{condition}</p>
    </div>
  );
}

export default FiveDayForecastCard;



