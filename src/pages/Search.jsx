import React, { useEffect, useState } from 'react'
import { GifState } from '../context/Gif-context';
import { Link, useParams } from 'react-router-dom'
import Gif_Filter from '../components/Gif_Filter';
function Search() {
    const { query } = useParams()
    const { gf, filter } = GifState()
    const [searchGifsResults, setSearchGifsResults] = useState([])

    useEffect(() => {
        const SearchGifsData = async () => {
            try {
                const { data } = await gf.search(
                    query,
                    {
                        sort: "recent",
                        language: 'eg',
                        type: filter
                    }
                )
                setSearchGifsResults(data)
            } catch (error) {
                console.error(error)
            }
        }
        SearchGifsData()
    }, [query, filter])
    return (
        <>
            <h1 className='text-5xl font-bold my-2'>{query}</h1>
            <div>
                <Gif_Filter />
                <div>
                    <img className='rounded my-1' src="https://media.giphy.com/headers/2025-02-19-49-1739998199/headers2023-01-25-23-1674674626BHM_BANNER_HP_2023.webp" alt="" />
                </div>
                <div className='columns-2 md:columns-3 lg:columns-4 gap-3 min-h-screen'>
                {searchGifsResults.length > 0 ?
                    searchGifsResults?.map((gif) => (
                            <Link to={`/:${gif.type}/:${gif.slug}`}
                                className=''>
                                <div className="relative group w-full mb-2 cursor-pointer ">
                                    {/* Image */}
                                    <img
                                        key={gif.title} src={gif?.images?.fixed_width.webp} alt={gif.title}
                                        className={`w-full object-cover rounded`}
                                    />

                                    {/* Gradient Overlay at Bottom */}
                                    <div className="flex justify-left items-end gap-x-2 absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <img className='h-8 w-8 bottom-0 ml-2 rounded' src={gif?.user?.avatar_url} alt={gif?.user?.display_name} />
                                        <span className='font-semibold underline'>{gif?.user?.display_name}</span>
                                    </div>
                                </div>
                            </Link>
                    )) :
                    <p className='text-3xl m-4 font-semibold text-center mt-10'>No match found 😓 related to your search {query} , try instead stickers👍</p>
                }
                </div>
            </div>
        </>
    )
}

export default Search
