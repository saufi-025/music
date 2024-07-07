
import { AiOutlineHome } from "react-icons/ai"; 
import { IoSearchOutline } from "react-icons/io5";
import  { MdFolderCopy } from "react-icons/md";
import Main from "./main"
import "../index.css"
const Navbar = () => {
  return(
    <div className="relative min-h-screen">
    <Main />
      <nav className="bg-slate-900 w-full h-auto fixed bottom-0 flex justify-center p-2">
        <ul className="list-none w-full max-w-md flex items-center justify-between px-4">
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
    )
}
export default Navbar;