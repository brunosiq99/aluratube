import { CssReset } from "../components/css/CssReset";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/Timeline";

import config from "../config.json";
import styled from "styled-components";



const HomePage = () => {
    const homePageStyles = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    }
    return (
        <>
            <CssReset/>
            <div style={homePageStyles}>
                <Menu
                />
                <Header
                    userInfo={config.userinfo}
                />
                <Timeline
                    playlists={config.playlists}
                />
            </div>
        </>
        
    )
}
  
export default HomePage
  