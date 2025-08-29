import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Modal from './ui/Modal';

const projectsData = [
  {
    title: "Boneca Ursinha",
    description: "Amigurumi de ursinha feito à mão, ideal para presentear crianças.",
    longDescription: "Boneca ursinha confeccionada em crochê, com detalhes delicados e enchimento antialérgico. Perfeita para decoração de quartos infantis ou para presentear com carinho.",
    tech: ["Crochê", "Fio 100% algodão", "Enchimento antialérgico"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1223&auto=format&fit=crop"
  },
  {
    title: "Boneca Bailarina",
    description: "Amigurumi bailarina com saia de tule e sapatilhas de crochê.",
    longDescription: "Boneca bailarina feita à mão, com saia de tule, sapatilhas e laço. Personalizável nas cores e acessórios. Ideal para colecionadores e decoração temática.",
    tech: ["Crochê", "Tule", "Personalização de cores"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1223&auto=format&fit=crop"
  },
  {
    title: "Boneca Unicórnio",
    description: "Amigurumi unicórnio colorido, feito com fios premium.",
    longDescription: "Boneca unicórnio artesanal, com crina colorida e chifre dourado. Feita com fios premium e enchimento macio. Um presente encantador para todas as idades.",
    tech: ["Crochê", "Fios premium", "Detalhes artesanais"],
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1223&auto=format&fit=crop"
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-pink-100 to-yellow-100">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6">
            Galeria de Bonecas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns exemplos de bonecas amigurumi feitas à mão e inspire-se para sua encomenda!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-500 hover:-translate-y-2"
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => openModal(project)}
                  className="w-full border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
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
