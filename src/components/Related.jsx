// import React, { useEffect, useState, } from 'react'
// import { GifState } from '../context/Gif-context'
// import { useParams } from 'react-router-dom'
// function Related() {
//     const {slug}=useParams()
//     const gifId = slug.split("-")
//     const {gf}=GifState
//     const [relatedgif,setRelated]=useState([])
//     const getRelatedGifs=async()=>{
//         const {data}=await gf.related(gifId[gifId.length-1])
//         setRelated(data)
//     }
//     useEffect(()=>{
//         getRelatedGifs()
//         console.log(relatedgif)
//     },[slug])
//     return (
//         <div className='columns-2 md:columns-3 lg:columns-4 gap-3 min-h-screen'>
//                 {
//                     relatedgif?.map((gif) => (
//                         <Link to={`/:${gif.type}/:${gif.slug}`}
//                             key={gif.title}
//                             className=''>
//                             <div className="relative group w-full mb-2 cursor-pointer ">
//                                 {/* Image */}
//                                 <img
//                                     key={gif.title}
//                                     src={gif?.images?.fixed_width.webp} alt={gif.title}
//                                     className={`w-full object-cover rounded`}
//                                 />

//                                 {/* Gradient Overlay at Bottom */}
//                                 <div className="flex justify-left items-end gap-x-2 absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <img className='h-8 w-8 bottom-0 ml-2 rounded' src={gif?.user?.avatar_url} alt={gif?.user?.display_name} />
//                                     <span className='font-semibold underline'>{gif?.user?.display_name}</span>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))
//                 }
//             </div>
//     )
// }

// export default Related
