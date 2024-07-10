import { AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { MdFolderCopy } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../index.css";
import Main from "./main";
import Playlist from "./playlist";
import Search from "./search";

const Navbar = () => {
    return (
        <div>
            <Router>
                <nav className="bg-slate-900 w-full h-auto fixed bottom-0 flex justify-center p-2">
                    <ul className="list-none w-full max-w-md flex items-center justify-center px-8 gap-24">
                        <li className="text-2xl text-white flex flex-col items-center space-y-1">
                            <Link to="/" className="flex flex-col items-center">
                                <AiOutlineHome className="hover:text-gray-400 transition-colors mt-3" />
                                <span className="mt-1 text-xs">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="text-2xl text-white flex flex-col items-center space-y-1">
                            <Link
                                to="/search"
                                className="flex flex-col items-center"
                            >
                                <IoSearchOutline className="hover:text-gray-400 transition-colors mt-3" />
                                <span className="mt-1 text-xs ml-1.5">
                                    Search
                                </span>
                            </Link>
                        </li>
                        <li className="text-2xl text-white flex flex-col items-center space-y-1">
                            <Link
                                to="/playlist"
                                className="flex flex-col items-center"
                            >
                                <MdFolderCopy className="hover:text-gray-400 transition-colors mt-3" />
                                <span className="mt-1 text-xs">Playlist</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/playlist" element={<Playlist />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Navbar;
