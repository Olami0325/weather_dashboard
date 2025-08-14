function FiveDayForecastCard({ day, temperature, weatherIcon, condition }) {
  return (
    <section className="bg-white p-4 rounded-md text-center mx-auto ">
      <p>{day}</p>
      <p>{temperature} °C</p>
      <div className="flex justify-center items-center">{weatherIcon}</div>
      <p>{condition}</p>
    </section>
  );
}

export default FiveDayForecastCard;
