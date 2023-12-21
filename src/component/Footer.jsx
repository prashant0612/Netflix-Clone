import React from 'react'

const Footer = () => {
  return (
    <div className=' text-[#beb9b9] pb-10 w-[80%] max-[768px]:w-full'>
        <p className=' pb-10'>Questions? Call <span className='underline'>000-800-919-1694</span></p>
        <div className='flex justify-between underline cursor-pointer max-[768px]:flex-wrap max-[768px]:text-center '>
            <ul className='flex flex-col gap-3 max-[768px]:w-full max-[768px]:mb-10 '>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </ul>
            <ul className='flex flex-col gap-3 max-[768px]:w-full max-[768px]:mb-10 '>
                <li>Help Centre</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
            </ul>
            <ul className='flex flex-col gap-3 max-[768px]:w-full max-[768px]:mb-10 '>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
            </ul>
            <ul className='flex flex-col gap-3 max-[768px]:w-full max-[768px]:mb-10 '>
                <li>Media Centre</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer