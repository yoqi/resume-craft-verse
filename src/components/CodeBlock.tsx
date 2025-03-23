
import React from 'react';
import { cn } from '@/lib/utils';

interface LineProps {
  lineNumber: number;
  indent?: number;
  className?: string;
  children: React.ReactNode;
}

const Line: React.FC<LineProps> = ({
  lineNumber,
  indent = 0,
  className,
  children
}) => {
  return (
    <div className="flex">
      <span className="text-vscode-lightBlue min-w-[2rem] text-right pr-4">
        {lineNumber}
      </span>
      <span
        className={cn("code-line", className)}
        style={{ paddingLeft: `${indent * 1.5}rem` }}
      >
        {children}
      </span>
    </div>
  );
};

interface CodeBlockProps {
  className?: string;
  filename?: string;
  language?: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  filename,
  language = "typescript",
  children
}) => {
  return (
    <div className={cn("vscode-card", className)}>
      {filename && (
        <div className="flex items-center bg-vscode-active px-4 py-2 text-sm border-b border-vscode-lightBlue/30">
          <span className="text-vscode-text">{filename}</span>
          <span className="ml-2 text-vscode-comments text-xs">.{language}</span>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export { CodeBlock, Line };
