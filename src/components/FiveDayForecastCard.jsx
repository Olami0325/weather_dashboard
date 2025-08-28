function FiveDayForecastCard({ day, temperature, weatherIcon, condition }) {
  return (
    <section 
      className="
        bg-white p-4 py-6 rounded-md text-center mx-auto shadow-md flex flex-col
          w-full mx-w-[180px] h-full
          sm:mx-w-[200px] sm:h-full
          md:mx-w-[220px] md:h-full"
      >
        <p>{day}</p>
        <p>{temperature} °C</p>
        <div className="flex justify-center items-center">{weatherIcon}</div>
        <p>{condition}</p>
    </section>
  );
}

export default FiveDayForecastCard;
