import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "https://img.freepik.com/free-photo/cute-plush-toy-with-knitted-hat-scarf_123827-23221.jpg",
    "https://img.freepik.com/free-photo/beautiful-knitted-toy-for-children_123827-23222.jpg",
    "https://img.freepik.com/free-photo/cute-knitted-toy-with-big-eyes_123827-23223.jpg",
    "https://img.freepik.com/free-photo/handmade-knitted-toy-with-bow_123827-23224.jpg",
    "https://img.freepik.com/free-photo/plush-toy-with-big-ears-and-bow_123827-23225.jpg",
    "https://img.freepik.com/free-photo/cute-toy-with-big-eyes-and-hat_123827-23226.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const prevImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pink-100 to-yellow-100">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6">
            Galeria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa coleção de bonecas amigurumi feitas à mão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image} 
                alt={`Boneca ${currentIndex + index + 1}`} 
                className="w-full aspect-square object-contain" 
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={prevImages} 
            className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600"
          >
            Anterior
          </button>
          <button 
            onClick={nextImages} 
            className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600"
          >
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;