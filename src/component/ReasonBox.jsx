import React from 'react'


const ReasonBox = ({ title, content, icon  }) => {
  return (
    <div className='w-72 p-4 mr-3 rounded-2xl bg-slate-500 h-64 flex flex-wrap flex-col justify-between text-white max-[768px]:mb-5'>
      <h1 className=' text-2xl font-bold'>{title}</h1>
      <p className="mt-1">{content}</p>
      <div className="flex justify-end items-end text-6xl">
      {icon}
      </div>
    </div>
  )
}

export default ReasonBox;