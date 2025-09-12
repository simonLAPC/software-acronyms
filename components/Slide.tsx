import React from 'react';
import type { AcronymSlideData } from '../types';
import CodeBlock from './CodeBlock';

interface SlideProps {
    data: AcronymSlideData;
}

const Slide: React.FC<SlideProps> = ({ data }) => {
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row">
            {/* Left Panel: Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center p-8 md:p-16">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">{data.acronym}</h1>
                <p className="text-2xl md:text-3xl text-slate-400 mt-1">{data.fullName}</p>
                <div className="w-24 h-1 bg-cyan-500 my-8"></div>
                <p className="text-lg text-slate-300 max-w-md">
                    {data.description}
                </p>
                <ul className="mt-8 space-y-5">
                    {data.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-4">
                            {benefit.icon}
                            <p className="text-slate-300">{benefit.text}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Code Snippets */}
            <div className="w-full lg:w-3/5 bg-slate-900/70 p-8 md:p-16 flex flex-col justify-center">
                <div className="space-y-8">
                    <CodeBlock 
                        title={data.badExample.title}
                        code={data.badExample.code}
                        titleColor={data.badExample.titleColor}
                    />
                    <CodeBlock 
                        title={data.goodExample.title}
                        code={data.goodExample.code}
                        titleColor={data.goodExample.titleColor}
                    />
                </div>
            </div>
        </div>
    );
};

export default Slide;
