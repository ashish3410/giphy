import React, { useEffect, useState } from 'react'
import Gifs from '../components/Gifs';
import Gif_Filter from '../components/Gif_Filter';
function Home() {
    return (
        <>
            <div>
                <Gif_Filter showTrending/>
            </div>
            <div>
                <Gifs/>
            </div>
        </>
    )
}

export default Home
