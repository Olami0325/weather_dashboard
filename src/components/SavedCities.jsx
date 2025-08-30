import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function SavedCities({ cities = [], onRemove, onAdd, onSelect }) {
  const [input, setInput] = useState("");

  const submitAdd = (e) => {
    e.preventDefault();
    const city = input.trim();
    if (!city) return;
    onAdd?.(city);
    setInput("");
  };

  return (
    <div className=" flex flex-col bg-sky-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow mx-auto p-4 my-4 w-full sm:mx-w-sm md:mx-w-md lg:max-w-lg">
      <h2 className="text-left text-indigo-950 dark:text-white p-2 font-semibold text-lg sm:text-xl md:text-2xl my-2">Saved Cities</h2>
      <form
        onSubmit={submitAdd}
        className="flex flex-col sm:flex-row gap-2 rounded-md mb-4 "
      >
        <input
          type="text"
          value={input}
          placeholder="Add a city (e.g Paris)"
          onChange={(e) => setInput(e.target.value)}
          className="flex flex-grow p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />

        <button
          type="submit"
          className="bg-sky-500 dark:bg-sky-700 text-white px-4 p-2 rounded-md hover:bg-indigo-700 "
        >
          Add
        </button>
      </form>

      {/* List of saved cities */}
      {cities.length === 0 ? (
        <p></p>
      ) : (
        <ul className="divide-y divide-gray-200 bg-blue-700 dark:bg-gray-800 p-4 mb-6 rounded-md">
          {cities.map((city) => (
            <li className="flex flex-wrap items-center justify-between gap-4 p-2 cursor-pointer border border-gray-200"
              key={city}
              
            >
              <button type="button" 
                onClick={() => onSelect?.(city)} 
                className="text-white hover:underline" 
                title="Load weather"
              >
                {city}
              </button>

              <button 
                type="button"
                onClick={()=> onRemove?.(city)}
                className="text-red-500 hover:text-red-700"
                title="Remove city"
                aria-label={`Remove $(city)`}

              >
                <div className="w-full border-2 bg-blue-700 dark:bg-gray-800"><FaTimes /></div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedCities;

