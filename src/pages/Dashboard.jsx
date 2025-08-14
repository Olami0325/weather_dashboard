import Header from "../components/Header";
import SavedCities from "../components/SavedCities";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  return (
    <div className="min-h-screen w-full max-w-[540px] mx-auto bg-gray-100 flex flex-col">
      <Header />
      <SearchBar />
      <SavedCities />
    </div>
  );
}

export default Dashboard;
