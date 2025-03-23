
import React from 'react';
import SectionTitle from './SectionTitle';
import { CodeBlock, Line } from './CodeBlock';
import { Hash, User, Award, Book, Code } from 'lucide-react';

const About: React.FC = () => {

  return (
    <section id="about" className="section">
      <SectionTitle 
        title="关于我们" 
        subtitle="专注于AI、大数据、云计算、物联网等领域的技术研究和应用开发。"
      />
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="vscode-card p-6">
            <div className="flex items-center mb-4">
              <User className="h-5 w-5 text-vscode-blue mr-2" />
              <h3 className="text-xl font-medium text-white">个人简介</h3>
            </div>
            <p className="text-vscode-text">
              我们是一家专注于AI、大数据、云计算、物联网等领域的技术研究和应用开发的公司。
              我们致力于为客户提供高质量的技术解决方案，帮助他们实现业务增长和创新。
            </p>
          </div>
          
          <div className="vscode-card p-6">
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 text-vscode-blue mr-2" />
              <h3 className="text-xl font-medium text-white">优势</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>我们拥有一支经验丰富的技术团队，能够为客户提供高质量的技术解决方案。</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>我们拥有一支经验丰富的技术团队，能够为客户提供高质量的技术解决方案。</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>我们拥有一支经验丰富的技术团队，能够为客户提供高质量的技术解决方案。</span>
              </li>
            </ul>
          </div>
          
          <div className="vscode-card p-6">
            <div className="flex items-center mb-4">
              <Book className="h-5 w-5 text-vscode-blue mr-2" />
              <h3 className="text-xl font-medium text-white">技术栈</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>AI、大数据、云计算、物联网等领域的技术研究和应用开发。</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>AI、大数据、云计算、物联网等领域的技术研究和应用开发。</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>AI、大数据、云计算、物联网等领域的技术研究和应用开发。</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          
          
          <div className="mt-8">
            <div className="vscode-card p-6">
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-vscode-blue mr-2" />
                <h3 className="text-xl font-medium text-white">更多信息</h3>
              </div>
              <p className="text-vscode-text mb-4">
                我们是一家专注于AI、大数据、云计算、物联网等领域的技术研究和应用开发的公司。
              </p>
              <p className="text-vscode-text">
                我们是一家专注于AI、大数据、云计算、物联网等领域的技术研究和应用开发的公司。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
