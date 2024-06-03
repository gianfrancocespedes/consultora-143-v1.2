import { useState, useEffect } from 'react';

const LightTheme = () => (
    <svg
        id="theme-toggle-light-icon"
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#146eab] dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"></path>
    </svg>
);

const DarkTheme = () => (
    <svg
        id="theme-toggle-dark-icon"
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#146eab] dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        ></path>
    </svg >
);

export function PageTheme() {

    const [theme, setTheme] = useState();

    // Se ejecuta al cargar el componente
    useEffect(() => {
        let actualTheme = localStorage.getItem('theme') || 'light';
        setTheme(actualTheme);
        if (actualTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleTheme = () => {
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
    }

    return (
        <div className="col-span-6 sm:col-span-3">
            <button id="themeToggle" onClick={handleTheme} className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                {theme === 'dark' ? <DarkTheme /> : <LightTheme />}
                <span className="flex-1 ml-3 text-left rtl:text-right whitespace-nowrap">
                    Apariencia
                </span>
            </button>
        </div>
    );
}