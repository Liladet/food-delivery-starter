// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Pizza, IceCream, Sandwich } from "lucide-react";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2022/05/17/05/08/biryani-7201670_1280.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-32 md:py-48"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center text-white pt-24 pb-16 px-6 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Crave Delivered <span className="text-orange-400">Fresh</span> & Fast
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Satisfy your hunger with a few clicks. Explore your local favorites today.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Explore Menu
          </Link>
          <Link
            to="/login"
            className="bg-white text-orange-500 hover:text-white hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="relative z-10 bg-white/10 backdrop-blur-md text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Why Choose <span className="text-orange-500">Foodie</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Pizza className="w-12 h-12 text-orange-500 animate-bounce mb-4" />
              <h4 className="text-xl font-semibold mb-2">Delicious Meals</h4>
              <p className="text-gray-600">
                Carefully crafted recipes using the freshest ingredients delivered to your door.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <IceCream className="w-12 h-12 text-pink-500 animate-bounce mb-4" />
              <h4 className="text-xl font-semibold mb-2">Sweet Treats</h4>
              <p className="text-gray-600">
                Indulge in a variety of desserts and ice creams to complete your meal.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Sandwich className="w-12 h-12 text-green-500 animate-bounce mb-4" />
              <h4 className="text-xl font-semibold mb-2">Quick Bites</h4>
              <p className="text-gray-600">
                Grab a snack or a sandwich on the go without compromising on flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-white shadow p-4 flex text-orange-600 py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </footer>
    </div>
  );
}
