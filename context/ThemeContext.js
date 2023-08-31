"use client"
import { createContext, useState } from "react"
export const ThemeContext = createContext();

export const ThemeProvider = ({ childern }) => {
    const [mode, setMode] = useState("dark");
    const toggle = () => {
        console.log("clicked")
        setMode((prev) => {
             prev === "dark" ? "light" : "dark" 
            });
    };
    return (
    <ThemeContext.Provider value={{toggle, mode }}>
        {childern}
    </ThemeContext.Provider>
    );
};
