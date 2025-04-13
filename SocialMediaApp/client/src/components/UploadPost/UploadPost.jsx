import React, { useState } from "react";
import {
  MdLabel,
  MdPermMedia,
  MdEmojiEmotions,
  MdLocationPin,
} from "react-icons/md";
import profilePic from "../../../public/vite.svg";

const UploadPost = () => {
  const [desc, setDesc] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePostUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDesc("");
      setPreview(null);
      alert("Post uploaded!");
    }, 1500);
  };

  return (
    <div className="w-full max-w-[600px] mx-auto my-6 rounded-xl shadow-md bg-white p-4">
      {/* Top Section */}
      <div className="flex items-center gap-3">
        <img
          src={profilePic}
          alt="profile"
          className="w-11 h-11 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full outline-none text-sm"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-12 h-12 rounded-md object-cover"
          />
        )}
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-sm text-gray-600">
          <label htmlFor="file" className="flex items-center gap-1 cursor-pointer">
            <MdPermMedia className="text-orange-600" />
            <span>Media</span>
            <input
              type="file"
              id="file"
              className="hidden"
              accept=".png, .jpg, .jpeg"
              onChange={handleFileChange}
            />
          </label>
          <div className="flex items-center gap-1 cursor-pointer">
            <MdLabel className="text-blue-600" />
            <span>Tags</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MdEmojiEmotions className="text-yellow-500" />
            <span>Emoji</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MdLocationPin className="text-red-400" />
            <span>Location</span>
          </div>
        </div>

        <button
          onClick={handlePostUpload}
          disabled={loading}
          className="bg-indigo-500 text-white px-4 py-1.5 rounded-md font-semibold hover:bg-indigo-600 transition"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default UploadPost;
