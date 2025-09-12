import type React from 'react';

export interface Benefit {
    text: string;
    icon: React.ReactElement;
}

export interface CodeExample {
    title: string;
    code: string;
    titleColor: string;
}

export interface AcronymSlideData {
    acronym: string;
    fullName: string;
    description: string;
    benefits: Benefit[];
    badExample: CodeExample;
    goodExample: CodeExample;
}
