import React from "react";
import demoVideo from "../assets/demo.mp4";

export default function Demo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 
      bg-gradient-to-br from-slate-900 via-indigo-950 to-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 relative z-10">
        🎥 Project Demo
      </h1>

      {/* VIDEO CONTAINER */}
      <div className="relative z-10 flex justify-center items-center w-full max-w-4xl">

        <video
          src={demoVideo}
          controls
          className="w-full h-auto rounded-2xl shadow-2xl object-contain"
        />

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-300 mt-8 text-center max-w-xl relative z-10">
        This demo shows real-time biosignal monitoring, AI prediction,
        and emergency alert generation in HeartSense AI.
      </p>

    </div>
  );
}