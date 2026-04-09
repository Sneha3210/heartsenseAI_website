import React from "react";
import projectMain from "../assets/project-main.png";
import workingImg from "../assets/project-working.png";
import resultsImg from "../assets/results.png";

export default function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>

      {/* ================= HERO ================= */}
      <div className="relative w-full h-[450px] overflow-hidden">

        <img
          src={projectMain}
          alt="project"
          className="w-full h-full object-cover object-center scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            ❤️ HeartSense AI
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl">
            Real-Time Silent Heart Attack Detection using AI & IoT-Based Biosignal Monitoring
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20 relative z-10">

        {/* ================= MOTIVATION ================= */}
        <section className="bg-white/10 backdrop-blur-xl border border-white/20 
          p-10 rounded-3xl shadow-xl text-white">

          <h2 className="text-3xl font-bold mb-4">
            💡 Motivation Behind the Project
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Many heart attacks occur silently without noticeable symptoms,
            especially in high-risk individuals such as diabetic patients and elderly people.
            Traditional systems detect problems only after symptoms appear.
            <br /><br />
            This project aims to provide continuous monitoring and early detection using AI and IoT,
            enabling timely medical intervention and saving lives.
          </p>
        </section>

        {/* ================= OBJECTIVES ================= */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">
            🎯 Objectives of the Project
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Early detection of silent heart attacks",
              "Continuous real-time monitoring",
              "Reduce mortality with instant alerts",
              "AI-based prediction system",
              "Remote healthcare support",
              "Multi-signal analysis",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 
                p-6 rounded-2xl text-white hover:scale-105 hover:shadow-purple-500/20 
                transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ================= TARGET AUDIENCE ================= */}
        <section className="bg-white/10 backdrop-blur-xl border border-white/20 
          text-white p-10 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            👥 Target Audience
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <p>• High-risk cardiac patients</p>
            <p>• Elderly individuals</p>
            <p>• Diabetic patients</p>
            <p>• Stress-prone individuals</p>
            <p>• Rural area patients</p>
            <p>• Healthcare providers</p>
          </div>
        </section>

        {/* ================= WORKING PROCESS ================= */}
        <section className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src={workingImg}
              alt="workflow"
              className="rounded-3xl shadow-xl hover:scale-105 transition w-full"
            />
            <p className="text-sm text-gray-400 mt-2 text-center">
              Complete workflow of HeartSense AI system
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              ⚙️ Working Process
            </h2>

            <ol className="space-y-3 text-gray-300">
              <li>1. Sensors collect physiological signals</li>
              <li>2. ESP32 processes real-time data</li>
              <li>3. Data sent to ThingSpeak cloud</li>
              <li>4. AI model analyzes patterns (CNN + LSTM)</li>
              <li>5. Detects abnormalities</li>
              <li>6. Displays results in mobile app</li>
              <li>7. Sends emergency alerts with GPS</li>
            </ol>
          </div>

        </section>

        {/* ================= RESULTS ================= */}
        <section className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              📊 Results
            </h2>

            <p className="text-gray-300 mb-4">
              The system successfully monitors real-time biosignals such as ECG,
              SpO₂, and GSR, providing accurate AI-based predictions and alerts.
            </p>

            <div className="space-y-2 text-gray-300">
              <p>✔ Real-time ECG monitoring</p>
              <p>✔ Multi-signal analysis</p>
              <p>✔ Early risk detection</p>
              <p>✔ Emergency alert system</p>
            </div>
          </div>

          <div>
            <img
              src={resultsImg}
              alt="results"
              className="rounded-3xl shadow-xl hover:scale-105 transition w-full"
            />
            <p className="text-sm text-gray-400 mt-2 text-center">
              Real-time health monitoring dashboard output
            </p>
          </div>

        </section>

        {/* ================= ADVANTAGES ================= */}
        <section className="bg-white/10 backdrop-blur-xl border border-white/20 
          text-white p-10 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            🚀 Advantages 
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Real-time monitoring",
              "Early detection",
              "AI-based prediction",
              "Portable system",
              "Accurate analysis",
              "Emergency alerts",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}