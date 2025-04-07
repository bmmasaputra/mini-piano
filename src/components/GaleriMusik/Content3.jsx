import React from "react";
import twinkle from "../../assets/images/twinkle.jpg";
import potongBebek from "../../assets/images/angsa.jpg";
import naikDelman from "../../assets/images/delman.jpg";
import burungKakaktua from "../../assets/images/kakatua.jpg";
import lihatKebunku from "../../assets/images/kebunku.jpg";
import pelangi from "../../assets/images/pelangi.jpg";
import tikTikHujan from "../../assets/images/hujan.jpg";

const songs = [
  { title: "Twinkle Twinkle Little Star", image: twinkle, youtube: "https://www.youtube.com/watch?v=yCjJyiqpAuU", notes: "https://drive.google.com/file/d/1KDTnGUESjAvAXZEXPNHGsFordoMBnf0u/view?usp=sharing" },
  { title: "Potong Bebek Angsa", image: potongBebek, youtube: "https://www.youtube.com/watch?v=Ir7CnQKi8bY", notes: "https://drive.google.com/file/d/1_0W67RTXi62Lv2G-JJoeMFT7HUIGW0T1/view?usp=sharing" },
  { title: "Naik Delman", image: naikDelman, youtube: "https://www.youtube.com/watch?v=ITYZq0rFdZg", notes: "https://drive.google.com/file/d/1XdQtZICQIBYePSxA5_au3Z37mjPdE8MX/view?usp=sharing" },
  { title: "Burung Kakaktua", image: burungKakaktua, youtube: "https://www.youtube.com/watch?v=JT3AOK5QhsA", notes: "https://drive.google.com/file/d/1NbsXoeeLYTLZdG0LwPjkGoAH5aE-tmQJ/view?usp=sharing" },
  { title: "Lihat Kebunku", image: lihatKebunku, youtube: "https://www.youtube.com/watch?v=snnSO03aoG4", notes: "https://drive.google.com/file/d/1okFr4pPfw5mkLqNdHfDYExzE06W8LzS8/view?usp=sharing" },
  { title: "Pelangi Pelangi", image: pelangi, youtube: "https://www.youtube.com/watch?v=Ilu_bYSDp1c", notes: "https://drive.google.com/file/d/1EhAI_R2MCoH5VjYzoBWH1T064DF2qYcm/view?usp=sharing" },
  { title: "Tik Tik Bunyi Hujan", image: tikTikHujan, youtube: "https://www.youtube.com/watch?v=wOd4JqflyPM", notes: "https://drive.google.com/file/d/1mP3Nj6Mn-x7OtNtTdCX8ZKI6kyTi4HJu/view?usp=sharing" },
];

const Content3 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Galeri Musik Anak</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {songs.map((song, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            {/* Ukuran gambar seragam dengan h-48 dan object-cover */}
            <img src={song.image} alt={song.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2 text-center">{song.title}</h3>
            <div className="mt-3 flex justify-center gap-3">
              <a href={song.youtube} target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-md">Tonton di YouTube</a>
              <a href={song.notes} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-md">Lihat Notasi</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content3;