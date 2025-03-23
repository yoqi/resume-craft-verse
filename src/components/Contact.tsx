
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <SectionTitle 
        title="Contact" 
        subtitle="Let's connect and discuss potential collaborations"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-vscode-text mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-vscode-blue/10 flex items-center justify-center group-hover:bg-vscode-blue/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-vscode-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-vscode-comments">Email</h4>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-vscode-text hover:text-white transition-colors duration-300"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-vscode-blue/10 flex items-center justify-center group-hover:bg-vscode-blue/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-vscode-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-vscode-comments">Phone</h4>
                    <a 
                      href="tel:+11234567890" 
                      className="text-vscode-text hover:text-white transition-colors duration-300"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-vscode-blue/10 flex items-center justify-center group-hover:bg-vscode-blue/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-vscode-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-vscode-comments">Location</h4>
                    <span className="text-vscode-text">
                      San Francisco, CA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="vscode-card p-6">
              <h3 className="text-lg font-medium text-white mb-4">Current Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vscode-comments">Availability</span>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm">Available for work</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vscode-comments">Response Time</span>
                  <span className="text-sm">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vscode-comments">Preferred Contact</span>
                  <span className="text-sm">Email</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="vscode-card overflow-hidden">
            <div className="bg-vscode-active p-6 border-b border-vscode-lightBlue/30">
              <h3 className="text-xl font-medium text-white">Send Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-vscode-comments mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-vscode-bg border border-vscode-lightBlue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vscode-blue text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-vscode-comments mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-vscode-bg border border-vscode-lightBlue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vscode-blue text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-vscode-comments mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-vscode-bg border border-vscode-lightBlue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vscode-blue text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-glow bg-vscode-blue w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {showSuccess && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-500 rounded-md p-3 text-sm text-center animate-fadeIn">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
