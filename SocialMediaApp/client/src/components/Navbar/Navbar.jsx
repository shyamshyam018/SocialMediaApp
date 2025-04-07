import React from 'react';
import Logo from '../Logo/Logo';
import { IoIosNotifications } from "react-icons/io";
import { IoChatboxOutline, IoPerson } from "react-icons/io5";
import profilePic from "../../../public/vite.svg";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Left Section - Logo + Title */}
        <div className="flex items-center gap-4">
          <Logo />
          <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide">ConnectSphere</h1>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden md:flex items-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white placeholder-white/70 text-md outline-none w-full"
          />
        </div>

        {/* Right Section - Nav Links + Icons + Profile */}
        <div className="flex items-center gap-6 text-white text-sm sm:text-base font-medium">
          <button className="hover:text-gray-200 transition-all">Home</button>
          <button className="hover:text-gray-200 transition-all">Timeline</button>

          <div className="flex items-center gap-5 sm:gap-6 text-lg sm:text-xl">
            <IconWithBadge Icon={IoPerson} count={9} />
            <IconWithBadge Icon={IoChatboxOutline} count={3} />
            <IconWithBadge Icon={IoIosNotifications} count={7} />
          </div>

          {/* Profile Image */}
          <img
            src={profilePic}
            alt="pp"
            className="h-9 w-9 rounded-full border border-white object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

const IconWithBadge = ({ Icon, count }) => {
  return (
    <div className="relative cursor-pointer hover:scale-105 transition-transform">
      <Icon className="text-white text-xl" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-semibold">
          {count}
        </span>
      )}
    </div>
  );
};

export default Navbar;
