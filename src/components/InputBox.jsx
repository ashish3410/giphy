import React from 'react'
import { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
function InputBox() {
    const placeholders = ["Search all Gif's and Stickers", "@username to search channel"];
    const [placeholderContent, setPlaceholderContent] = useState('@username to search channel');
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const searchGifs = () => {
        if (query.trim() === '') {
            setQuery('')
        } else {
            navigate(`/search/${query}`)
        }
    }
    useEffect(() => {

        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % placeholders.length;
            setPlaceholderContent(placeholders[index]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex w-full '>
            <input
            value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`bg-gray-100 h-14 rounded-l-sm w-full text-black text-xl px-2 outline-none `}
                placeholder={placeholderContent}
            />

            {query ? <button 
            onClick={()=>setQuery('')}
            className='bg-gray-100 pr-4 '>
                <RxCross2 size={22} color='gray-500' className='bg-gray-300 rounded-full ' />
            </button> : ''}

            <label onClick={searchGifs} className="bg-gradient-to-tr from-pink-600 to-pink-200 flex justify-center items-center px-8 rounded-r-sm hover:cursor-pointer">
                <FiSearch size={30} />
            </label>
        </div>
    )
}

export default InputBox
