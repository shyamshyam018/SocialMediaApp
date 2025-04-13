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
      <>
        <div className="flex items-center">
          <img
            src={profilePic}
            alt="announcement icon"
            className="w-[40px] h-[40px] mr-[10px]"
          />
          <span className="font-semibold text-md">
            Project <b>"Nova Launch"</b> has a meeting today at 3 PM.
          </span>
        </div>

        <img
          src={profilePic}
          alt="Meeting"
          className="w-full rounded-lg mt-[30px] mb-[30px]"
        />

        <h1 className="font-bold text-lg mb-[20px]">Team Members Online</h1>
        <ul className="m-0 p-0">
          {dummyTeamMembers.map((member) => (
            <li
              key={member.id}
              className="flex items-center mb-4 gap-3 font-medium"
            >
              <img
                src={member.avatar || profilePic}
                alt="avatar"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              {member.name}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const ProjectRightbarDetail = () => {
    return (
      <>
        <button className="bg-blue-600 text-white mt-10 mb-5 py-2 px-5 rounded-md cursor-pointer hover:bg-blue-700 transition">
          Join Meeting
        </button>

        <h1 className="font-bold text-xl mb-[10px]">Project Details</h1>
        <div className="mb-[30px]">
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Deadline:
            </span>
            <span>May 25, 2025</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Status:
            </span>
            <span>On Track</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Priority:
            </span>
            <span>High</span>
          </div>
        </div>

        <h1 className="font-bold text-xl mb-[10px]">Assigned Members</h1>
        <div className="grid grid-cols-3 gap-4">
          {dummyTeamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.avatar || defaultAvatar}
                alt="team member"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>{member.name}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div style={{ flex: 3.5 }}>
      <div className="pt-[20px] pr-[20px]">
        {/* Toggle based on context */}
        <ProjectRightbarHome />
        {/* <ProjectRightbarDetail /> */}
      </div>
    </div>
  );
};

export default Rightbar;
