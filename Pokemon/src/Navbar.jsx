import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Pass search query to parent component
  };

  return (
    <div className="sticky top-0 bg-gray-800 text-white p-4 z-50 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Pokémon Explorer</Link>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search Pokémon"
            className="p-2 border rounded text-black"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Link
            to="/favorites"
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
