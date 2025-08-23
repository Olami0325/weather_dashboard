import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

//   const handleChange = (e) => {
//     setCity({ 
//         ...city, [e.target.name]: e.target.value });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    // console.log("searching for city:", city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-2 py-4"
    >
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search"
        className="py-1 px-3 rounded border border-gray-300"
      />
      <button
        type="submit"
        className="px-3 py-1 rounded-md text-white bg-black font-bold"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
