
import React from 'react';
import SectionTitle from './SectionTitle';
import { CodeBlock, Line } from './CodeBlock';
import { Hash, User, Award, Book, Code } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'HTML/CSS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'Spring Boot'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
  ];

  return (
    <section id="about" className="section">
      <SectionTitle 
        title="About Me" 
        subtitle="Software Engineer specializing in full-stack development with a passion for creating elegant solutions to complex problems"
      />
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="vscode-card p-6">
            <div className="flex items-center mb-4">
              <User className="h-5 w-5 text-vscode-blue mr-2" />
              <h3 className="text-xl font-medium text-white">Profile</h3>
            </div>
            <p className="text-vscode-text">
              I am a passionate Software Engineer with 5+ years of experience developing web applications and services. 
              I specialize in building scalable, maintainable software solutions that solve real-world problems.
            </p>
          </div>
          
          <div className="vscode-card p-6">
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 text-vscode-blue mr-2" />
              <h3 className="text-xl font-medium text-white">Achievements</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>Led development of a product that increased company revenue by 30%</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>Open source contributor to several popular frameworks</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>Published technical articles with over 100,000 views</span>
              </li>
            </ul>
          </div>
          
          <div className="vscode-card p-6">
            <div className="flex items-center mb-4">
              <Book className="h-5 w-5 text-vscode-blue mr-2" />
              <h3 className="text-xl font-medium text-white">Learning Focus</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>Advanced machine learning algorithms</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>Microservices architecture patterns</span>
              </li>
              <li className="flex items-start">
                <Hash className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0" />
                <span>Serverless computing and edge technologies</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <CodeBlock filename="skills" language="json">
            <Line lineNumber={1}>{'{'}</Line>
            {skills.map((skillGroup, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <Line 
                  lineNumber={groupIndex + 2} 
                  indent={1}
                  className="text-vscode-strings"
                >
                  "{skillGroup.category}": {'['}
                </Line>
                {skillGroup.items.map((skill, skillIndex) => (
                  <Line 
                    key={skillIndex}
                    lineNumber={groupIndex + 3 + skillIndex} 
                    indent={2}
                    className="text-vscode-variables"
                  >
                    "{skill}"{skillIndex < skillGroup.items.length - 1 ? ',' : ''}
                  </Line>
                ))}
                <Line 
                  lineNumber={groupIndex + 3 + skillGroup.items.length} 
                  indent={1}
                >
                  {']'}{groupIndex < skills.length - 1 ? ',' : ''}
                </Line>
              </React.Fragment>
            ))}
            <Line lineNumber={skills.reduce((acc, group) => acc + group.items.length + 2, 2)}>{'}'}</Line>
          </CodeBlock>
          
          <div className="mt-8">
            <div className="vscode-card p-6">
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-vscode-blue mr-2" />
                <h3 className="text-xl font-medium text-white">More About Me</h3>
              </div>
              <p className="text-vscode-text mb-4">
                When I'm not coding, I enjoy contributing to open source projects, writing technical articles, and mentoring junior developers. I'm passionate about creating software that is not only functional but also accessible and user-friendly.
              </p>
              <p className="text-vscode-text">
                My approach to problem-solving combines analytical thinking with creative solutions. I believe in continuous learning and staying updated with the latest technologies and best practices in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
