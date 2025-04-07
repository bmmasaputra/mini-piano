import React from 'react';
import background from '../../assets/images/background1.png'; 

const Content1 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center h-screen"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
      }}
    >
      <div className="w-full text-center mt-8">
        <h1 className="text-4xl font-bold text-white mb-4">Belajar Bermain Piano dengan Mudah</h1>
        <p className="text-lg text-white mb-8">Temukan tutorial menarik untuk belajar memainkan lagu-lagu favoritmu!</p>
      </div>
    </div>
  );
};

export default Content1;
