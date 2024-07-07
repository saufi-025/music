import React from 'react';
import { AiOutlineHome, AiOutlineBell } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { MdFolderCopy } from 'react-icons/md';
import "../index.css"
const Main = () => {
  return (
    <div className=" overflow-y-scroll hide-scroll-bar bg-slate-900 min-h-screen px-2">
      {/* Header */}
      <div className="flex w-full items-center justify-between p-3 mb-10">
        <div className="text-white ml-1 text-2xl font-bold">Music</div>
        <div className="flex items-center space-x-4 mr-3">
          <AiOutlineBell className="text-white text-2xl" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-start mb-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg ml-1 mx-1">
          Bersantai
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mx-1">
          Sedih
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mx-1">
          Senang
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mx-1">
          Tidur
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mx-1">
          Mengisi
        </button>
      </div>

      {/* Recommended Videos */}
      <div className="mb-10">
        <h2 className="text-xl ml-2 font-bold mb-2 text-white">Video musik yang direkomendasikan</h2>
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Heather - Conan Gray (cover)"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl mb-2 font-semibold dark:text-white">Heather - Conan Gray (cover)</h3>
          <p className="text-gray-600 dark:text-gray-400">Kylie · 5,9 jt x ditonton</p>
        </div>
      </div>

      {/* Listen Again */}
      <div>
        <h2 className="text-xl ml-2 font-bold mb-2 text-white">Dengarkan lagi</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Musik yang Disukai"
              className="rounded-lg mb-2"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">Musik yang Disukai</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Angels Like You"
              className="rounded-lg mb-2"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">Angels Like You</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="When She Loved Me"
              className="rounded-lg mb-2"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">When She Loved Me</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="When She Loved Me"
              className="rounded-lg mb-2"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">When She Loved Me</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="When She Loved Me"
              className="rounded-lg mb-2"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">When She Loved Me</p>
          </div>
        </div>
      </div>
      {/* Listen Again */}
      <div className="mb-28">
        <h2 className="text-xl ml-2 font-bold mb-2 text-white">Dengarkan lagi</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Musik yang Disukai"
              className="rounded-lg mb-2"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">Musik yang Disukai</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Angels Like You"
              className="rounded-lg mb-2"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">Angels Like You</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="When She Loved Me"
              className="rounded-lg mb-2"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">When She Loved Me</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="When She Loved Me"
              className="rounded-lg mb-2"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">When She Loved Me</p>
          </div>
          <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
            <img
              src="https://via.placeholder.com/100x100"
              alt="When She Loved Me"
              className="rounded-lg mb-2"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">When She Loved Me</p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <nav className="bg-slate-900 w-full h-auto fixed bottom-0 flex justify-center p-2">
        <ul className="list-none w-full max-w-md flex items-center justify-center px-4 gap-28">
          <li className="text-2xl text-white flex flex-col items-center space-y-1">
            <AiOutlineHome className="hover:text-gray-400 transition-colors mt-3" />
            <span className="text-xs ml-0.5">Home</span>
          </li>
          <li className="text-2xl text-white flex flex-col items-center space-y-1">
            <IoSearchOutline className="hover:text-gray-400 transition-colors mt-3" />
            <span className="text-xs ml-1.5">Search</span>
          </li>
          <li className="text-2xl text-white flex flex-col items-center space-y-1">
            <MdFolderCopy className="hover:text-gray-400 transition-colors mt-3" />
            <span className="text-xs">Playlist</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
