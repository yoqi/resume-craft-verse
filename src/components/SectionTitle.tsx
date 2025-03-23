
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className 
}) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="h-px w-8 bg-vscode-blue/50"></div>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          <span className="text-vscode-blue">&lt;</span>
          {title}
          <span className="text-vscode-blue">/&gt;</span>
        </h2>
        <div className="h-px w-8 bg-vscode-blue/50"></div>
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
