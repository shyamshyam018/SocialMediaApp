import React from "react";
import profilePic from "../../../public/vite.svg";

const dummyTeamMembers = [
  { id: 1, name: "Alice Johnson", avatar: null },
  { id: 2, name: "Bob Smith", avatar: null },
  { id: 3, name: "Carol White", avatar: null },
];

const Rightbar = () => {
  const ProjectRightbarHome = () => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
        {/* Announcement */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={profilePic}
            alt="announcement icon"
            className="w-[40px] h-[40px]"
          />
          <span className="font-semibold text-md text-gray-800">
            Project <b>"Nova Launch"</b> has a meeting today at 3 PM.
          </span>
        </div>

        {/* Image */}
        <img
          src={profilePic}
          alt="Meeting"
          className="w-full rounded-lg mb-6 shadow-sm"
        />

        {/* Team Members Online */}
        <h1 className="font-bold text-lg mb-4 text-gray-700">Team Members Online</h1>
        <ul className="m-0 p-0 space-y-4">
          {dummyTeamMembers.map((member) => (
            <li
              key={member.id}
              className="flex items-center gap-3 font-medium text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition"
            >
              <img
                src={member.avatar || profilePic}
                alt="avatar"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <span>{member.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ProjectRightbarDetail = () => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4">
        {/* Join Meeting Button */}
        <button className="bg-blue-600 text-white mt-4 mb-6 py-2 px-5 rounded-md cursor-pointer hover:bg-blue-700 transition-all">
          Join Meeting
        </button>

        {/* Project Details */}
        <h1 className="font-bold text-xl mb-4 text-gray-700">Project Details</h1>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="font-semibold text-slate-500">Deadline:</span>
            <span>May 25, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-500">Status:</span>
            <span>On Track</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-500">Priority:</span>
            <span>High</span>
          </div>
        </div>

        {/* Assigned Members */}
        <h1 className="font-bold text-xl mb-4 text-gray-700">Assigned Members</h1>
        <div className="grid grid-cols-3 gap-6">
          {dummyTeamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.avatar || profilePic}
                alt="team member"
                className="w-[100px] h-[100px] object-cover rounded-md shadow-sm"
              />
              <span className="mt-2 text-gray-700 font-medium">{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ flex: 3.5 }} className="p-4">
      {/* Toggle based on context */}
      <ProjectRightbarHome />
      {/* <ProjectRightbarDetail /> */}
    </div>
  );
};

export default Rightbar;
