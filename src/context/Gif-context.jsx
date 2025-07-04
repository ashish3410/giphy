import React from "react";
import { createContext, useContext, useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api'
const GifContext = createContext()
const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)
const GifProvider = ({ children }) => {
    const [gifs, setGifs] = useState([])
    const [filter, setFilter] = useState('gifs')
    const [favorites, setFavorites] = useState([])
    return (
        <GifContext.Provider value={{ gf, gifs, setGifs, filter, setFilter, favorites,setFavorites }}>
            {children}
        </GifContext.Provider>
    )
}
export const GifState = () => {
    return useContext(GifContext)
}
export default GifProvider