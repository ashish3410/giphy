import React from 'react'
import { GifState } from '../context/Gif-context'
import { Link } from 'react-router-dom'
import {nanoid} from 'nanoid'
function Favorite() {
    const { favorites } = GifState()
    const key=nanoid()
    console.log(favorites)
    return (
        <div className='mt-4'>
            <h1 className='text-xl font-bold '>Favorites</h1>
            <div className='columns-2 md:columns-3 lg:columns-4 gap-3 min-h-screen'>
            {
                favorites?.map((image) => (
                    <div key={key} >
                       <Link  to={`/:${image}`}>
                       <img
                            src={image.fixed_width.webp}
                            className={`w-full object-cover rounded mt-2`}
                        />
                       </Link>
                        {/* Gradient Overlay at Bottom */}
                    </div>
                ))
            }
        </div >
        </div>
    )
}

export default Favorite
