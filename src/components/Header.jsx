import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GifState } from '../context/Gif-context';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import Search from './SearchInput';
// import { Navigate } from 'react-router-dom';

function Header() {

  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate=useNavigate()
  const { gf, favorites } = GifState();

  useEffect(() => {
    const fetchGifCategories = async () => {
      try {
        const { data } = await gf.categories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGifCategories();
  }, [gf]);

  const gotoFavorites=()=>{
    navigate('/favorites')
  }
  // Detect scroll position to toggle fixed search bar


  return (
    <div>
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-4 gap-y-0 shadow-md">
        <Link to={'/'}>
          <div className="flex gap-2 items-center">
            <img
              className="w-8 sm:mt-0"
              src="https://raw.githubusercontent.com/piyush-eon/react-giphy-clone/97e36e58cf6d7c8ae6fb829fb1cf25087d65bbaf/public/logo.svg"
              alt="GIPHY"
            />
            <h1 className="text-[2.5rem] font-bold tracking-tight cursor-pointer">GIPHY</h1>
          </div>
        </Link>

        <div className="hidden lg:flex">
          {categories.slice(0, 5).map((category) => (
            <Link
              key={category.name}
              to={`/${category.name}`}
              className="text-lg font-semibold tracking-tight ml-2 hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 border-b-4 px-2 m-3"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          {favorites.length > 0 && (
            <button onClick={gotoFavorites} className="bg-gray-500 rounded-lg px-4 py-1 hover:bg-gray-600">
              Favorites
            </button>
          )}
          <button
            className={`cursor-pointer hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 m-3 p-2 `}
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setTimeout(() => {
              setShowCategories(false)
            }, 150)}
            
          >
            {<PiDotsThreeOutlineVerticalFill size={25} />}
          </button>
        </div>
      </div>

      {/* Categories Dropdown */}
      <div className="relative">
        {showCategories && (
          <div
            className="absolute top-full left-0 w-full p-4 bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 z-50"
            onMouseEnter={() => setTimeout(() => setShowCategories(true), 151)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <h1 className="font-bold text-3xl mb-3 py-4">Categories</h1>
            <hr />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 ml-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/${category.name}`}
                  className="text-lg font-bold tracking-tight px-2 py-2 hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 rounded-md"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* catogories dropDown for smaller screen */}
      {/* <div className="hidden relative">
        {showCategories && (
          <div
            className="absolute top-full left-0 w-full p-4 bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 z-50">
            <h1 className="font-bold text-3xl mb-3 py-4">Categories</h1>
            <hr />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 ml-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/${category.name}`}
                  className="text-lg font-bold tracking-tight px-2 py-2 hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 rounded-md"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div> */}

      {/* Search Bar - Fixed on Scroll */}
        <Search />
    </div>
  );
}

export default Header;
