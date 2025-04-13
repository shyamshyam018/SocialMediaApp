import React from "react";
import UploadPost from "../UploadPost/UploadPost";
import Post from "../Posts/Posts";

const NewsFeed = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 px-4 flex justify-center">
      <div className="w-full max-w-[640px]">
        <UploadPost />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default NewsFeed;
