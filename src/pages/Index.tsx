
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-vscode-bg text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-vscode-active py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-vscode-text text-center md:text-left">
                &copy; {new Date().getFullYear()} | 天问科技
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/jianboy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-text hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/liuyuqi-gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-text hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:liuyuqi.gov@msn.cn"
                className="text-vscode-text hover:text-white transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-vscode-blue shadow-glow text-white opacity-80 hover:opacity-100 transition-opacity duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
