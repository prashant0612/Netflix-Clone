import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const PriceBox = () => {
  return (
    <div className='w-full bg-purple-950 rounded-xl p-10 px-10 text-white mb-10 flex flex-col gap-3 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-purple-800 cursor-pointer' data-aos="fade-left">
        <h1 className=' text-4xl font-bold'>Plans to suit your needs and your budget</h1>
        <p className=' text-2xl'>Enjoy Netflix starting at just ₹149.</p>
    </div>
  )
}

export default PriceBox