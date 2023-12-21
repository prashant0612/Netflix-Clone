import React from "react";
import Netflix from "/src/images/netflix.png";
import { IoLanguage } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-screen bg-[#000000b9] w-full relative max-[768px]:w-full">
      <div className="w-full  flex justify-between px-20 py-5 max-[768px]:w-full max-[768px]:justify-between max-[768px]:px-5 ">
        <img className=" w-40 max-[768px]:w-30" src={Netflix} />
        <div className="flex">
          <div className="flex border-2 border-white bg-transparent rounded-md mr-4 px-2 max-[768px]:hidden">
            <div className="text-white text-xl flex items-center">
              <IoLanguage />
            </div>
            <select className=" text-xl mr-2 bg-transparent text-white ">
              <option value="English" className=" text-black bg-white">English</option>
              <option value="Hindi" className=" text-black bg-white">Hindi</option>
            </select>
          </div>
          <button className=" bg-red-800 p-1 px-3  text-white rounded-md">
            Sign Out
          </button>
        </div>
      </div>

      <div className=" ml-[12rem] mt-36 border-white max-[768px]:ml-0 max-[768px]:p-6">
        <div className="  h-80 flex flex-col flex-wrap gap-9">
          <h1 className="text-white font-bold text-6xl max-[768px]:text-4xl">
            Unlimited movies, TV <br></br> shows and more
          </h1>
         <p className=" text-white text-2xl ">Starts at ₹149. Cancel anytime.</p>
        </div>

        <div className="flex max-[768px]:flex-col ">
          <input
            type="email"
            placeholder="Email address"
            className="w-[28rem] h-[4rem] rounded-md px-5 text-xl text-white border-2 border-red-600 bg-transparent max-[768px]:w-full"
          ></input>
          <button className="text-2xl bg-red-600  text-white h-[4rem] w-[15rem] px-4 font-semibold rounded-md ml-[1%] max-[768px]:text-xl max-[768px]:px-3 max-[768px]:whitespace-nowrap max-[768px]:w-[12rem] max-[768px]:mt-2 ">
            Finish Sign Up &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
