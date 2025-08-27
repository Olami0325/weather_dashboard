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
    <div className=" flex flex-col bg-white mx-auto px-6 rounded-md shadow-md my-4">
      <h2 className="text-left text-indigo-950 p-2 font-semibold">Saved Cities</h2>
      <form
        onSubmit={submitAdd}
        className="flex items-center justify-between gap-4 p-2 rounded-md mb-2"
      >
        <input
          type="text"
          value={input}
          placeholder="Add a city (e.g Paris)"
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-1 rounded-md border border-gray-300"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 p-2 rounded-md hover:bg-indigo-700"
        >
          Add
        </button>
      </form>

      {/* List of saved cities */}
      {cities.length === 0 ? (
        <p></p>
      ) : (
        <ul className="divide-y divide-gray-200 bg-blue-700 p-4 mb-6 rounded-md">
          {cities.map((city) => (
            <li className="flex items-center justify-between py-2"
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
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedCities;


