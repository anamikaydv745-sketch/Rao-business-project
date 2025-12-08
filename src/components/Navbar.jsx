import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to root HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-8 py-3 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-purple-700 dark:text-purple-300">
        BookSuggester
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <li className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-300">Home</li>
        <li className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-300">Books</li>
        <li className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-300">Categories</li>
        <li className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-300">About</li>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Login Button */}
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
