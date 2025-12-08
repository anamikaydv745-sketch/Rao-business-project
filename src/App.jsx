import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Home from "./pages/Home";
import BooksSection from "./components/BooksSection";

function App() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Home />
      <BooksSection />
    </div>
  );
}

export default App;
