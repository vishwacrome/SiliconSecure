
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import MediaGallery from './components/MediaGallery';
import Clients from './components/Clients';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <MediaGallery />
      <Clients />
      <Footer />
      
      {/* Global Integration Widgets */}
      <WhatsAppButton />
      <VisitorCounter />
    </div>
  );
}

export default App;
