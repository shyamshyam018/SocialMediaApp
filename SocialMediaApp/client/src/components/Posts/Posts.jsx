import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import profilePic from "../../../public/vite.svg";

const Post = () => {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-indigo-700 font-semibold text-sm">shyam_raj</h2>
            <p className="text-gray-400 text-xs">2 hours ago</p>
          </div>
        </div>
        <MdOutlineMoreVert className="text-gray-600 text-lg cursor-pointer" />
      </div>

      {/* Caption */}
      <div className="px-4 text-sm text-gray-700 pb-2">
        Here’s my first post on this new platform! Excited to share more 😄
      </div>

      {/* Image */}
      <div>
        <img
          src={profilePic}
          alt="Post"
          className="w-full max-h-[400px] object-cover"
        />
      </div>

      {/* Reactions */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <img
            src={profilePic}
            alt="Like"
            className="w-6 h-6 rounded-full cursor-pointer hover:scale-110 transition"
          />
          <img
            src={profilePic}
            alt="Love"
            className="w-6 h-6 rounded-full cursor-pointer hover:scale-110 transition"
          />
          <span className="text-sm text-gray-600 ml-2">120 likes</span>
        </div>
        <span className="text-sm text-indigo-500 cursor-pointer hover:underline">
          24 comments
        </span>
      </div>
    </div>
  );
};

export default Post;
