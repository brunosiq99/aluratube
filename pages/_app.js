import { React } from "react";
import { useContext } from "react";

import { ColorModeContext, ColorModeProvider } from "../components/ColorMode.js";
import { ThemeProvider } from "styled-components";

import config from "../config.json";
import { CssReset } from "../components/CssReset";
import { RegisterVideo } from "../components/RegisterVideo/index.js";

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
            <RegisterVideo/>
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
  