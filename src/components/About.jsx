import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Sobre a Feito Amigurimi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Somos apaixonados por criar bonecas amigurumi artesanais, feitas à mão com muito carinho e dedicação.
          </p>
        </motion.div>

        <div className="text-lg text-slate-700 max-w-4xl mx-auto text-center leading-relaxed">
          <p>
            Cada boneca é única, feita com fios de alta qualidade e atenção aos detalhes. Acreditamos que o artesanato transforma momentos simples em lembranças especiais. Desde 2020, já entregamos alegria para dezenas de clientes que buscam presentes personalizados e decoração afetiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
