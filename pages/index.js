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
        flex: 1,
    }
    const [filterValue, setFilterValue] = useState('')
    return (
        <>
            <CssReset/>
            <div style={homePageStyles}>
                <Menu
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                />
                <Header
                    userInfo={config.userinfo}
                />
                <Timeline
                    filterValue={filterValue}
                    playlists={config.playlists}
                />
            </div>
        </>
        
    )
}
  
