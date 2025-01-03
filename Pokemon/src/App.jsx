import React from 'react';

const App = () => {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-amber-200 p-4 flex items-center justify-between shadow-md">
        <p className="font-serif text-3xl">Explore Your Favorite Pokémon Card</p>
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="border border-gray-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
    </div>
  );
};

export default App;
