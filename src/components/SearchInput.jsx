import React, { useState } from 'react'

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputBox from './InputBox';
function Search() {
    const [isFixed, setIsFixed] = useState(false); // State to track scroll position

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true); // Fix the search bar when scrolled down
            } else {
                setIsFixed(false); // Return to normal position when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div
            className={`transition-all duration-1000 ${isFixed ? "fixed top-0 z-50 bg-gray-950 w-full px-4 sm:justify-center" : "relative"}`}
        >
            {isFixed ? (
                <div className="flex justify-center items-center gap-2">
                    <div className="flex gap-1">
                        <Link className='flex items-center' to="/">
                            <img
                                className="w-12 flex-none"
                                src="https://raw.githubusercontent.com/piyush-eon/react-giphy-clone/97e36e58cf6d7c8ae6fb829fb1cf25087d65bbaf/public/logo.svg"
                                alt="GIPHY"
                            />
                        </Link>
                        <h1 className="text-[2.5rem] font-bold tracking-tight cursor-pointer flex-none">
                            GIPHY
                        </h1>
                    </div>
                    <div className="flex">
                        <InputBox height={14}/>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center  mx-auto w-full">
                    <InputBox height={18} />
                </div>
            )}
        </div>
    )
}

export default Search
