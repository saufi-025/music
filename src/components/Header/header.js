import { useState } from "react";
import { IoIosNotificationsOutline, IoMdSettings } from "react-icons/io";
import { FaAlignRight, FaTimes, FaHandsHelping } from "react-icons/fa";
import { LuUser2, LuHistory } from "react-icons/lu";
import { LiaDownloadSolid } from "react-icons/lia";
import { GrMoney } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900 z-50 flex items-center justify-between p-3 shadow-lg">
      <div className="text-white ml-1 text-2xl font-bold">Music</div>
      <div className="flex items-center space-x-6 mr-1">
        <IoIosNotificationsOutline className="text-white text-3xl cursor-pointer hover:text-gray-400 transition-colors" />
        <FaAlignRight className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-colors" onClick={toggleSidebar} />
      </div>
      {isSidebarOpen && <SideBar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

const SideBar = ({ toggleSidebar }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      <div className="absolute inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
      <div className="relative w-72 h-full bg-gray-800 text-white p-4 transition-transform transform duration-300 ease-in-out">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/100x100" alt="Account" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <div className="font-roboto text-sm font-bold mb-1">Nama Akun</div>
              <div className="text-xs">Status Langganan</div>
            </div>
          </div>
          <FaTimes className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-colors" onClick={toggleSidebar} />
        </div>
        <hr className="mt-8 bg-slate-700" />
        <ul className="space-y-7 mt-8 overflow-y-auto h-[calc(100%-150px)]">
          <SidebarItem icon={<LuUser2 />} text="Login" />
          <SidebarItem icon={<LiaDownloadSolid />} text="Download" />
          <SidebarItem icon={<LuHistory />} text="History" />
          <SidebarItem icon={<GrMoney />} text="Langganan" />
          <SidebarItem icon={<IoMdSettings />} text="Setting" />
          <SidebarItem icon={<FaHandsHelping />} text="Feedback" />
          <SidebarItem icon={<TiContacts />} text="Contact" />
        </ul>
        <div className="absolute bottom-4 w-full">
          <p className="font-poppins font-medium text-xs text-center cursor-pointer hover:text-gray-400">
            Kebijakan Privasi & Layanan
          </p>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <li className="flex items-center space-x-4 font-poppins cursor-pointer hover:text-gray-400">
    <div className="text-xl">{icon}</div>
    <span>{text}</span>
  </li>
);

export default Header;
