import React from "react";
import twinkle from "../../assets/images/twinkle.jpg";
import potongBebek from "../../assets/images/angsa.jpg";
import naikDelman from "../../assets/images/delman.jpg";
import burungKakaktua from "../../assets/images/kakatua.jpg";
import lihatKebunku from "../../assets/images/kebunku.jpg";
import pelangi from "../../assets/images/pelangi.jpg";
import tikTikHujan from "../../assets/images/hujan.jpg";

const songs = [
  { title: "Twinkle Twinkle Little Star", image: twinkle, youtube: "https://youtu.be/VVLFrziDSvg?si=ZVwWibqrVYYldKYe" },
  { title: "Potong Bebek Angsa", image: potongBebek, youtube: "https://youtu.be/Vsbb0Za1Sc4?si=jNoCF8fPjj3r5X-p"},
  { title: "Naik Delman", image: naikDelman, youtube: "https://youtube.com/watch?v=kAPmPh52PC0&feature=shared"},
  { title: "Burung Kakaktua", image: burungKakaktua, youtube: "https://youtu.be/dBsab0UOfN8?si=G-GEByc9hyB7Jpsh"},
  { title: "Lihat Kebunku", image: lihatKebunku, youtube: "https://youtu.be/FnE8odUt934?feature=shared "},
  { title: "Pelangi Pelangi", image: pelangi, youtube: "https://youtu.be/5_gRFBZ1a78?feature=shared"},
  { title: "Tik Tik Bunyi Hujan", image: tikTikHujan, youtube: "https://youtu.be/F5-BaeHopKo?feature=shared"},
];

const Content3 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tutorial Video Bermain Piano</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {songs.map((song, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            {/* Ukuran gambar seragam dengan h-48 dan object-cover */}
            <img src={song.image} alt={song.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2 text-center">{song.title}</h3>
            <div className="mt-3 flex justify-center gap-3">
              <a href={song.youtube} target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-md">Tonton di YouTube</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content3;