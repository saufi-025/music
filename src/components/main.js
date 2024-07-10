import React from "react";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { FaAlignRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdFolderCopy } from "react-icons/md";
import { SmallCard, LargeCard } from "./Elements/Card";
import Navbar from "./navbar";
import Button from "./Elements/Button";
import Header from "./Header/header";
import Categories from "./Elements/categories";
import "../index.css";

const Main = () => {
    return (
        <div className="overflow-y-scroll hide-scroll-bar bg-slate-900 min-h-screen px-2">
            {/* Header */}
            <Header />
            <div className="pt-16">
                {/* Buttons */}
                <div className="flex justify-start mb-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar">
                    {["Bersantai", "Sedih", "Senang", "Romansa", "Tidur"].map(
                        (mood, index) => (
                            <Button key={index}>{mood}</Button>
                        )
                    )}
                </div>
                {/* Recommended Videos */}
                <div className="">
                    <Categories title="Recommended" size="text-2xl">
                        <LargeCard />
                        <LargeCard />
                        <LargeCard />
                    </Categories>
                </div>
                {/* Popular */}
                <div className="mb-28 mt-10">
                    <Categories title="History" size="text-lg">
                        <SmallCard
                            src="https://via.placeholder.com/100x100"
                            alt="at my worst"
                            desk="At My Worst"
                        />
                    </Categories>
                </div>
            </div>

            {/* Footer Navigation */}
        </div>
    );
};

export default Main;
