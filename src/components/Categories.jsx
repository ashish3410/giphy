import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { GifState } from '../context/Gif-context'

function Categories({category}) {
    const {category}=useParams()
    const [categoryData,setCategoryData]=useState([])
    const {gf} =GifState()

    console.log(category)

    useEffect(()=>{
        const gifByCategory=async()=>{
            try {
                const categoryResult= await gf.gifs(category)
                console.log(categoryResult)
                setCategoryData(categoryResult)
            } catch (error) {
                console.error(error)
            }
        }
        console.log(categoryData)
        gifByCategory()
    },[])
    return (
        <div>

        </div>
    )
}

export default Categories
