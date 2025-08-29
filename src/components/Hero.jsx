import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const Hero = ({ onContactClick, onPortfolioClick }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5519994461544', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 pt-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-cursive text-pink-500 mb-6 leading-tight">
            Encante-se com Nossas Bonecas,
            <span className="block text-yellow-500">Feitas com Carinho</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Cada boneca é única, feita à mão com fios de alta qualidade. Perfeitas para presentear ou decorar com afeto.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-xl shadow-lg"
            >
              Encomendar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={onPortfolioClick}
              className="text-lg px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-xl"
            >
              Ver Galeria
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <img  
            alt="Boneca amigurumi feita à mão"
            className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-full h-auto object-cover"
            src="https://images.unsplash.com/photo-1611223235235-4b3b9b5b5b5b?q=80&w=1223&auto=format&fit=crop" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

