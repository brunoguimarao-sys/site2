import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, BarChart, ShieldCheck, CheckCircle, Bot } from 'lucide-react';

const servicesData = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "Infraestrutura de TI e Redes",
    description: "Projetamos e implementamos redes corporativas robustas e servidores otimizados para performance e segurança.",
    features: ["Redes Corporativas", "Servidores Otimizados", "Segurança de Rede"]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desenvolvimento e Software",
    description: "Criamos soluções de software sob medida e implementamos sistemas que resolvem problemas reais do seu negócio.",
    features: ["Software Sob Medida", "Sistemas de Gestão", "Integração de Sistemas"]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Marketing Digital Estratégico",
    description: "Construímos sua presença online do zero, com branding, gestão de redes sociais, web design e tráfego pago.",
    features: ["Branding e Identidade Visual", "Gestão de Redes Sociais", "Tráfego Pago"]
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Segurança Digital",
    description: "Protegemos seus ativos digitais com as melhores práticas e ferramentas de segurança do mercado.",
    features: ["Auditoria de Segurança", "Proteção de Dados", "Monitoramento de Ameaças"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-background dark:to-card">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nossas Soluções
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Atuamos como um parceiro tecnológico completo, oferecendo soluções integradas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;