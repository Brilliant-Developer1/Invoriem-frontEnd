"use client"
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);

      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
    }, [])

    useEffect(() => {
        const root = document.documentElement;
        const tealValue = theme === "light" ? "#114455" : "#fff";
        const greyValue = theme === "light" ? "rgb(75 85 99)" : "rgb(226 232 240)";
        const backgroundColor = theme === "light" ? "#fff" : "#114455";
        root.style.setProperty('--teal', tealValue);
        root.style.setProperty('--grey', greyValue);
        root.style.setProperty('--fallback-b1', backgroundColor);
        
    }, [theme]);

    if(!isMounted){
        return <div className="flex justify-center"><span className="loading loading-ring loading-lg absolute inset-y-0"></span></div>
    }

    const changeTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
        {children}
        </ThemeContext.Provider>
    )
    
}
