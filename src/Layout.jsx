import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
function Layout() {
    return (
        <div className='bg-gray-950 text-white min-h-screen'>
            <div className='container lg:px-30 xl:px-60 mx-auto'>
                <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        </div>
    )
}

export default Layout
