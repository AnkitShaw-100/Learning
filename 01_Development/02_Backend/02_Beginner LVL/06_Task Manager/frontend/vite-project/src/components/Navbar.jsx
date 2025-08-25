import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Task Manager</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/tasks" className="text-white hover:text-blue-200">Tasks</Link>
          <Link to="/profile" className="text-white hover:text-blue-200">Profile</Link>
          <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
          <Link to="/signup" className="text-white hover:text-blue-200">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
