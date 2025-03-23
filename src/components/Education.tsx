
import React from 'react';
import SectionTitle from './SectionTitle';
import { CodeBlock, Line } from './CodeBlock';
import { GraduationCap, Calendar, Medal, Map } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      highlights: [
        "Specialization in Artificial Intelligence",
        "Research Assistant in Natural Language Processing Lab",
        "Published paper on deep learning approaches to sentiment analysis"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      period: "2014 - 2018",
      gpa: "3.85/4.0",
      highlights: [
        "Graduated with High Honors",
        "Teaching Assistant for Data Structures and Algorithms",
        "Senior project: Developed a real-time collaborative code editor"
      ]
    }
  ];

  return (
    <section id="education" className="section bg-vscode-active/30">
      <SectionTitle 
        title="Education" 
        subtitle="My academic background and qualifications"
      />
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <CodeBlock filename="education" language="typescript">
            <Line lineNumber={1} className="text-vscode-keywords">const</Line>
            <Line lineNumber={2} className="text-vscode-variables"> education = {'{'}</Line>
            <Line lineNumber={3} indent={1} className="text-vscode-strings">institutions: [</Line>
            
            {education.map((edu, eduIndex) => (
              <React.Fragment key={eduIndex}>
                <Line lineNumber={4 + eduIndex * 6} indent={2}>{'{'}</Line>
                <Line lineNumber={5 + eduIndex * 6} indent={3} className="text-vscode-strings">
                  name: <span className="text-vscode-strings">"{edu.school}"</span>,
                </Line>
                <Line lineNumber={6 + eduIndex * 6} indent={3} className="text-vscode-strings">
                  degree: <span className="text-vscode-strings">"{edu.degree}"</span>,
                </Line>
                <Line lineNumber={7 + eduIndex * 6} indent={3} className="text-vscode-strings">
                  year: <span className="text-vscode-strings">"{edu.period}"</span>,
                </Line>
                <Line lineNumber={8 + eduIndex * 6} indent={3} className="text-vscode-numbers">
                  gpa: <span className="text-vscode-strings">"{edu.gpa}"</span>
                </Line>
                <Line lineNumber={9 + eduIndex * 6} indent={2}>
                  {'}'}{eduIndex < education.length - 1 ? ',' : ''}
                </Line>
              </React.Fragment>
            ))}
            
            <Line lineNumber={4 + education.length * 6} indent={1}>],</Line>
            <Line lineNumber={5 + education.length * 6} indent={1} className="text-vscode-functions">
              display()<span className="text-vscode-operators"> {'{'}
            </span>
            </Line>
            <Line lineNumber={6 + education.length * 6} indent={2} className="text-vscode-keywords">
              return <span className="text-vscode-operators">this.</span><span className="text-vscode-variables">institutions.</span><span className="text-vscode-functions">map</span><span className="text-vscode-operators">(</span><span className="text-vscode-parameters">i</span><span className="text-vscode-operators"> => </span><span className="text-vscode-variables">i</span><span className="text-vscode-operators">.</span><span className="text-vscode-variables">name</span><span className="text-vscode-operators">);</span>
            </Line>
            <Line lineNumber={7 + education.length * 6} indent={1}>{'}'}</Line>
            <Line lineNumber={8 + education.length * 6}>{'};'}</Line>
          </CodeBlock>
        </div>
        
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
