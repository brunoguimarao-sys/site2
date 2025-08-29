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
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern pt-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            Tecnologia que Conecta,
            <span className="block">Soluções que Libertam</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Traduzimos o potencial da tecnologia em ferramentas acessíveis que fortalecem conexões humanas entre empresas e clientes.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 pulse-glow"
            >
              Começar Projeto <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={onPortfolioClick}
              className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
            >
              Ver Portfólio
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 mt-16 lg:mt-0 floating-animation flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <img  
            alt="Equipe de desenvolvimento trabalhando em projetos digitais"
            className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-full h-auto object-cover"
           src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </motion.div>
      </div>
      {/* Scroll Indicator visível ao final da seção Hero */}
      <ScrollIndicator />
    </section>
  );
};

// Adiciona um scroll indicator animado no final da seção Hero
const ScrollIndicator = () => (
  <div className="flex justify-center mt-10 animate-bounce">
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 24l-8-8h16l-8 8z" fill="#64748b"/>
    </svg>
  </div>
);

export default Hero;

