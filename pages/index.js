import { CssReset } from "../components/css/CssReset";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/Timeline";

import config from "../config.json";
import React from "react";
import { useState } from "react";

export default function HomePage(){
    const homePageStyles = {
        display: "flex",
        flexDirection: "column",
        flex: 1
    }

    const [filterValue, setFilterValue] = useState('');
    const [theme, setTheme] = useState(config.colorStyles.light);
    const changeTheme = (themeValue) => {
        themeValue === `light` ? setTheme(config.colorStyles.light) : setTheme(config.colorStyles.dark)
    }
    
    return (
        <>
            <CssReset/>
            <div style={homePageStyles}>
                <Menu
                    theme={theme}
                    changeTheme={changeTheme}
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                />
                <Header
                    key="header"
                    userInfo={config.userinfo}
                    theme={theme}

                />
                <Timeline
                    key="timeline"
                    filterValue={filterValue}
                    playlists={config.playlists}
                    theme={theme}
                />
            </div>
        </>
        
    )
}
  
