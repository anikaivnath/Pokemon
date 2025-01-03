import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
const App = () => {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-amber-200 p-4 flex items-center justify-between shadow-md">
        <p className="font-serif text-3xl">Explore Your Favorite Pokémon Card</p>
        <div className='flex gap-6'>
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="border border-gray-400 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
         <p><FontAwesomeIcon icon={faHeart} /></p>
        </div>
       

      
  

      </div>
    </div>
  );
};

export default App;
