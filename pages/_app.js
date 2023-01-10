import { React } from "react";
import { useContext } from "react";

import { ColorModeContext, ColorModeProvider } from "../components/ColorMode";
import { ThemeProvider } from "styled-components";

import config from "../config.json";
import { CssReset } from "../components/css/CssReset";

const ProviderWrapper = ({children}) => {
    return(
        <ColorModeProvider initialMode={"dark"}>
            {children}
        </ColorModeProvider>
    )
}

const MyApp = ({ Component, pageProps }) => {
    const context = useContext(ColorModeContext)
    
    return(     
        <ThemeProvider theme={config.colorStyles[context.mode]}>
            <CssReset/>
            <Component {...pageProps} />
        </ThemeProvider>   
    )
}
export default function _app(props) {
    return(
        <ProviderWrapper>
            <MyApp {...props}></MyApp>
        </ProviderWrapper>
    )
}
  