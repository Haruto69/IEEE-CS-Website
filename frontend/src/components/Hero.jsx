import React from "react";

export default function Hero() {
  return (
    <header className="hero-bg text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block">IEEE COMPUTER SOCIETY</span>
            <span className="block text-brandRed -mt-2">EVENTS</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-lg">
            EXCITED TO <span className="text-brandRed font-bold">BE PART OF?</span>
            <br/>
          </p>
          <div className="mt-8">
            <button className="bg-brandRed hover:opacity-90 px-6 py-3 rounded-full text-white font-semibold shadow-lg">REGISTER NOW</button>
          </div>
        </div>

        <div className="hidden md:block w-1/2">
          {/* Decorative diagonal shapes - can be replaced with SVG assets */}
          <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-black to-gray-900 opacity-80"></div>
        </div>
      </div>

      {/* Decorative stripes */}
      <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none">
        <div className="h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-30"></div>
      </div>
    </header>
  );
}
