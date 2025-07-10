import React from 'react';
import heroImage from '../assets/hero-food.jpg';

export default function Hero() {
  return (
    <section className="bg-orange-50 px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text content */}
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Get your favorite meals delivered fast!
        </h1>
        <p className="mt-4 text-gray-600">
          Fresh, delicious, and affordable meals delivered right to your door.
        </p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition">
          Order Now
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src={heroImage} alt="Delicious Food" className="w-full rounded-xl shadow-lg" />
      </div>
    </section>
  );
}
