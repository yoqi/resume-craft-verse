
import React, { useEffect, useState } from 'react';
import { ArrowDown, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello World! I'm a Software Engineer.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-vscode-bg via-vscode-bg to-vscode-active z-0"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="glass-panel p-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Terminal className="h-12 w-12 text-vscode-blue animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="type-effect inline-block overflow-hidden font-mono">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-vscode-variables mb-10 opacity-90">
            Building elegant solutions to complex problems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="button-glow bg-vscode-blue"
            >
              View My Resume
            </a>
            <a 
              href="#projects" 
              className="button-glow bg-vscode-active"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-vscode-text hover:text-white transition-colors duration-300 animate-float"
      >
        <ArrowDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
