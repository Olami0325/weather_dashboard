import { IoMdSunny } from "react-icons/io";

function CurrentWeatherCard ({forecast}) {
    return (
        <section className="w-full max-w-xs mx-auto my-4">
            <div className="flex items-center justify-center bg-white p-4 rounded-md shadow-md gap-8">
                <IoMdSunny size={58} className="text-yellow-400"/>
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