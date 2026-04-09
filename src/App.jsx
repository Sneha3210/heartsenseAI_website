import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Team from "./components/Team";
import College from "./components/College";
import Download from "./components/Download";
import Demo from "./components/Demo";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/college" element={<College />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;