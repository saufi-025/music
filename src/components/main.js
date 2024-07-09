import React from "react";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { FaAlignRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdFolderCopy } from "react-icons/md";
import { SmalCard, LargeCard } from "./Card/lg";
import Header from "./Header/header";
import "../index.css";

const Main = () => {
  return (
    <div className="overflow-y-scroll hide-scroll-bar bg-slate-900 min-h-screen px-2">
      {/* Header */}
      <Header />

      <div className="pt-16">
        {/* Buttons */}
        <div className="flex justify-start mb-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
          {["Bersantai", "Sedih", "Senang", "Tidur", "Mengisi"].map((mood, index) => (
            <button
              key={index}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mx-1 transition-colors duration-200 ease-in-out"
            >
              {mood}
            </button>
          ))}
        </div>

        {/* Recommended Videos */}
        <LargeCard />

        {/* Listen Again */}
        <div>
          <h2 className="text-lg ml-2 font-bold mb-4 text-white">
            Dengarkan lagi
          </h2>
          <div className="flex space-x-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
            <div className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Musik yang Disukai"
                className="rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Musik yang Disukai
              </p>
            </div>
            <SmalCard />
          </div>
        </div>

        {/* Popular */}
        <div className="mb-28 mt-10">
          <h2 className="text-lg ml-2 font-bold mb-4 text-white">Populer</h2>
          <div className="flex space-x-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
            {Array(5).fill().map((_, index) => (
              <div key={index} className="flex-none bg-white p-4 rounded-lg shadow-md w-40 dark:bg-gray-800">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="When She Loved Me"
                  className="rounded-lg mb-2"
                />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  When She Loved Me
                </p>
              </div>
            ))}
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
