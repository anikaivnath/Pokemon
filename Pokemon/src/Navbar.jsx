import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="sticky top-0 bg-gray-800 text-white p-4 z-50 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-xl font-bold mb-2 md:mb-0">
          Pokémon Explorer
        </Link>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Pokémon"
            className="p-2 border rounded text-black w-full md:w-auto"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Link
            to="/favorites"
            className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded w-full md:w-auto text-center"
          >
            Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
