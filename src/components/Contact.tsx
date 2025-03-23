
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
        title="联系方式" 
        subtitle="让我们联系并讨论潜在的合作"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-white mb-6">联系我们</h3>
              <p className="text-vscode-text mb-6">
                我们是一家专注于AI、大数据、云计算、物联网等领域的技术研究和应用开发的公司。
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
                      liuyuqi.gov@msn.cn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-vscode-blue/10 flex items-center justify-center group-hover:bg-vscode-blue/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-vscode-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-vscode-comments">电话</h4>
                    <a 
                      href="tel:+11234567890" 
                      className="text-vscode-text hover:text-white transition-colors duration-300"
                    >
                      18621588888
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-vscode-blue/10 flex items-center justify-center group-hover:bg-vscode-blue/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-vscode-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-vscode-comments">地址</h4>
                    <span className="text-vscode-text">
                      上海市徐汇区
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="vscode-card p-6">
              <h3 className="text-lg font-medium text-white mb-4">当前状态</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vscode-comments">可提供服务</span>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm">可提供服务</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vscode-comments">响应时间</span>
                  <span className="text-sm">24小时内</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vscode-comments">首选联系方式</span>
                  <span className="text-sm">Email</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="vscode-card overflow-hidden">
            <div className="bg-vscode-active p-6 border-b border-vscode-lightBlue/30">
              <h3 className="text-xl font-medium text-white">留言</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-vscode-comments mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-vscode-bg border border-vscode-lightBlue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vscode-blue text-white"
                  placeholder="你的名字"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-vscode-comments mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-vscode-bg border border-vscode-lightBlue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vscode-blue text-white"
                  placeholder="你的邮箱"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-vscode-comments mb-2">
                  留言
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-vscode-bg border border-vscode-lightBlue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vscode-blue text-white resize-none"
                  placeholder="你的留言"
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
                    <span>发送中...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    <span>留言</span>
                  </>
                )}
              </button>
              
              {showSuccess && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-500 rounded-md p-3 text-sm text-center animate-fadeIn">
                  留言已发送成功！
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
