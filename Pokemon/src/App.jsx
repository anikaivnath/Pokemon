import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className='bg-teal-500 h-screen'>
      <div className="sticky top-0 z-10 bg-amber-200 p-4 flex items-center justify-between shadow-md">
        <p className="font-serif text-3xl">Explore Your Favorite Pokémon Card</p>
        
        <div className="flex gap-6 items-center"> 
          <FontAwesomeIcon icon={faHeart} className="text-3xl text-red-600 cursor-pointer" />
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 w-64"
          />
        </div>
      </div>
      <div>
        <h1>
          Cards
        </h1>
      </div>
    </div>
  );
};

export default App;
