import React from "react";

const books = [
  {
    title: "Danielle Steel",
    img: "https://i.ibb.co/1Q1mZ0b/danielle.jpg",
  },
  {
    title: "Eat Fat Get Thin",
    img: "https://i.ibb.co/8P9Hc12/eatfat.jpg",
  },
  {
    title: "Stephen Hawking",
    img: "https://i.ibb.co/N6D6mPC/hawking.jpg",
  },
  {
    title: "Jordan Peterson",
    img: "https://i.ibb.co/h9Lzmhg/peterson.jpg",
  },
];

const BooksSection = () => {
  return (
    <div className="px-8 py-10">
      <h2 className="text-2xl font-bold mb-2">Books</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        The most recent books that arrived in our bookstore.
      </p>

      {/* Book Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <div key={index} className="shadow-md rounded-md p-3">
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="mt-3 font-semibold">{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
