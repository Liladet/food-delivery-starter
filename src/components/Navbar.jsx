import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ toggleCart }) => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white/10 backdrop-blur-md shadow p-4 flex justify-between items-center">
      <div className="text-orange-600 text-xl font-bold">
        <Link to="/">Foodie</Link>
      </div>
      <div className="space-x-4 flex items-center">
        <Link to="/menu">Menu</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <button
          onClick={toggleCart}
          className="relative flex items-center"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;