import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import Rightbar from "../components/Rightbar/Rightbar";
import './Home.css'; 

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full bg-gray-100">
        {/* Sidebar */}
        <div className="lg:block w-1/5 p-4 h-screen overflow-y-auto hide-scrollbar">
          <Sidebar />
        </div>

        {/* News Feed */}
        <div className="w-full lg:w-3/5 p-4">
          <NewsFeed />
        </div>

        {/* Rightbar */}
        <div className="xl:block w-1/5 p-4 overflow-y-auto hide-scrollbar h-screen">
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Home;
