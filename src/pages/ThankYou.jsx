import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 text-gray-800 p-6">
      <FaCheckCircle className="text-green-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
      <p className="mb-6 text-center text-lg">
        Your delicious food is on the way. We'll notify you when it's out for delivery.
      </p>
      <Link
        to="/menu"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow"
      >
        Back to Menu
      </Link>
    </div>
  );
}
