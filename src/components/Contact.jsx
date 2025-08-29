import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import Modal from './ui/Modal';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'Desenvolvimento Web',
    message: ''
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
      formattedValue = '(' + value.substring(0, 2);
      if (value.length > 2) {
        formattedValue += ') ' + value.substring(2, 7);
        if (value.length > 7) {
          formattedValue += '-' + value.substring(7, 11);
        }
      }
    }
    setFormData({ ...formData, phone: formattedValue });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openSuccessModal = () => setIsSuccessModalOpen(true);
  const closeSuccessModal = () => setIsSuccessModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
            const response = await fetch(`https://api.overnit.com/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        openSuccessModal();
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: 'Desenvolvimento Web',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Ocorreu um erro ao enviar a mensagem.');
      }
    } catch (error) {
      toast({
        title: "❌ Erro ao Enviar",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background dark:to-card">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Entre em contato e surpreenda-se como podemos te ajudar!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span>contato@overnit.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span>(19) 99446-1544</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span>Indaiatuba, SP - Brasil</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://www.instagram.com/overnitcom/', '_blank')}
                  aria-label="Instagram"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl dark:bg-card dark:shadow-none dark:border dark:border-border"
          >
            <h3 className="text-2xl font-semibold mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-input dark:border-border dark:text-foreground dark:placeholder-slate-500"
                  placeholder="Seu nome completo"
                  maxLength="50"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-input dark:border-border dark:text-foreground dark:placeholder-slate-500"
                  placeholder="seu@email.com"
                  maxLength="50"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-input dark:border-border dark:text-foreground dark:placeholder-slate-500"
                  placeholder="(XX) XXXXX-XXXX"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength="15"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Projeto</label>
                <select 
                  name="project"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-input dark:border-border dark:text-foreground"
                  value={formData.project}
                  onChange={handleChange}
                >
                  <option>Desenvolvimento Web</option>
                  <option>Aplicação Mobile</option>
                  <option>Sistema Personalizado</option>
                  <option>Suporte Técnico</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-input dark:border-border dark:text-foreground dark:placeholder-slate-500"
                  placeholder="Descreva seu projeto..."
                  maxLength="250"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={isSuccessModalOpen} onClose={closeSuccessModal}>
        <div className="text-center p-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Mensagem Enviada!</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Obrigado por entrar em contato. Nossa equipe retornará em breve!
          </p>
          <Button onClick={closeSuccessModal} className="mt-6 w-full">
            Fechar
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
