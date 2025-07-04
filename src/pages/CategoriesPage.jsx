import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GifState } from '../context/Gif-context'
import { Link } from 'react-router-dom'
import FollowOn from '../components/FollowOn'
import { IoSearch } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
function Categories() {
    const { category } = useParams()
    const [categoryData, setCategoryData] = useState([])
    const { gf } = GifState()
    const navigate=useNavigate()
    useEffect(() => {
        const gifByCategory = async () => {
            try {
                const { data } = await gf.gifs(category, category)
                setCategoryData(data)
            } catch (error) {
                console.error(error)
            }
        }
        gifByCategory()

    }, [category])
    let index=0
    useEffect(()=>{
        const generateRandom=()=>{
        index=Math.floor(Math.random()*10)
    }
    generateRandom()
    console.log(index)
    },[])
    // console.log(categoryData)
    return (
        <div className='mt-4 flex flex-col sm:flex-row justify-between md:gap-x-2'>
            {/* <div className='flex flex-col sm:flex-row w-full'> */}
            <div className='flex flex-col gap-y-2'>
                <img className='w-full sm:h-56 sm:w-56' src={categoryData[index]?.images?.fixed_width.webp} alt="" />
                <span className='text-gray-500'>Don't tell it to me , Gif it to me!</span>
                <span>
                    <FollowOn/>
                </span>
                <hr className='text-gray-700 h-2 mt-3' />
                <div className='flex w-full'>
                    <input type="text" className='h-10 w-60 border-1 px-3 border-gray-800  outline-none' />
                    <button className='bg-gray-800 px-4'><IoSearch/></button>
                </div>
            </div>
            <div>
            <div className='mb-4 flex flex-col gap-4'>
                <h1 className='text-5xl font-bold '> {category} GIFs</h1>
                <p className='text-gray-600 flex items-center gap-1'>@{category.toLowerCase()} <RiVerifiedBadgeFill color='cyan'/></p>
            </div>
            <div className='columns-2 md:columns-3 lg:columns-4' key={Math.random()}>

                {categoryData.length > 0 ?
                    categoryData.map((gif) => (
                        <Link to={`/${gif?.user?.display_name}`}
                            key={gif.name_encoded}
                            className=''>
                            <div className="relative group w-full mb-2 cursor-pointer ">
                                {/* Image */}
                                <img
                                    key={gif.title} src={gif?.images?.fixed_width.webp} alt={gif.title}
                                    className={`w-full object-cover rounded`}
                                   
                                />

                                {/* Gradient Overlay at Bottom */}
                                <div className="flex justify-left items-end gap-x-2 absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img className='h-8 w-8 bottom-0 ml-2 rounded' src={gif?.user?.avatar_url} alt={gif?.user?.display_name} onClick={()=>navigate(`/${gif?.user?.display_names}`)}/>
                                    <span className='font-semibold underline'>{gif?.user?.display_name}</span>
                                </div>
                            </div>
                        </Link>
                    )) : ''
                }
            </div>

            </div>
        </div>
    )
}

export default Categories
