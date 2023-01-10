import React, { useState } from "react";

export const ColorModeContext = React.createContext({
    mode:"",
    setMode:()=>{alert("config first")}
});
export const ColorModeProvider = ({children, initialMode}) => {
    const [mode, setMode] = useState(initialMode)
    return(
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode}}>
            {children}
        </ColorModeContext.Provider>     
    )
}
