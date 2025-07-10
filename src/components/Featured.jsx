import React from 'react';

const foods = [
  {
    id: 1,
    name: 'Cheesy Pizza',
    price: '$12.99',
    image: '/assets/pizza.jpg',
  },
  {
    id: 2,
    name: 'Classic Burger',
    price: '$9.49',
    image: '/assets/burger.jpg',
  },
  {
    id: 3,
    name: 'Spicy Tacos',
    price: '$7.99',
    image: '/assets/taccos.jpg',
  },
];

export default function Featured() {
  return (
    <section className="px-6 md:px-20 py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Dishes</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-orange-50 rounded-xl overflow-hidden shadow hover:shadow-md transition"
          >
            <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
              <p className="text-gray-600">{food.price}</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
