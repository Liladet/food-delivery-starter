import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

// Firebase
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function OrderSummary() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // ✅ No `.replace()` needed — assuming `price` is a number
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert('🛒 Your cart is empty!');
      return;
    }

    try {
      await addDoc(collection(db, 'orders'), {
        items: cartItems,
        total: totalPrice.toFixed(2),
        placedAt: Timestamp.now(),
      });

      clearCart();
      navigate('/thank-you');
    } catch (error) {
      console.error('❌ Error placing order:', error);
      alert('Something went wrong while placing the order.');
    }
  };

  return (
    <div className="p-6 md:p-20 bg-orange-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Order Summary</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          Your cart is empty.{' '}
          <Link to="/menu" className="text-orange-500 underline">
            Go to Menu
          </Link>
        </p>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.name}`}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
            </div>
          ))}

          <div className="text-right font-semibold text-lg text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
