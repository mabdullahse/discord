import React, { useContext, createContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'light-theme', fn: () => {} });

export function ThemeContextProvidor({ children }) {
     const [theme, setTheme] = useState('light-theme');

    function toggleTheme() {
        setTheme((previousTheme)=> previousTheme === 'dark-theme' ? 'light-theme' : 'dark-theme')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
 
 export function useTheme() {
    //    console.log(useContext(ThemeContext));;
     const { theme, toggleTheme } = useContext(ThemeContext);

    if (!theme) {
        throw new Error(`"useTheme" must be called inside a "ThemeProvider"`)	
    }

     return [theme, toggleTheme]
 }
