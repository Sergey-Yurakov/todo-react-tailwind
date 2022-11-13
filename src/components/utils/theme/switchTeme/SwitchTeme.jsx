import { useEffect, useState } from 'react';

import { options } from './data';

const SwitchTeme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
    const element = document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const onWindowMatch = () => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && darkQuery.matches)
        ) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    };

    darkQuery.addEventListener('change', e => {
        if (!('theme' in localStorage)) {
            if (e.matches) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
            }
        }
    });

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch();
                break;
        }
    }, [element.classList, theme]);

    return (
        <div className=" absolute top-5 right-20 duration-100 dark:bg-slate-600 bg-gray-100 rounded max-sm:right-4">
            {options?.map(({ Icons, text }) => (
                <button
                    className={` w-8 h-8 leading-6 text-xl rounded-full  px-1.5 m-1 ${theme === text && 'text-sky-500'
                        }`}
                    key={text}
                    onClick={() => setTheme(text)}
                >
                    {Icons}
                </button>
            ))}
        </div>
    );
};

export default SwitchTeme;
