
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CodeBlock, Line } from './CodeBlock';
import { GitBranch, ExternalLink, Folder, Github, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Web', 'Mobile', 'API', 'ML/AI'];
  
  const projects = [
    {
      name: "EcoTracker",
      description: "A full-stack application that helps users track and reduce their carbon footprint through personalized recommendations and analytics.",
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "AWS"],
      githubLink: "https://github.com/username/eco-tracker",
      demoLink: "https://eco-tracker.example.com",
      stars: 124,
      highlights: [
        "Implemented responsive dashboard with real-time data visualization",
        "Integrated carbon emission calculation algorithms",
        "Built RESTful API with comprehensive documentation"
      ]
    },
    {
      name: "SmartShop",
      description: "A mobile application that uses computer vision to help users find products in-store and compare prices across retailers.",
      category: "Mobile",
      technologies: ["React Native", "TensorFlow", "Firebase", "Google Cloud Vision"],
      githubLink: "https://github.com/username/smart-shop",
      demoLink: "https://smartshop.example.com",
      stars: 89,
      highlights: [
        "Developed custom image recognition model with 95% accuracy",
        "Implemented barcode scanning and price comparison features",
        "Created offline mode with data synchronization"
      ]
    },
    {
      name: "APIHub",
      description: "A centralized API management platform that simplifies API discovery, testing, and integration for developers.",
      category: "API",
      technologies: ["Express.js", "PostgreSQL", "Redis", "Docker", "Swagger"],
      githubLink: "https://github.com/username/api-hub",
      demoLink: "https://apihub.example.com",
      stars: 211,
      highlights: [
        "Built authentication and authorization system with OAuth2",
        "Designed scalable architecture handling 1000+ requests per second",
        "Implemented real-time monitoring and alerting system"
      ]
    },
    {
      name: "SentimentAnalyzer",
      description: "A machine learning model that analyzes sentiment in customer reviews with high accuracy for multiple languages.",
      category: "ML/AI",
      technologies: ["Python", "TensorFlow", "NLTK", "FastAPI", "Docker"],
      githubLink: "https://github.com/username/sentiment-analyzer",
      demoLink: "https://sentiment.example.com",
      stars: 167,
      highlights: [
        "Trained model on 10+ million reviews across 5 languages",
        "Achieved 92% accuracy in sentiment classification",
        "Created API endpoints with comprehensive documentation"
      ]
    },
    {
      name: "DevPortal",
      description: "A developer portal that provides documentation, tutorials, and interactive examples for a complex API ecosystem.",
      category: "Web",
      technologies: ["Vue.js", "GraphQL", "Markdown", "Algolia", "Netlify"],
      githubLink: "https://github.com/username/dev-portal",
      demoLink: "https://devportal.example.com",
      stars: 75,
      highlights: [
        "Implemented advanced search functionality with Algolia",
        "Created interactive API playground with live code execution",
        "Designed responsive layout with theme customization"
      ]
    }
  ];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section bg-vscode-active/30">
      <SectionTitle 
        title="Projects" 
        subtitle="Showcasing my technical skills and problem-solving abilities"
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
      
      <div className="text-center mt-12">
        <a 
          href="https://github.com/username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center button-glow bg-vscode-active"
        >
          <GitBranch className="h-5 w-5 mr-2" />
          <span>View More on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
