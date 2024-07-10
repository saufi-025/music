import Input from "./Elements/input";
import { SmallCard } from "./Elements/Card.js";
import { LuHistory } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";
import "../index.css";
const Search = () => {
    return (
        <div className="h-full w-full bg-slate-900 p-4 overflow-y-scroll overflow-hide-bar mb-12">
            <Input />
            <div className="bg-slate-900 flex overflow-x-scroll hide-scroll-bar space-x-4 py-4">
                <SmallCard
                    src="https://via.placeholder.com/100x100"
                    alt="at my worst"
                    desk="At My Worst"
                />
                <SmallCard
                    src="https://via.placeholder.com/100x100"
                    alt="at my worst"
                    desk="At My Worst"
                />
                <SmallCard
                    src="https://via.placeholder.com/100x100"
                    alt="at my worst"
                    desk="At My Worst"
                />
                <SmallCard
                    src="https://via.placeholder.com/100x100"
                    alt="at my worst"
                    desk="At My Worst"
                />
            </div>
            <div className="mt-6">
                <h3 className="text-md font-bold text-slate-300 mb-4">
                    Terbaru
                </h3>
                <ul className="space-y-4 px-2">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between font-medium text-base text-slate-300 p-2 rounded-md"
                        >
                            <div className="flex items-center">
                                <LuHistory className="mr-5 text-2xl" />
                                <span>example {index + 1}</span>
                            </div>
                            <FaTimes className="text-slate-500 cursor-pointer" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Search;
