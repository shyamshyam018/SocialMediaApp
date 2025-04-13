import React, { useState } from 'react';
import {
  FaHome,
  FaVideo,
  FaUsers,
  FaComments,
  FaBookmark,
  FaQuestion,
  FaBriefcase,
  FaBook,
  FaCalendarAlt,
} from 'react-icons/fa';

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
  // Add more items to test scroll
  { label: 'More 1', icon: <FaHome /> },
  { label: 'More 2', icon: <FaHome /> },
  { label: 'More 3', icon: <FaHome /> },
  { label: 'More 4', icon: <FaHome /> },
  { label: 'More 5', icon: <FaHome /> },

];

const Sidebar = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? sidebarItems : sidebarItems.slice(0, 8);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* Sidebar with scroll */}
      <div className="w-96 p-12">
        <ul className="space-y-6 ">
          {visibleItems.map((item, idx) => (
            <li key={idx} className="flex items-center text-lg text-gray-700 hover:text-blue-500 transition">
              <span className="mr-3 text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Other content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
