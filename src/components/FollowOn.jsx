import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti"

function FollowOn() {
    return (
        <div className=' mt-2'>
            <h1 className='text-gray-500 font-bold'>Follow on:</h1>
            <div className='flex justify-start gap-x-2 mt-2'>
                <a href="https://www.linkedin.com/in/ashish-kumar-sahu-2a3a33289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <TiSocialLinkedin size={25} />
            </a>
            <a href="https://www.instagram.com/">
                <TiSocialInstagram size={25} />
            </a>
            <a href="https://www.facebook.com/">
                <TiSocialFacebook size={25} />
            </a>
            </div>
        </div>
    )
}

export default FollowOn