import React from 'react';

const Post = ({ user, content, image }) => {
  return (
    <div className="max-w-xl mx-auto my-6 bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <img
          src={user.profilePic}
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-gray-500 text-sm">{user.timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-4">
        <p className="text-gray-700">{content}</p>
      </div>

      {/* Post Image */}
      {image && (
        <div className="w-full h-64 overflow-hidden">
          <img
            src={image}
            alt="Post Image"
            className="object-cover w-full h-full transition-transform transform hover:scale-110"
          />
        </div>
      )}

      {/* Post Footer */}
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <button className="text-blue-500 hover:text-blue-700 transition-all">
          Like
        </button>
        <button className="text-blue-500 hover:text-blue-700 transition-all">
          Comment
        </button>
        <button className="text-blue-500 hover:text-blue-700 transition-all">
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
