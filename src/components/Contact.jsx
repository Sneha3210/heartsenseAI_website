export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 
      bg-gradient-to-br from-slate-900 via-indigo-950 to-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-white mb-12 text-center relative z-10">
        📞 Contact Us
      </h1>

      {/* CONTACT CARD */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 
        rounded-3xl shadow-2xl p-10 max-w-xl w-full text-white">

        {/* DETAILS */}
        <div className="space-y-4">

          <p>
            📧 <span className="text-gray-300">Email:</span> info@nmrec.edu.in
          </p>

          <p>
            👤 <span className="text-gray-300">Team Lead:</span> B. Sneha
          </p>

          <p>
            🏫 <span className="text-gray-300">College:</span> Nalla Malla Reddy Engineering College
          </p>

          <p>
            📍 <span className="text-gray-300">Location:</span> Hyderabad, Telangana
          </p>

        </div>

        {/* MESSAGE FORM */}
        <div className="mt-8">

          <h3 className="text-lg font-semibold mb-4">
            Send a Message
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
          ></textarea>

          <button
            className="w-full py-3 rounded-full 
            bg-gradient-to-r from-indigo-500 to-purple-500 
            hover:scale-105 transition"
          >
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
}