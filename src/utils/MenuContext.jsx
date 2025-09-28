import { createContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(true); 
    const [theme, setTheme] = useState('light');
    const [isMobile, setIsMobile] = useState(false);

    const handleSidebar = () => {
        setShowSidebar(!showSidebar)
    }
    
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    return(
        <MenuContext.Provider value={{showSidebar, setShowSidebar, handleSidebar, theme, setTheme, handleTheme, isMobile, setIsMobile}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext;