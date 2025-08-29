import React from 'react';
const Footer = () => {
  return <footer className="bg-pink-500 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold font-cursive text-yellow-100">Feito Amigurumi</span>
            <p className="mt-4 text-yellow-50">Encantando com bonecas artesanais feitas à mão.</p>
          </div>
          <div>
            <span className="font-semibold mb-4 block text-yellow-50">Produtos</span>
            <ul className="space-y-2 text-yellow-50">
              <li>Bonecas Personalizadas</li>
              <li>Decoração Infantil</li>
              <li>Presentes Artesanais</li>
              <li>Encomendas Especiais</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold mb-4 block text-yellow-50">Sobre</span>
            <ul className="space-y-2 text-yellow-50">
              <li>Nossa História</li>
              <li>Galeria</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold mb-4 block text-yellow-50">Contato</span>
            <ul className="space-y-2 text-yellow-50">
              <li>contato@feitoamigurumi.com</li>
              <li>(19) 99446-1544</li>
              <li>Indaiatuba, SP - Brasil</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-yellow-200 mt-8 pt-8 text-center text-yellow-50">
          <p>&copy; 2025 Feito Amigurumi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;