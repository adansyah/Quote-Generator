"use client";
import React, { useState, useRef } from "react";
import {motion} from "framer-motion";

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

function QuoteBox() {
  const [quote, setQuote] = useState(getRandomQuote());
  const constraintsRef = useRef(null);

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div
      ref={constraintsRef}
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={1} // nilai 0-1 (semakin besar makin lentur/mantul)
        whileDrag={{ scale: 1.05 }}
      >
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg text-center space-y-4">
          <h1 className="text-2xl font-semibold">💡 Random Quote</h1>
          <p className="text-lg italic">"{quote.text}"</p>
          <p className="text-sm font-medium text-indigo-600">- {quote.author}</p>
          <button
            onClick={handleNewQuote}
            className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition"
          >
            New Quote
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default QuoteBox;
