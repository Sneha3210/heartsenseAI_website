import React from "react";
import sneha from "../assets/team/member1.jpg";
import adithya from "../assets/team/member2.jpg";
import harsha from "../assets/team/member3.jpg";
import sathwika from "../assets/team/member4.jpg";
import guideImg from "../assets/team/guide.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "B. Sneha",
      roll: "22B61A0507",
      dept: "Computer Science and Engineering",
      role: "Team Lead · App & AI Developer",
      img: sneha,
    },
    {
      name: "C. Adithya Vardhan Chary",
      roll: "23B65A0501",
      dept: "Computer Science and Engineering",
      role: "Hardware Integration & Maintenance",
      img: adithya,
    },
    {
      name: "B. Harsha Vardhan",
      roll: "23B65A0503",
      dept: "Computer Science and Engineering",
      role: "Data Processing & Documentation",
      img: harsha,
    },
    {
      name: "I. Sathwika",
      roll: "23B65A0505",
      dept: "Computer Science and Engineering",
      role: "System Architect & IoT Integration",
      img: sathwika,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-20 relative z-10">
        👩‍💻 Our Team
      </h1>

      {/* TEAM GRID */}
      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto relative z-10">

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl 
            shadow-xl hover:shadow-purple-500/30 transition-all duration-500 
            hover:-translate-y-4 text-center p-8"
          >

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="w-36 h-36 flex items-center justify-center rounded-full 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-lg">

                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full rounded-full object-contain bg-white"
                />
              </div>
            </div>

            {/* NAME */}
            <h2 className="text-lg font-semibold mt-6 text-white">
              {member.name}
            </h2>

            {/* ROLL */}
            <p className="text-gray-300 text-sm mt-1">
              {member.roll}
            </p>

            {/* DEPT */}
            <p className="text-gray-400 text-sm mb-4">
              {member.dept}
            </p>

            {/* ROLE BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium 
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">

              <span>{member.icon}</span>
              <span>{member.role}</span>

            </div>

          </div>
        ))}

      </div>

      {/* ================= GUIDE SECTION ================= */}
      <div className="mt-28 text-center relative z-10">

        <h2 className="text-3xl font-bold text-white mb-10">
          🎓 Project Guide
        </h2>

        <div className="flex justify-center">
          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 
            rounded-3xl shadow-xl hover:shadow-purple-500/30 
            transition-all duration-500 hover:-translate-y-3 text-center p-8 max-w-sm">

            {/* GUIDE IMAGE (ZOOMED) */}
            <div className="flex justify-center">
              <div className="w-36 h-36 flex items-center justify-center rounded-full 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-lg">

                <img
                  src={guideImg}
                  alt="Guide"
                  className="w-full h-full rounded-full object-cover scale-110 bg-white"
                />
              </div>
            </div>

            {/* NAME */}
            <h3 className="text-lg font-semibold text-white mt-6">
              Mrs. Anitha Yajjala
            </h3>

            {/* DESIGNATION */}
            <p className="text-gray-300 mt-1">
              Assistant Professor
            </p>

            {/* DEPARTMENT */}
            <p className="text-gray-400 text-sm mb-4">
              Computer Science and Engineering
            </p>

            {/* ROLE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium 
              bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">

              🎓Project Mentor

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}