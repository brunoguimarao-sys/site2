import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import { ToastProvider, useToast } from './components/ui/use-toast';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Button } from './components/ui/button';
import CookieConsent from './components/CookieConsent';

// Placeholder components
const Blog = () => <div><h1>Blog</h1></div>;
const Post = () => <div><h1>Blog Post</h1></div>;
const Admin = () => <div><h1>Admin</h1></div>;

const Home = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Feito Amigurumi - Encantando com Bonecas Artesanais</title>
        <meta name="description" content="Bonecas amigurumi feitas à mão com carinho. Conheça nossos produtos artesanais e encomende sua boneca personalizada!" />
        <meta name="keywords" content="amigurumi, bonecas artesanais, feito à mão, crochê, presente, decoração, Feito Amigurimi" />
        <link rel="canonical" href="https://feitoamigurimi.com.br" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Feito Amigurumi - Bonecas Caseiras Artesanais" />
        <meta property="og:description" content="Bonecas amigurumi feitas à mão com carinho. Encomende sua boneca personalizada!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://feitoamigurimi.com.br" />
        <meta property="og:site_name" content="Feito Amigurumi" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1223&auto=format&fit=crop" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Feito Amigurumi - Bonecas Caseiras Artesanais" />
        <meta name="twitter:description" content="Bonecas amigurumi feitas à mão com carinho. Encomende sua boneca personalizada!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1223&auto=format&fit=crop" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Feito Amigurumi",
              "url": "https://feitoamigurimi.com.br",
              "logo": "",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service"
              },
              "sameAs": []
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header onContactClick={handleContactClick} />
        <Hero onContactClick={handleContactClick} onPortfolioClick={handlePortfolioClick} />
        <Services />
        <About />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
        <Footer />

        <Toaster />
        <CookieConsent />
      </div>
    </>
  );
}


function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;