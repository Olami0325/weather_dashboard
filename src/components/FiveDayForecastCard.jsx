function FiveDayForecastCard({ day, temperature, weatherIcon, condition }) {
  return (
    <div 
      className="
        bg-sky-200 p-4 py-6 rounded-xl text-center mx-auto shadow-md flex flex-col dark:bg-gray-800 text-gray-900 dark:text-gray-100
          w-full mx-w-[180px] h-full
          sm:mx-w-[200px] sm:h-full
          md:mx-w-[220px] md:h-full"
      >
       
        <p className="font-bold">{day}</p>
        <p className="font-bold">{temperature} °C</p>
        <div className="flex justify-center items-center">{weatherIcon}</div>
        <p className="capitalize font-bold">{condition}</p>
    </div>
  );
}

export default FiveDayForecastCard;
