import React, { useState, useCallback } from 'react';
import Slide from './components/Slide';
import { acronymData } from './constants';
import type { AcronymSlideData } from './types';

const App: React.FC = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToNext = useCallback(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % acronymData.length);
    }, []);

    const goToPrev = useCallback(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + acronymData.length) % acronymData.length);
    }, []);

    const currentSlideData: AcronymSlideData = acronymData[currentSlideIndex];

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
            <Slide data={currentSlideData} key={currentSlideIndex} />

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 flex items-center space-x-4 z-10">
                <span className="text-slate-400 text-lg font-mono">
                    {currentSlideIndex + 1} / {acronymData.length}
                </span>
                <button
                    onClick={goToPrev}
                    className="bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700 rounded-full p-3 transition-colors duration-200"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 18l-6-6 6-6"></path></svg>
                </button>
                <button
                    onClick={goToNext}
                    className="bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700 rounded-full p-3 transition-colors duration-200"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 18l6-6-6-6"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default App;
