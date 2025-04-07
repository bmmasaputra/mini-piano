import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPiano from "./pages/MainPiano";
import GaleriMusik from "./pages/GaleriMusik";
import TutorialVideo from "./pages/TutorialVideo";
import Navbar from "./components/Navbar"; // Aktifkan Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar muncul di semua halaman */}
      <Routes>
        <Route path="/" element={<MainPiano />} />
        <Route path="/galeri-musik" element={<GaleriMusik />} />
        <Route path="/tutorial-video" element={<TutorialVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
