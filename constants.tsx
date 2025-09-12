import React from 'react';
import type { AcronymSlideData, Benefit } from './types';

// Icons for benefits
const PenIcon = (
    <div className="flex-shrink-0 text-cyan-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
    </div>
);
const TargetIcon = (
    <div className="flex-shrink-0 text-purple-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
    </div>
);
const BookIcon = (
    <div className="flex-shrink-0 text-green-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    </div>
);
const ZapIcon = (
     <div className="flex-shrink-0 text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    </div>
);
const ScissorsIcon = (
    <div className="flex-shrink-0 text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
    </div>
);


export const acronymData: AcronymSlideData[] = [
    {
        acronym: 'DRY',
        fullName: "Don't Repeat Yourself",
        description: 'Every piece of code should have a single, authoritative representation within a system.',
        benefits: [
            { text: 'Change code in one place.', icon: PenIcon },
            { text: 'Prevents behavior drift.', icon: TargetIcon },
            { text: 'Improves readability.', icon: BookIcon },
        ],
        badExample: {
            title: 'WET Approach (Repetitive)',
            titleColor: 'text-red-400',
            code: `<span class="text-slate-500"># WET: Repetitive file writing logic</span>
<span class="text-purple-400">import</span> json

<span class="text-purple-400">def</span> <span class="text-cyan-400">save_user_as_json</span>(<span class="text-orange-400">user, filename</span>):
    <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
        content = json.dumps(user, indent=2)
        f.write(content)
    <span class="text-cyan-400">print</span>(<span class="text-green-400">f"Saved {filename}!"</span>)

<span class="text-purple-400">def</span> <span class="text-cyan-400">save_user_as_txt</span>(<span class="text-orange-400">user, filename</span>):
    <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
        content = <span class="text-green-400">f"Name: {user['name']}\\nEmail: {user['email']}"</span>
        f.write(content)
    <span class="text-cyan-400">print</span>(<span class="text-green-400">f"Saved {filename}!"</span>)`,
        },
        goodExample: {
            title: 'DRY Approach (Reusable)',
            titleColor: 'text-green-400',
            code: `<span class="text-slate-500"># DRY: Abstracted file writing logic</span>
<span class="text-purple-400">import</span> json

<span class="text-purple-400">def</span> <span class="text-cyan-400">save_to_file</span>(<span class="text-orange-400">content, filename</span>):
    <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
        f.write(content)
    <span class="text-cyan-400">print</span>(<span class="text-green-400">f"Saved {filename}!"</span>)

<span class="text-purple-400">def</span> <span class="text-cyan-400">save_user_as_json</span>(<span class="text-orange-400">user, filename</span>):
    content = json.dumps(user, indent=2)
    <span class="text-cyan-400">save_to_file</span>(content, filename)

<span class="text-purple-400">def</span> <span class="text-cyan-400">save_user_as_txt</span>(<span class="text-orange-400">user, filename</span>):
    content = <span class="text-green-400">f"Name: {user['name']}\\nEmail: {user['email']}"</span>
    <span class="text-cyan-400">save_to_file</span>(content, filename)`,
        },
    },
    {
        acronym: 'KISS',
        fullName: 'Keep It Simple, Stupid',
        description: 'Systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design.',
        benefits: [
            { text: 'Easier to maintain and debug.', icon: PenIcon },
            { text: 'Faster for new developers to understand.', icon: ZapIcon },
            { text: 'Reduces the chance of bugs.', icon: TargetIcon },
        ],
        badExample: {
            title: 'Complex Approach',
            titleColor: 'text-red-400',
            code: `<span class="text-slate-500"># Complex: Over-engineered class hierarchy</span>
<span class="text-purple-400">class</span> <span class="text-yellow-400">AbstractWriter</span>:
    <span class="text-purple-400">def</span> <span class="text-cyan-400">write</span>(<span class="text-orange-400">self, data</span>):
        <span class="text-purple-400">raise</span> <span class="text-red-400">NotImplementedError</span>

<span class="text-purple-400">class</span> <span class="text-yellow-400">FileWriter</span>(<span class="text-yellow-400">AbstractWriter</span>):
    <span class="text-purple-400">def</span> <span class="text-cyan-400">__init__</span>(<span class="text-orange-400">self, filename</span>):
        <span class="text-orange-400">self</span>.filename = filename
    <span class="text-purple-400">def</span> <span class="text-cyan-400">write</span>(<span class="text-orange-400">self, data</span>):
        <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(<span class="text-orange-400">self</span>.filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
            f.write(<span class="text-orange-400">self</span>.<span class="text-cyan-400">_format</span>(data))
    <span class="text-purple-400">def</span> <span class="text-cyan-400">_format</span>(<span class="text-orange-400">self, data</span>):
        <span class="text-purple-400">return</span> <span class="text-cyan-400">str</span>(data)

<span class="text-purple-400">class</span> <span class="text-yellow-400">JsonFileWriter</span>(<span class="text-yellow-400">FileWriter</span>):
    <span class="text-purple-400">def</span> <span class="text-cyan-400">_format</span>(<span class="text-orange-400">self, data</span>):
        <span class="text-purple-400">import</span> json
        <span class="text-purple-400">return</span> json.dumps(data, indent=2)

<span class="text-slate-500"># Usage is unnecessarily complex</span>
writer = <span class="text-cyan-400">JsonFileWriter</span>(<span class="text-green-400">'user.json'</span>)
writer.write({<span class="text-green-400">'name'</span>: <span class="text-green-400">'Alice'</span>})`,
        },
        goodExample: {
            title: 'KISS Approach (Simplified)',
            titleColor: 'text-green-400',
            code: `<span class="text-slate-500"># Simple: A straightforward function</span>
<span class="text-purple-400">import</span> json

<span class="text-purple-400">def</span> <span class="text-cyan-400">write_json_file</span>(<span class="text-orange-400">filename, data</span>):
    <span class="text-slate-500">"""Writes a dictionary to a JSON file."""</span>
    <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
        json.dump(data, f, indent=2)

<span class="text-slate-500"># Simple, direct usage</span>
<span class="text-cyan-400">write_json_file</span>(<span class="text-green-400">'user.json'</span>, {<span class="text-green-400">'name'</span>: <span class="text-green-400">'Alice'</span>})`,
        },
    },
    {
        acronym: 'YAGNI',
        fullName: "You Ain't Gonna Need It",
        description: 'A programmer should not add functionality until deemed necessary. Avoid building features on speculation.',
        benefits: [
            { text: 'Prevents wasted development time.', icon: ZapIcon },
            { text: 'Keeps the codebase smaller and cleaner.', icon: ScissorsIcon },
            { text: 'Focuses on delivering current requirements.', icon: TargetIcon },
        ],
        badExample: {
            title: 'Speculative Approach',
            titleColor: 'text-red-400',
            code: `<span class="text-slate-500"># YAGNI violation: Building a generic writer for future needs</span>
<span class="text-purple-400">import</span> json

<span class="text-purple-400">class</span> <span class="text-yellow-400">GenericFileWriter</span>:
    <span class="text-purple-400">def</span> <span class="text-cyan-400">__init__</span>(<span class="text-orange-400">self, format</span>=<span class="text-green-400">'json'</span>):
        <span class="text-purple-400">if</span> format <span class="text-purple-400">not in</span> [<span class="text-green-400">'json'</span>, <span class="text-green-400">'txt'</span>, <span class="text-green-400">'xml'</span>, <span class="text-green-400">'csv'</span>]:
            <span class="text-purple-400">raise</span> <span class="text-red-400">ValueError</span>(<span class="text-green-400">"Unsupported format"</span>)
        <span class="text-orange-400">self</span>.format = format

    <span class="text-purple-400">def</span> <span class="text-cyan-400">write</span>(<span class="text-orange-400">self, filename, data</span>):
        <span class="text-purple-400">if</span> <span class="text-orange-400">self</span>.format == <span class="text-green-400">'json'</span>:
            <span class="text-slate-500"># Implemented because we need it now</span>
            content = json.dumps(data)
            <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
                f.write(content)
        <span class="text-purple-400">elif</span> <span class="text-orange-400">self</span>.format == <span class="text-green-400">'xml'</span>:
            <span class="text-slate-500"># We don't need this yet</span>
            <span class="text-purple-400">pass</span> 
        <span class="text-purple-400">elif</span> <span class="text-orange-400">self</span>.format == <span class="text-green-400">'csv'</span>:
            <span class="text-slate-500"># Or this</span>
            <span class="text-purple-400">pass</span>`,
        },
        goodExample: {
            title: 'YAGNI Approach (Focused)',
            titleColor: 'text-green-400',
            code: `<span class="text-slate-500"># YAGNI: Implement only what's necessary now</span>
<span class="text-purple-400">import</span> json

<span class="text-purple-400">def</span> <span class="text-cyan-400">write_json_file</span>(<span class="text-orange-400">filename, data</span>):
    <span class="text-slate-500">"""Writes data to a JSON file."""</span>
    <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
        json.dump(data, f, indent=2)

<span class="text-purple-400">def</span> <span class="text-cyan-400">write_text_file</span>(<span class="text-orange-400">filename, text_data</span>):
    <span class="text-slate-500">"""Writes text to a file."""</span>
    <span class="text-purple-400">with</span> <span class="text-cyan-400">open</span>(filename, <span class="text-green-400">'w'</span>) <span class="text-purple-400">as</span> f:
        f.write(text_data)

<span class="text-slate-500"># Add an XML writer only when a feature</span>
<span class="text-slate-500"># explicitly requires it.</span>`,
        },
    }
];
