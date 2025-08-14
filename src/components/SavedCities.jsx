import { FaTimes } from "react-icons/fa";

function SavedCities() {
  return (
    <div className=" flex flex-col bg-white mx-auto px-6 rounded-md shadow-md my-4">
      <h2 className="text-left text-indigo-950 font-semibold">Saved Cities</h2>
      <div className="flex items-center justify-between gap-4 p-2 rounded-md mb-2">
        <input
          type="text"
          placeholder="City name"
          className="px-3 py-1 rounded-md border border-gray-300"
        />

        <FaTimes className="text-gray-500" size={20} />
      </div>
    </div>
  );
}

export default SavedCities;
