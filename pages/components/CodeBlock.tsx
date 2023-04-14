import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 my-2">
      <div className="border border-gray-300 rounded-lg overflow-x-auto">
        <pre className="p-4">
          <code className="text-sm font-mono whitespace-pre text-gray-800">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
