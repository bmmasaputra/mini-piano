import React from "react";
import image1 from "../../assets/images/tangganada.png"; // Ganti dengan gambar yang sesuai
import image2 from "../../assets/images/posisijari.png"; // Ganti dengan gambar yang sesuai

const Content3 = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      {/* Bagian Pertama: Tangga Nada */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Text */}
        <div>
          <p className="text-sm text-gray-300 mb-2">MiniPiano</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tangga Nada</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tangga Nada Mayor terdengar dengan nuansa ceria, gembira, dan
            bersemangat seperti <strong>C-D-E-F-G-A-B-C</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tangga Nada Minor terdengar dengan nuansa sedih, tenang, dan
            misterius seperti <strong>A-B-C-D-E-F-G-A</strong>.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-700 text-sm">
{`C  = C – D – E – F – G – A – B – C
D  = D – E – F# - G – A – B – C# - D 
E  = E – F# - G# - A – B – C# – D# – E 
F  = F – G – A – A# - C – D – E – F
G  = G – A – B – C – D – E – F# - G
A  = A – B – C# - D – E – F# - G# - A
B  = B – C# - D# - E – F# - G# - A# - B`}
          </pre>
        </div>
        {/* Image */}
        <div>
          <img
            src={image1}
            alt="Story Image"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Bagian Kedua: Keterangan Jari & Penjarian */}
      <div className="grid md:grid-cols-2 items-center gap-12 mt-16">
        {/* Image */}
        <div>
          <img
            src={image2}
            alt="Finger Position Image"
            className="w-full rounded-lg mt-[-370px]"
          />
        </div>
        {/* Text */}
        <div>
          <p className="text-sm text-gray-300 mb-2">MiniPiano</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Keterangan Penjarian</h2>
          
          {/* Keterangan Jari */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Keterangan Jari:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-700 text-sm mb-4">
{`Jempol   = 1
Telunjuk  = 2
Tengah    = 3
Manis     = 4
Kelingking = 5`}
          </pre>

          {/* Penjarian Tangan Kanan */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Penjarian pada Tangan Kanan:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-700 text-sm mb-4">
{`Do  = 1
Re  = 2
Mi  = 3
Fa  = 1
Sol = 2
La  = 3
Si  = 4
Do  = 5`}
          </pre>

          {/* Penjarian Tangan Kiri */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Penjarian pada Tangan Kiri:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-700 text-sm">
{`Do  = 5
Re  = 4
Mi  = 3
Fa  = 2
Sol = 1
La  = 3
Si  = 2
Do  = 1`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Content3;