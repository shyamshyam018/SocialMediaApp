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
    <div className="w-full max-w-[600px] mx-auto my-6 rounded-xl shadow-xl bg-gradient-to-r from-violet-500 via-purple-400 to-blue-500 p-6">
      {/* Top Section */}
      <div className="flex items-center gap-3">
        <img
          src={profilePic}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover shadow-lg hover:scale-110 transition"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full outline-none text-sm p-3 rounded-lg bg-white-1000 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-14 h-14 rounded-md object-cover shadow-lg"
          />
        )}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-sm text-gray-600">
          <label htmlFor="file" className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
            <MdPermMedia className="text-orange-600 text-lg" />
            <span className="text-white font-semibold">Media</span>
            <input
              type="file"
              id="file"
              className="hidden"
              accept=".png, .jpg, .jpeg"
              onChange={handleFileChange}
            />
          </label>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition">
            <MdLabel className="text-blue-600 text-lg" />
            <span className="text-white font-semibold">Tags</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 transition">
            <MdEmojiEmotions className="text-yellow-500 text-lg" />
            <span className="text-white font-semibold">Emoji</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
            <MdLocationPin className="text-red-400 text-lg" />
            <span className="text-white font-semibold">Location</span>
          </div>
        </div>

        <button
          onClick={handlePostUpload}
          disabled={loading}
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:from-teal-600 hover:to-blue-600 transition-all disabled:bg-gray-300"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default UploadPost;
