import React from "react";
import image from "../../assets/images/content2galeri.png"; // Ganti dengan nama file gambar yang sesuai

const Content2 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 items-center gap-12">
      {/* Bagian Teks */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 relative ml-4">
        Mari Bernyanyi, Mari Bermain!
          <span className="block w-16 h-1 bg-red-500 mt-2 "></span>
        </h2>
        <p className="text-gray-600 leading-relaxed p-4 rounded-md text-justify">
        Yuk, masuk ke dunia musik yang penuh warna! Di sini, kita bisa 
        bermain dengan nada, bernyanyi bersama, dan belajar lagu-lagu seru!
        </p>
        <p className="text-gray-600 leading-relaxed p-4 rounded-md text-justify">
        Ada banyak lagu ceria dan musik yang menyenangkan. Kamu bisa 
        belajar memainkan nada, mendengar suara unik, dan menemukan 
        musik favoritmu sendiri. Ayo bermain musik bersama!
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
