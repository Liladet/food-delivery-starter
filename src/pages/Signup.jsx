// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">Create Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input className="w-full px-3 py-2 border rounded" type="password" required />
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account? <Link to="/login" className="text-orange-600 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
