
import React from 'react';
import SectionTitle from './SectionTitle';
import { CodeBlock, Line } from './CodeBlock';
import { Briefcase, Calendar, Building, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      responsibilities: [
        "Leading a team of 5 engineers to develop and maintain microservices architecture",
        "Architected and implemented a scalable API gateway that reduced latency by 40%",
        "Spearheaded migration from monolith to microservices, improving deployment frequency by 300%",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["Node.js", "React", "TypeScript", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Software Engineer",
      company: "DataViz Solutions",
      location: "Boston, MA",
      period: "2018 - 2021",
      responsibilities: [
        "Developed and maintained RESTful APIs for data visualization platform",
        "Implemented real-time data processing pipeline that handled 1M+ events per minute",
        "Collaborated with design team to create intuitive user interfaces",
        "Reduced application load time by 60% through performance optimizations"
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "Redis", "AWS"]
    },
    {
      title: "Software Development Intern",
      company: "Global Systems Corp",
      location: "Seattle, WA",
      period: "Summer 2017",
      responsibilities: [
        "Assisted in developing frontend components for company's customer portal",
        "Fixed bugs and implemented new features in the user authentication system",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["JavaScript", "Angular", "Java", "Spring Boot", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="section">
      <SectionTitle 
        title="Experience" 
        subtitle="My professional journey and accomplishments"
      />
      
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <CodeBlock filename="experience" language="typescript">
            <Line lineNumber={1} className="text-vscode-keywords">class</Line>
            <Line lineNumber={2} className="text-vscode-classes"> ProfessionalJourney {'{'}</Line>
            <Line lineNumber={3} indent={1} className="text-vscode-keywords">private</Line>
            <Line lineNumber={4} indent={1} className="text-vscode-variables"> roles: Role[] = [];</Line>
            <Line lineNumber={5} />
            <Line lineNumber={6} indent={1} className="text-vscode-keywords">constructor</Line>
            <Line lineNumber={7} indent={1}>() {'{'}</Line>
            <Line lineNumber={8} indent={2} className="text-vscode-keywords">this</Line>
            <Line lineNumber={9} indent={2} className="text-vscode-operators">.</Line>
            <Line lineNumber={10} indent={2} className="text-vscode-functions">initializeRoles</Line>
            <Line lineNumber={11} indent={2} className="text-vscode-operators">();</Line>
            <Line lineNumber={12} indent={1}>{'}'}</Line>
            <Line lineNumber={13} />
            <Line lineNumber={14} indent={1} className="text-vscode-keywords">private</Line>
            <Line lineNumber={15} indent={1} className="text-vscode-functions"> initializeRoles</Line>
            <Line lineNumber={16} indent={1}>() {'{'}</Line>
            {experiences.map((exp, index) => (
              <React.Fragment key={index}>
                <Line lineNumber={17 + index * 4} indent={2} className="text-vscode-keywords">this</Line>
                <Line lineNumber={18 + index * 4} indent={2} className="text-vscode-operators">.</Line>
                <Line lineNumber={19 + index * 4} indent={2} className="text-vscode-variables">roles</Line>
                <Line lineNumber={20 + index * 4} indent={2} className="text-vscode-operators">.</Line>
                <Line lineNumber={21 + index * 4} indent={2} className="text-vscode-functions">push</Line>
                <Line lineNumber={22 + index * 4} indent={2} className="text-vscode-operators">({'{'}</Line>
                <Line lineNumber={23 + index * 4} indent={3} className="text-vscode-variables">title: </Line>
                <Line lineNumber={24 + index * 4} indent={3} className="text-vscode-strings">"{exp.title}"</Line>
                <Line lineNumber={25 + index * 4} indent={2} className="text-vscode-operators">{'}'});</Line>
              </React.Fragment>
            ))}
            <Line lineNumber={17 + experiences.length * 4} indent={1}>{'}'}</Line>
            <Line lineNumber={18 + experiences.length * 4}>{'}'}</Line>
          </CodeBlock>
        </div>
        
        <div className="md:col-span-3 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="vscode-card overflow-hidden group">
              <div className="bg-vscode-active p-6 border-b border-vscode-lightBlue/30">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-vscode-blue mr-2" />
                      <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                    </div>
                    <div className="flex items-center text-vscode-variables">
                      <Building className="h-4 w-4 mr-2" />
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <span className="flex items-center text-sm text-vscode-text bg-vscode-blue/10 px-2 py-1 rounded">
                    <Calendar className="h-3 w-3 mr-1" />
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-sm font-medium uppercase tracking-wide text-vscode-comments mb-3">Responsibilities</h4>
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start group/item">
                      <ArrowRight className="h-4 w-4 text-vscode-blue mr-2 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-sm font-medium uppercase tracking-wide text-vscode-comments mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-vscode-blue/10 text-vscode-variables px-2 py-1 rounded hover:bg-vscode-blue/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
