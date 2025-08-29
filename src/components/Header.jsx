
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
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Overnit
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">Início</a>
            <a href="#services" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">Serviços</a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">Portfólio</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">Contato</a>
          </div>
          <Button onClick={() => window.open('https://wa.me/5519994461544', '_blank')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Orçamento Grátis
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
