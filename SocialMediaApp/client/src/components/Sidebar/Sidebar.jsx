import React, { useState } from "react";
import { FaHome, FaVideo, FaUsers, FaComments, FaBookmark, FaQuestion, FaBriefcase, FaBook, FaCalendarAlt } from "react-icons/fa";

const sidebarItems = [
  { label: 'Feed', icon: <FaHome /> },
  { label: 'Videos', icon: <FaVideo /> },
  { label: 'Groups', icon: <FaUsers /> },
  { label: 'Chats', icon: <FaComments /> },
  { label: 'Bookmarks', icon: <FaBookmark /> },
  { label: 'Questions', icon: <FaQuestion /> },
  { label: 'Jobs', icon: <FaBriefcase /> },
  { label: 'Courses', icon: <FaBook /> },
  { label: 'Events', icon: <FaCalendarAlt /> },
];

const Sidebar = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? sidebarItems : sidebarItems.slice(0, 8);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar with scroll */}
      <div className="w-96 p-6 bg-gradient-to-b from-blue-500 to-indigo-600 shadow-lg rounded-lg">
        <ul className="space-y-6">
          {visibleItems.map((item, idx) => (
            <li key={idx} className="flex items-center text-lg text-white hover:text-yellow-400 transition-all">
              <span className="mr-4 text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
