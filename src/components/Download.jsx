export default function Download() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 
      bg-gradient-to-br from-slate-900 via-indigo-950 to-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full"></div>

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-white mb-10 relative z-10 text-center">
        📱 Download HeartSense AI App
      </h2>

      {/* MAIN CARD */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 
        rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">

        {/* DOWNLOAD BUTTON */}
        <a
          href="https://github.com/Sneha3210/heartsenseAI_backend_v2/releases/tag/v1.1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 px-10 py-4 rounded-full 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          hover:scale-105 transition transform 
          shadow-lg text-white font-semibold text-lg"
        >
          ⬇ Download APK
        </a>

        {/* INSTALLATION STEPS */}
        <div className="text-left bg-white/5 border border-white/10 
          p-6 rounded-2xl shadow-inner">

          <h3 className="font-semibold mb-4 text-white text-lg">
            📌 Installation Steps
          </h3>

          <ol className="list-decimal ml-5 text-gray-300 space-y-2">
            <li>Click on the Download APK button</li>
            <li>APK file will be downloaded to your device</li>
            <li>Enable “Install from Unknown Sources” in settings</li>
            <li>Open the downloaded APK file</li>
            <li>Install and launch the application</li>
          </ol>

        </div>

      </div>

      {/* FOOT NOTE */}
      <p className="text-gray-400 mt-10 text-sm">
        Compatible with Android devices • Version 1.1
      </p>

    </div>
  );
}