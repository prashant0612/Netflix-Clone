import React from 'react'

const InputEmail = () => {
  return (
    <div className='pb-10 flex max-[768px]:justify-between'>
        <input type='email' placeholder='Email Address' className='w-[60%] h-[3.5rem] bg-[#131212] text-white px-4 border-2 border-red-700 rounded-md'>
        </input>
        <button className=' bg-red-600 h-[3.5rem] w-[19%] text-[26px] font-semibold text-white ml-[1%] rounded-md hover:bg-red-700 max-[768px]:whitespace-nowrap max-[768px]:text-[18px] max-[768px]:w-1/2'>Get Started &gt;</button>
    </div>
  )
}

export default InputEmail