import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

import projectImg from "../assets/project.png";
import teamImg from "../assets/team.png";
import demoImg from "../assets/demo.png";
import downloadImg from "../assets/download.png";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[550px]">

        {/* IMAGE */}
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-left">

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            ❤️ HeartSense AI
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Real-Time Silent Heart Attack Detection using AI-Driven Biosignal Monitoring & GPS Alert System
          </p>

        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="px-6 md:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        

          {/* CARD COMPONENT */}
          {[
            {
              to: "/project",
              img: projectImg,
              title: "📊 Project",
              subtitle: "Overview",
            },
            {
              to: "/team",
              img: teamImg,
              title: "👩‍💻 Team",
              subtitle: "Members",
            },
            {
              to: "/demo",
              img: demoImg,
              title: "🎥 Demo",
              subtitle: "Watch",
            },
            {
              to: "/download",
              img: downloadImg,
              title: "📱 App",
              subtitle: "Download",
            },
          ].map((card, index) => (
            <Link
              key={index}
              to={card.to}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-3xl shadow-xl hover:shadow-purple-500/30 
              transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >

              {/* IMAGE */}
              <div className="h-64 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="p-6 text-center text-white">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-gray-300 text-sm">{card.subtitle}</p>
              </div>

            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}