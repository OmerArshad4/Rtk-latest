import { HiUser } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch, FiBell } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
// import Images from "../../../HelperMethods/ImgConstants";
import { useCallback, useEffect, useRef, useState } from "react";
import { customLogout } from "../../Redux/features/Auth/authSlice";
 

const Navbar = ({ toggleSidebar }) => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const LogOut = useCallback(() => {
    dispatch(customLogout());
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[72px] flex justify-between items-center px-4 md:px-10 sticky top-0 z-50 bg-white dark:bg-gray-900">
        <div className="relative max-w-[292px]">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-4">

          <div className="text-gray-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.962 17.9857H18.772C19.0372 18.0006 19.3018 17.9473 19.5405 17.8309C19.7793 17.7145 19.9842 17.5388 20.1358 17.3208C20.2874 17.1027 20.3806 16.8494 20.4066 16.585C20.4325 16.3207 20.3903 16.0541 20.284 15.8107C19.924 14.7227 18.489 13.4177 18.489 12.1337C18.489 9.28373 18.489 8.53373 17.085 6.85773C16.6307 6.31826 16.0673 5.88102 15.432 5.57473L14.649 5.19473C14.5176 5.11543 14.4043 5.00951 14.3163 4.88379C14.2283 4.75807 14.1675 4.61532 14.138 4.46473C14.0597 3.95714 13.7913 3.49831 13.3873 3.18132C12.9832 2.86432 12.4736 2.71289 11.962 2.75773C11.4596 2.72756 10.964 2.88575 10.572 3.20139C10.18 3.51704 9.91972 3.96747 9.84201 4.46473C9.80676 4.62052 9.7377 4.76666 9.63972 4.89281C9.54174 5.01896 9.41723 5.12203 9.27501 5.19473L8.49201 5.57473C7.85704 5.88114 7.29406 6.31837 6.84001 6.85773C5.43701 8.53373 5.43701 9.28373 5.43701 12.1337C5.43701 13.4177 4.06701 14.5917 3.70701 15.7447C3.49001 16.4417 3.37001 17.9857 5.18701 17.9857H11.962Z" stroke="#3E3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.225 17.9854C15.2335 18.4162 15.155 18.8444 14.994 19.2441C14.8331 19.6439 14.5931 20.007 14.2883 20.3117C13.9836 20.6164 13.6205 20.8565 13.2207 21.0174C12.821 21.1784 12.3928 21.2569 11.962 21.2484C11.531 21.2575 11.1026 21.1793 10.7027 21.0186C10.3027 20.8578 9.93942 20.6178 9.63467 20.3129C9.32991 20.0081 9.08999 19.6447 8.92935 19.2447C8.76872 18.8447 8.69069 18.4163 8.69996 17.9854" stroke="#3E3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="17" cy="6" r="3" fill="#EF4444" />
            </svg>

          </div>
          <button
            className={`bg-[#2563EB] hover:bg-[#5c81d1] text-white cursor-pointer rounded-md text-sm font-semibold w-[95px] h-[38px] md:py-2 py-2 md:px-4 px-4  shadow-md
          disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out`}
          >
            Map Lead
          </button>

          {/* <CustomBtn text="" className="w-[150px] py-0" /> */}

        </div>
        <GiHamburgerMenu
          size={30}
          onClick={toggleSidebar}
          className="text-black active:text-[#0052DE] block lg:hidden"
        />

        {showMenu && (
          <div
            className="py-2 px-2 rounded-sm bg-[#151D20] absolute top-[68px] right-14 flex flex-col items-start space-y-2 z-40"
            ref={menuRef}
          >
            <Link
              to="/signIn"
              onClick={LogOut}
              className="text-white hover:bg-[#0052DE] ps-4 pr-14 py-2 rounded-sm text-semibold cursor-pointer w-full text-left"
            >
              <TbLogout size={20} className="inline mr-2" />
              LogOut
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
