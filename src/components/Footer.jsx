import React from 'react';
const Footer = () => {
  return <footer className="bg-slate-900 text-white py-12 dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold gradient-text">Overnit</span>
            <p className="mt-4 text-slate-400">Fornecendo soluções digitais e inovadoras desde 2011.</p>
          </div>
          <div>
            <span className="font-semibold mb-4 block">Serviços</span>
            <ul className="space-y-2 text-slate-400">
              <li>Infraestrutura de TI e Redes</li>
              <li>Desenvolvimento e Software</li>
              <li>Marketing Digital Estratégico</li>
              <li>Segurança Digital</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold mb-4 block">Empresa</span>
            <ul className="space-y-2 text-slate-400">
              <li>Sobre Nós</li>
              <li>Portfólio</li>
              <li>Blog</li>
              <li>Carreiras</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold mb-4 block">Contato</span>
            <ul className="space-y-2 text-slate-400">
              <li>contato@overnit.com</li>
              <li>(19) 99446-1544</li>
              <li>Indaiatuba, SP - Brasil</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 dark:border-slate-700">
          <p>&copy; 2024 Overnit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;