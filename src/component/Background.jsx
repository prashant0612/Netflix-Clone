import React from 'react'
import BackgroundImage from '/src/images/netflix-web.jpg'

const Background = () => {
  return (
    <div className='w-full absolute '>
        <div className='h-screen max-[768px]:w-full'>
            <img src={BackgroundImage} 
            alt='backgroundImage'
            className="w-full h-full object-cover object-center"
            />
        </div>
    </div>
  )
}

export default Background