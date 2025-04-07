import React from "react";

const Content2 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        className="px-8 py-6 shadow-lg w-full text-center"
        style={{
          background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(236,29,253,1) 50%, rgba(252,176,69,1) 100%)",
        }}
      >
        <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
          MiniPiano
        </h2>
        <p className="px-8 py-2 text-lg text-gray-200 drop-shadow-lg">
          MiniPiano adalah aplikasi interaktif yang dirancang untuk membantu anak-anak belajar bermain piano dengan cara yang menyenangkan dan mudah diakses. 
          Dengan antarmuka yang ramah pengguna dan desain yang menarik, MiniPiano memungkinkan anak-anak untuk mengenal berbagai nada dan akor dasar hanya dengan menggunakan keyboard atau klik pada layar. 
          Aplikasi ini juga menyediakan fitur suara realistis agar mereka bisa merasakan pengalaman bermain piano sungguhan.
        </p>
      </div>
    </div>
  );
};

export default Content2;