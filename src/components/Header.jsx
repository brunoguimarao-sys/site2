
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Header = ({ onContactClick }) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold gradient-text font-cursive"
            whileHover={{ scale: 1.05 }}
          >
            Feito Amigurumi
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-pink-600 transition-colors dark:hover:text-pink-400">Início</a>
            <a href="#services" className="hover:text-pink-600 transition-colors dark:hover:text-pink-400">Produtos</a>
            <a href="#portfolio" className="hover:text-pink-600 transition-colors dark:hover:text-pink-400">Galeria</a>
            <a href="#contact" className="hover:text-pink-600 transition-colors dark:hover:text-pink-400">Contato</a>
          </div>
          <Button onClick={() => window.open('https://wa.me/5519994461544', '_blank')} className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500">
            Encomendar Boneca
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
