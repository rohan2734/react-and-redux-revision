import React,{useContext,useState} from "react";

export const ThemeContext  = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}){

    const [darkTheme,setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    )

}