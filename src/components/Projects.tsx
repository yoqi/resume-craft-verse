
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CodeBlock, Line } from './CodeBlock';
import { GitBranch, ExternalLink, Folder, Github, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['所有', 'Web', 'App', '小程序', 'ML/AI'];
  
  const projects = [
    {
      name: "遇见app",
      description: "遇见app是一款专注于帮助用户发现和探索新事物的社交应用。",
      category: "App",
      technologies: ["Android", "Kotlin", "Jetpack Compose", "Retrofit", "Room"],
      githubLink: "https://github.com/username/eco-tracker",
      demoLink: "https://eco-tracker.example.com",
      stars: 124,
      highlights: [
        "实现了响应式仪表盘，通过实时数据可视化帮助用户了解自己的碳足迹",
        "集成了碳排放计算算法",
        "构建了全面的RESTful API文档"
      ]
    },
    {
      name: "霸王餐uniapp",
      description: "霸王餐uniapp是一款专注于帮助用户发现和探索新事物的社交应用。",
      category: "小程序",
      technologies: ["uniapp", "uniCloud", "uniCloud", "uniCloud"],
      githubLink: "https://github.com/username/smart-shop",
      demoLink: "https://smartshop.example.com",
      stars: 89,
      highlights: [
        "开发了自定义图像识别模型，准确率高达95%",
        "实现了条形码扫描和价格比较功能",
        "创建了离线模式，支持数据同步"
      ]
    },
    {
      name: "天天助理",
      description: "天天助理是一款专注于帮助用户发现和探索新事物的社交应用。",
      category: "小程序",
      technologies: ["uniapp", "uniCloud", "uniCloud", "uniCloud"],
      githubLink: "https://github.com/username/api-hub",
      demoLink: "https://apihub.example.com",
      stars: 211,
      highlights: [
        "构建了认证和授权系统，使用OAuth2",
        "设计了可扩展的架构，处理每秒1000+请求",
        "实现了实时监控和告警系统"
      ]
    },
    {
      name: "订餐系统",
      description: "订餐系统是一款专注于帮助用户发现和探索新事物的社交应用。",
      category: "Web",
      technologies: ["Python", "TensorFlow", "NLTK", "FastAPI", "Docker"],
      githubLink: "https://github.com/username/sentiment-analyzer",
      demoLink: "https://sentiment.example.com",
      stars: 167,
      highlights: [
        "训练了1000+万条评论，准确率高达92%",
        "创建了API端点，并提供了全面的文档"
      ]
    },
    {
      name: "考勤系统",
      description: "考勤系统是一款专注于帮助用户发现和探索新事物的社交应用。",
      category: "Web",
      technologies: ["Vue.js", "GraphQL", "Markdown", "Algolia", "Netlify"],
      githubLink: "https://github.com/username/dev-portal",
      demoLink: "https://devportal.example.com",
      stars: 75,
      highlights: [
        "实现了高级搜索功能，使用Algolia",
        "创建了交互式API游乐场，支持实时代码执行",
        "设计了响应式布局，支持主题定制"
      ]
    }
  ];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section bg-vscode-active/30">
      <SectionTitle 
        title="项目经历" 
        subtitle="展示我的技术技能和解决问题的能力"
      />
      
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2 bg-vscode-sidebar p-1 rounded-lg">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-vscode-blue text-white shadow-md' 
                  : 'text-vscode-text hover:text-white hover:bg-vscode-hover'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="vscode-card group h-full flex flex-col transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="bg-vscode-active p-6 border-b border-vscode-lightBlue/30">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <Folder className="h-5 w-5 text-vscode-blue mr-2" />
                  <h3 className="text-xl font-medium text-white">{project.name}</h3>
                </div>
                <div className="flex items-center text-vscode-text">
                  <Star className="h-4 w-4 mr-1" />
                  <span>{project.stars}</span>
                </div>
              </div>
              <p className="text-vscode-text min-h-[60px]">{project.description}</p>
            </div>
            
            <div className="p-6 flex-grow">
              <h4 className="text-sm font-medium uppercase tracking-wide text-vscode-comments mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-vscode-blue mr-2">•</span>
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <h4 className="text-sm font-medium uppercase tracking-wide text-vscode-comments mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-vscode-blue/10 text-vscode-variables px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-vscode-lightBlue/30">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-vscode-text hover:text-white transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-vscode-text hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
  
    </section>
  );
};

export default Projects;
