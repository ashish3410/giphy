import React from 'react'
import { MdTrendingUp } from "react-icons/md";
import { GifState } from '../context/Gif-context';
import { Link } from 'react-router-dom';
function Gif_Filter({alignLeft = false, showTrending = false}) {
    const {filter,setFilter}=GifState()
    const filters = [
        {
            title: 'GIFs',
            value: 'gifs',
            background: 'bg-gradient-to-r from-violet-600 via-blue-600 to-blue-700'
        },
        {
            title: 'Stickers',
            value: 'stickers',
            background: 'bg-gradient-to-r from-emerald-500 via-blue-700 to-blue-700'
        },
        {
            title: 'Text',
            value: 'text',
            background: 'bg-gradient-to-r from-emerald-600 to-blue-800'
        },
    ]
    return (
        <>
            <div className={`flex  my-2 ${alignLeft?  "justify-end":''} ${showTrending? 'justify-between items-center flex-cols sm:flex-rows':""}`}>
                {
                    showTrending && (
                        <span className='flex gap-2'>{
                            showTrending && (
                            <div className='flex items-center gap-2 bg-gradient-to-b from-gray-600 to-gray-900 py-2 px-3 rounded-3xl font-semibold'>
                                <MdTrendingUp size={25} color='blue' />
                                <Link to={'/'}>
                                <span className='text-2xl'>Trending</span>
                                </Link>
                            </div>
                        )
                    }</span>
                    )
                }
                <div className='flex items-center'>
                <div className={`flex sm:gap-x-2 items-center py-2  bg-gradient-to-b  from-gray-600 to-gray-900 object-cover rounded-3xl`}>
                    {
                        filters.map((f)=>{
                            return (
                                <div key={f.title} className=''>
                                    <span onClick={()=>setFilter(f.value)} key={f.title} className={`font-semibold cursor-pointer ${filter==f.value?f.background:''} justify-between transition-all duration-500 px-6 sm:px-8  py-2 rounded-3xl`}>{f.title}</span>
                                    {/* {console.log(filter)} */}
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </>
    )
}

export default Gif_Filter
