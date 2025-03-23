
import React from 'react';
import SectionTitle from './SectionTitle';
import { CodeBlock, Line } from './CodeBlock';
import { GraduationCap, Calendar, Medal, Map } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "硕士学位",
      school: "斯坦福大学",
      location: "斯坦福, CA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      highlights: [
          "人工智能专业",
        "自然语言处理实验室研究助理",
        "发表深度学习情感分析论文"
      ]
    },
    {
      degree: "计算机工程学士学位",
      school: "麻省理工学院",
      location: "剑桥, MA",
      period: "2014 - 2018",
      gpa: "3.85/4.0",
      highlights: [
        "毕业时获得最高荣誉",
        "数据结构和算法助教",
        "高级项目: 开发了一个实时协作的代码编辑器"
      ]
    }
  ];

  return (
    <section id="education" className="section bg-vscode-active/30">
      <SectionTitle 
        title="教育经历" 
        subtitle="我的学术背景和资格"
      />
      
      <div className="grid md:grid-cols-2 gap-10">
      
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="vscode-card p-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-vscode-blue mr-2" />
                  <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                </div>
                <span className="flex items-center text-sm text-vscode-text bg-vscode-blue/10 px-2 py-1 rounded">
                  <Calendar className="h-3 w-3 mr-1" />
                  {edu.period}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-lg text-vscode-variables mb-1">
                  <Medal className="h-4 w-4 mr-2" />
                  {edu.school}
                </div>
                <div className="flex items-center text-sm text-vscode-text">
                  <Map className="h-3 w-3 mr-2" />
                  {edu.location} • GPA: {edu.gpa}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wide text-vscode-comments mb-2">Highlights</h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-vscode-blue mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
