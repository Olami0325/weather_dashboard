
function SearchBar (){
    return (
        <div className="flex justify-center items-center gap-2 py-4">
            <input type="text" placeholder="Search" className="py-1 px-3 rounded" />
            <button type="submit" className="px-3 py-1 rounded-md text-white bg-black font-bold">Search</button>
        </div>
    )

}

export default SearchBar; 