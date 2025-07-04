import React, { useEffect, useState } from 'react'
import { GifState } from '../context/Gif-context'
import { Link, useParams } from 'react-router-dom'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
function Single_gif() {
    const { type, slug } = useParams()
    const gifId = slug.split("-")
    const [gif, setGif] = useState({})
    const [relatedgif, setRelated] = useState([])
    const { gf, favorites, setFavorites } = GifState()
    // console.log(gifId)

    const getSingleGif = async () => {
        const { data } = await gf.gif(gifId[gifId.length - 1])
        setGif(data)

    }
    const getRelatedGifs = async () => {
        const { data } = await gf.related(gifId[gifId.length - 1])
        setRelated(data)
    }
    useEffect(() => {
        getSingleGif()
        getRelatedGifs()
        console.log(relatedgif)
        // console.log(gif)
    }, [slug])
    const setFavorite = (url) => {
        setFavorites((prev) => [...prev, url]);
    };
    const removeFavorite = (url) => {
        setFavorites((prev) => prev.filter(item => item !== url));
    };
    const CopyLink = async () => {
        try {
            await window.navigator.clipboard.writeText(gif.images);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
    };
    return (
        <div>
            <div className='hidden sm:flex grid-cols-3 gap-4 mt-2 w-full'>
                <div className='w-1/4 p-4 '>
                    {
                        (gif?.user?.avatar_url) ?
                            <div className='bg-gradient-to-b from-gray-900 to-gray-950 flex-col items-center gap-2 p-4 rounded'>
                                <div className='flex items-center gap-2'>
                                    <img className='h-12 w-12 ' src={gif?.user?.avatar_url} alt="" />
                                    <span className='flex md:font-bold text-[12px] md:text-sm'>{(gif?.user?.display_name).substring(0, 12)}...</span>
                                </div>
                                <p className='text-gray-600 text-[12px] md:text-sm md:font-bold flex items-center ml-1'>@{(gif?.user?.display_name).substring(0, 8)}...<RiVerifiedBadgeFill color='teal' /></p>
                            </div> : ''
                    }
                </div>
                <Link className='w-1/2 mt-4'>
                    <img className='w-full' src={gif?.images?.fixed_width.webp} alt="" />
                </Link>
                <div className='w-1/4 flex-col items-center mt-4 ml-10'>
                    <div className='mt-4'>
                        {
                            favorites.includes(gif.images) ? (
                                <button className='flex gap-x-4 font-bold text-1xl items-center' onClick={() => removeFavorite(gif.images)}>
                                    <FaHeart size={25} />Favorite
                                </button>
                            ) : (
                                <button className='flex gap-x-4 font-bold text-1xl items-center' onClick={() => setFavorite(gif.images)}>
                                    <FaRegHeart size={25} />Favorite
                                </button>
                            )

                        }

                    </div>
                    <div className='mt-4 mb-4 flex items-center gap-x-4 font-bold'>
                        <button onClick={CopyLink} className='flex gap-x-4 cursor-pointer'><FaLink size={25} />Copy Link</button>
                    </div>
                    <a href={gif?.images?.fixed_width.webp} download target="_blank" rel="noopener noreferrer">
                        <button className='flex gap-x-4 items-center'>
                            <IoMdDownload size={25} />
                            <p className='font-bold'>Download</p>
                        </button>
                    </a>
                </div>
            </div>
            {/* for smaller Screen */}
            <div className='sm:hidden'>
                <Link className='w-full mt-4'>
                    <img className='w-full' src={gif?.images?.fixed_width.webp} alt="" />
                </Link>
                <div className='flex justify-between items-center px-2'>
                    <div >
                        {
                            (gif?.user?.avatar_url) ?
                                <div className='bg-gradient-to-b from-gray-900 to-gray-950 flex  items-center gap-4 p-4 rounded'>
                                    <div className='flex items-center gap-2'>
                                        <img className='h-10 w-10 ' src={gif?.user?.avatar_url} alt="" />
                                    </div>
                                    <div>
                                        <span className='flex md:font-bold text-[12px] md:text-sm'>{(gif?.user?.display_name).substring(0, 12)}...</span>
                                        <p className='text-gray-600 text-[12px] md:text-sm md:font-bold flex items-center ml-1'>@{(gif?.user?.display_name).substring(0, 8)}...<RiVerifiedBadgeFill color='teal' /></p>
                                    </div>
                                </div> : ''
                        }
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div >
                            {
                                favorites.includes(gif.images) ? (
                                    <button className='flex gap-x-4 font-bold text-1xl items-center' onClick={() => removeFavorite(gif.images)}>
                                        <FaHeart size={25} />
                                    </button>
                                ) : (
                                    <button className='flex gap-x-4 font-bold text-1xl items-center' onClick={() => setFavorite(gif.images)}>
                                        <FaRegHeart size={25} />
                                    </button>
                                )

                            }

                        </div>
                        <div className=' flex items-center gap-x-4 font-bold mb-2'>
                            <button onClick={CopyLink} className='flex gap-x-4 cursor-pointer'><FaLink size={25} /></button>
                        </div>
                        <a href={gif?.images?.fixed_width.webp} download target="_blank" rel="noopener noreferrer">
                        <button className='flex gap-x-4 items-center'>
                            <IoMdDownload size={25} />
                        </button>
                    </a>
                    </div>
                </div>
            </div>
            {/* related */}
            <h1 className='text-xl font-bold mt-2'>Related Gifs</h1>
            <div className='columns-2 md:columns-3 lg:columns-4 gap-3 min-h-screen'>
                {
                    relatedgif?.map((gif) => (
                        <Link to={`/:${gif.type}/:${gif.slug}`}
                            key={gif.title}
                            className=''>
                            <div className="relative group w-full mb-2 cursor-pointer ">
                                {/* Image */}
                                <img
                                    key={gif.title}
                                    src={gif?.images?.fixed_width.webp} alt={gif.title}
                                    className={`w-full object-cover rounded`}
                                />

                                {/* Gradient Overlay at Bottom */}
                                <div className="flex justify-left items-end gap-x-2 absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img className='h-8 w-8 bottom-0 ml-2 rounded' src={gif?.user?.avatar_url} alt={gif?.user?.display_name} />
                                    <span className='font-semibold underline'>{gif?.user?.display_name}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Single_gif
