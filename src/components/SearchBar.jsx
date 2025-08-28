import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row w-full px-4 mx-auto mx-w-md justify-center items-stretch sm:items-center gap-2 py-4"
    >
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search"
        className="flex-1 py-2 px-3 rounded border border-gray-300"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-2 rounded-md text-white bg-black font-bold hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
