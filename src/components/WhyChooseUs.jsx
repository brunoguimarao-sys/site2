import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Heart, Lightbulb, Target } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Valores
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nossos valores são a base de tudo que fazemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Handshake className="w-12 h-12" />,
              title: "Integridade",
              description: "Transparência total em cada projeto. O que prometemos é o que entregamos."
            },
            {
              icon: <Heart className="w-12 h-12" />,
              title: "Empatia",
              description: "Entender a sua dor antes de propor a solução."
            },
            {
              icon: <Lightbulb className="w-12 h-12" />,
              title: "Inovação",
              description: "Buscar incansavelmente a ferramenta certa para o seu desafio específico."
            },
            {
              icon: <Target className="w-12 h-12" />,
              title: "Comprometimento",
              description: "O seu resultado é a nossa única meta."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-200 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;