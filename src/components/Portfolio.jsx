
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Modal from './ui/Modal';

const projectsData = [
  {
    title: "E-commerce Avançado",
    description: "Plataforma completa com pagamentos integrados e gestão de estoque",
    longDescription: "Desenvolvemos uma plataforma de e-commerce robusta e escalável, com um design moderno e focado na experiência do usuário. A solução inclui integração com os principais gateways de pagamento, um sistema de gerenciamento de estoque em tempo real, e um painel administrativo completo para o lojista.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Dashboard Analytics",
    description: "Sistema de análise de dados em tempo real com visualizações interativas",
    longDescription: "Criamos um dashboard de analytics para visualização de dados em tempo real. A plataforma permite que os usuários monitorem métricas importantes através de gráficos e tabelas interativas, com filtros dinâmicos e a capacidade de exportar relatórios.",
    tech: ["Vue.js", "Python", "MongoDB", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Automação com N8N",
    description: "Integração de sistemas e automação tarefas, incluindo chatbots para atendimento e vendas.",
    longDescription: "Implementamos uma solução de automação de processos utilizando N8N para conectar diferentes sistemas e APIs. O projeto incluiu a criação de chatbots inteligentes para atendimento ao cliente e qualificação de leads, otimizando o fluxo de vendas e suporte.",
    tech: ["N8N", "Chatbot", "APIs", "Webhook"],
    image: "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-100 dark:from-card dark:to-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-card dark:shadow-none dark:border dark:border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img  
                  alt={`Projeto ${project.title}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                 src={project.image} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm dark:bg-blue-900 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => openModal(project)}
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  Ver Detalhes
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <div>
            <img  
              alt={`Projeto ${selectedProject.title}`}
              className="w-full h-64 object-cover rounded-t-lg"
              src={selectedProject.image} 
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm dark:bg-blue-900 dark:text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
              <Button onClick={closeModal} className="w-full">Fechar</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
