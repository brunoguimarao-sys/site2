import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import { ToastProvider, useToast } from './components/ui/use-toast';
import { Sun, Moon } from 'lucide-react';

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

function AppContent() {
  const { toast } = useToast();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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
        <title>Overnit - Desenvolvimento Web & Soluções Digitais</title>
        <meta name="description" content="Especialistas em desenvolvimento web, aplicações mobile e suporte técnico. Transformamos suas ideias em soluções digitais inovadoras." />
        <meta name="keywords" content="desenvolvimento web, aplicações mobile, suporte técnico, Overnit, criação de sites, automação, n8n, chatbot" />
        <link rel="canonical" href="https://www.overnit.com" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Overnit - Desenvolvimento Web & Soluções Digitais" />
        <meta property="og:description" content="Especialistas em desenvolvimento web, aplicações mobile e suporte técnico. Transformamos suas ideias em soluções digitais inovadoras." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.overnit.com" />
        <meta property="og:site_name" content="Overnit" />
        <meta property="og:image" content="https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Overnit - Desenvolvimento Web & Soluções Digitais" />
        <meta name="twitter:description" content="Especialistas em desenvolvimento web, aplicações mobile e suporte técnico. Transformamos suas ideias em soluções digitais inovadoras." />
        <meta name="twitter:image" content="https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Overnit",
              "url": "https://www.overnit.com",
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

        <Button
          onClick={toggleTheme}
          className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </Button>

        <Toaster />
        <CookieConsent />
      </div>
    </>
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