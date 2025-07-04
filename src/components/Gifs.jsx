import React, { useEffect, useState } from 'react'
import { GifState } from '../context/Gif-context';
import { Link } from 'react-router-dom'
function Gifs() {

    const { gf, filter } = GifState()
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        const gifsData = async () => {
            try {
                const { data } = await gf.trending({
                    type:filter,
                    rating: 'g'
                })
                // console.log(data)
                setGifs(data)
                // console.log(gifs)
            } catch (error) {
                console.error(error)
            }
        }
        gifsData()
    }, [filter])
    return (
        <div>
            <div>
                <img className='rounded my-1' src="https://media.giphy.com/headers/2025-02-19-49-1739998199/headers2023-01-25-23-1674674626BHM_BANNER_HP_2023.webp" alt="" />
            </div>
            <div className='columns-2 md:columns-3 lg:columns-4 gap-3 min-h-screen'>
                {
                    gifs?.map((gif) => (
                        <Link to={`/:${gif.type}/:${gif.slug}`}
                        // key={gif.title}
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

export default Gifs
