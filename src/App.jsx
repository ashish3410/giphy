import { useState } from 'react'
import './App.css'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Single_gif from './pages/Single-gif'
import Search from './pages/Search'
import GifProvider from './context/Gif-context'
import Categories from './pages/CategoriesPage'
function App() {
  const router = createBrowserRouter([
    {   
        path:'/',
        element:<Layout/>,
        children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/:category',
          element:<Categories/>
        },
        {
          path:'/favorites',
          element:<Favorite/>
        },
        {
          path:'/:type/:slug',
          element:<Single_gif/>
        },
        {
          path:'search/:query',
          element:<Search/>
        }
      ]
    }
  ]) 
  return (
    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
    
  )
}

export default App
