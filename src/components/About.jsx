
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nossa História e Capacidades
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Desde 2011, com raízes em Indaiatuba e região, a Overnit participa ativamente do crescimento de negócios.
          </p>
        </motion.div>

        <div className="text-lg text-slate-700 dark:text-slate-400 max-w-4xl mx-auto text-center leading-relaxed">
          <p>
            Temos um longo caminho fornecendo soluções digitais inovadoras para empresas de todos os tamanhos. Nossa equipe é composta por profissionais experientes e apaixonados por tecnologia, design e marketing digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
