// src/pages/Menu.jsx
import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const menuItems = [
  { id: 101, name: "Margherita Pizza", price: 9.99, image: "https://cdn.pixabay.com/photo/2017/08/06/06/42/pizza-2589569_1280.jpg" },
  { id: 102, name: "Cheeseburger", price: 7.49, image: "https://cdn.pixabay.com/photo/2019/08/05/07/31/burger-4385386_1280.jpg" },
  { id: 103, name: "Chicken Wrap", price: 6.99, image: "https://cdn.pixabay.com/photo/2021/01/06/10/11/shawarma-5893935_1280.jpg" },
  { id: 104, name: "Spagetti Bolognese", price: 5.99, image: "https://cdn.pixabay.com/photo/2024/08/01/19/25/ai-generated-8938045_1280.jpg" },
  { id: 105, name: "Maccaroni", price: 10.49, image: "https://cdn.pixabay.com/photo/2024/08/01/19/25/ai-generated-8938047_1280.jpg" },
  { id: 106, name: "Sushi Platter", price: 13.99, image: "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg" },
];

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-6"
    style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589577_1280.jpg')",
      }}>
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4 flex flex-col justify-between h-40">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
