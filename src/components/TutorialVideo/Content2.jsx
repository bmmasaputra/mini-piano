import React from "react";
import image from "../../assets/images/content2galeri.png"; // Ganti dengan nama file gambar yang sesuai

const Content2 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 items-center gap-12">
      {/* Bagian Teks */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 relative ml-4">
        Belajar Bermain Piano dengan Seru!
          <span className="block w-16 h-1 bg-red-500 mt-2 "></span>
        </h2>
        <p className="text-gray-600 leading-relaxed p-4 rounded-md text-justify">
        Melalui video tutorial interaktif, anak-anak dapat belajar bermain piano dengan cara yang menyenangkan dan mudah dimengerti. 
        Setiap video dilengkapi dengan petunjuk sederhana agar lebih mudah diikuti.
        </p>
        <button className="mt-2 px-6 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition ml-4">
          Jelajahi sekarang
        </button>
      </div>

      {/* Bagian Gambar */}
      <div className="relative">
        <img
          src={image}
          alt="Galeri Musik"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Content2;
