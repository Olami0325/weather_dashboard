function FiveDayForecastCard({ day, temperature, weatherIcon, condition }) {
  return (
    <div 
      className="
        bg-white/50 dark:bg-gray-900/80 p-4 rounded-xl text-center shadow-md flex flex-col d text-gray-900 dark:text-gray-100
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



