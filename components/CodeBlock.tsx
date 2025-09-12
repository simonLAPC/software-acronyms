import React from 'react';

interface CodeBlockProps {
    title: string;
    code: string;
    titleColor: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, code, titleColor }) => {
    return (
        <div>
            <h3 className={`text-lg font-semibold ${titleColor} mb-2`}>{title}</h3>
            <pre className="code-block bg-slate-950/50 border border-slate-800 rounded-lg p-4 text-sm overflow-x-auto">
                <code className="language-python" dangerouslySetInnerHTML={{ __html: code }} />
            </pre>
        </div>
    );
};

export default CodeBlock;
