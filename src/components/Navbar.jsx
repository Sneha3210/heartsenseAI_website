import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 
      bg-white/10 backdrop-blur-xl border-b border-white/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link 
          to="/" 
          className="text-white font-bold text-xl tracking-wide hover:opacity-80 transition"
        >
          ❤️ HeartSense AI
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">

          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>

          <Link to="/project" className="text-gray-300 hover:text-white transition">
            Project
          </Link>

          <Link to="/team" className="text-gray-300 hover:text-white transition">
            Team
          </Link>

          <Link to="/demo" className="text-gray-300 hover:text-white transition">
            Demo
          </Link>

          <Link to="/download" className="text-gray-300 hover:text-white transition">
            Download
          </Link>

          {/* CONTACT BUTTON */}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            text-white text-sm font-medium 
            hover:scale-105 transition transform shadow-md"
          >
            Contact
          </Link>

        </div>

      </div>
    </div>
  );
}