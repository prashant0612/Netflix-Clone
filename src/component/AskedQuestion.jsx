import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const AskedQuestion = ({question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="rounded-md p-6 flex flex-col bg-[#413e3e] mb-5 hover:bg-[#575454] cursor-pointer duration-300">
      <div className="flex items-center justify-between ">
        <p className='text-white text-2xl font-semibold'>
          {question}
        </p>
        <button
          className={`bg-${isOpen}-500 text-white text-3xl rounded-md`}
          onClick={toggleContent}
        >
          {isOpen ? (
            <div>
              <MdClose className="ml-2" /> {/* Icon for Cancel */}
            </div>
          ) : (
            <div>
              <FaPlus className="ml-2" /> {/* Icon for Open */}
            </div>
          )}
        </button>
      </div>
      {isOpen && (
        <div>
          <p className='text-white text-2xl font-semibold mt-4'>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default AskedQuestion;
