import React, { useState } from 'react'
import ThemeContext from './Themecontext';

function ThemeState({ children }) {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("newstheme")));
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeState
