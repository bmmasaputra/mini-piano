import React, { useEffect } from "react";

// Pemetaan keyboard ke nada
const keyMap = {
  "tab": "C2",  1: "Db2",  q: "D2",  2: "Eb2", w: "E2",
  e: "F2",  3: "Gb2",  r: "G2",  4: "Ab2",  t: "A2",
  5: "Bb2", y: "B2",  u: "C3",  6: "Db3",  i: "D3",
  7: "Eb3", o: "E3",  p: "F3", 8: "Gb3", "[": "G3",
  "]": "A3", 9: "Bb3", "7": "B3", a: "C4", 0: "Db4",
  s: "D4", "-": "Eb4", d: "E4", f: "F4", "=": "Gb4",
  g: "G4", "+": "Ab4", h: "A4", "": "Bb4", j: "B4",
  k: "C5", "": "Db5", l: "D5", ".": "Eb5", ";": "E5",
  "'": "F5", "": "Gb5", z: "G5", "b": "Ab5", x: "A5",
  "": "Bb5", c: "B5", v: "C6", "/": "Db6", b: "D6",
  "": "Eb6", n: "E6", m: "F6", "": "Gb6", ",": "G6",
  "": "Ab6", ".": "A6", "": "Bb6", "/": "B6",
};

// Fungsi untuk memainkan suara berdasarkan nama not dan oktaf
const playSound = (noteWithOctave) => {
  if (!noteWithOctave) return;

  const note = noteWithOctave.slice(0, -1); // Mengambil nada (C, D, Db, dll.)
  const octave = noteWithOctave.slice(-1); // Mengambil oktaf (2, 3, 4, dst.)

  const adjustedOctave = octave - 1; // Menyesuaikan folder (oktav 1 = nada C2)
  const audioPath = `/sound/oktav/${adjustedOctave}/${note}${octave}.mp3`;

  console.log("Trying to play:", audioPath);

  const audio = new Audio(audioPath);
  audio.play()
    .then(() => console.log("Playing:", audioPath))
    .catch((error) => console.error("Audio playback failed:", error));

  audio.onerror = () => console.error("Error loading audio:", audioPath);
};

const Piano = () => {
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
  const blackKeys = ["Db", "Eb", "Gb", "Ab", "Bb"];
  const blackKeyPositions = [1, 2, 4, 5, 6];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const noteWithOctave = keyMap[key];

      if (noteWithOctave) {
        console.log(`Key pressed: ${key}, playing note: ${noteWithOctave}`);
        playSound(noteWithOctave);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg w-[1500px] mx-auto h-[300px] flex flex-col items-center justify-between">
      <div className="bg-white text-black text-2xl font-bold px-6 py-3 rounded-xl shadow-lg mb-4 w-[400px] text-center">
        <h2>MiniPiano</h2>
      </div>

      <div className="flex items-end justify-center overflow-x-auto w-full">
        {Array.from({ length: 5 }).map((_, octaveIndex) => {
          const octave = octaveIndex + 2; // Oktaf mulai dari 2 hingga 6
          return (
            <div key={octave} className="relative">
              <div className="flex">
                {whiteKeys.map((key) => {
                  return (
                    <button
                      key={`${key}${octave}`}
                      className="w-10 h-48 bg-white border border-gray-800 rounded-b-lg active:bg-gray-300"
                      onClick={() => playSound(`${key}${octave}`)}
                    >
                      {key}{octave}
                    </button>
                  );
                })}
              </div>

              <div className="absolute top-0 flex w-full justify-center">
                {blackKeys.map((key, index) => {
                  return (
                    <button
                      key={`${key}${octave}`}
                      className="w-8 h-32 bg-black text-white border border-gray-700 rounded-b-lg absolute active:bg-gray-700"
                      style={{
                        left: `${blackKeyPositions[index] * 40 - 18}px`,
                      }}
                      onClick={() => playSound(`${key}${octave}`)}
                    >
                      {key}{octave}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Piano;