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
        
      </motion.div>
    </div>
  );
}

export default QuoteBox;
