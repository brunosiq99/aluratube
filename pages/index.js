//import components
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/Timeline";

//import configurations and libraries

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import config from "../config.json"


const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export default function HomePage() {
    const [filterValue, setFilterValue] = useState('');
    return(
        <StyledHomePage>
            <Menu
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />
            <Header
                key="header"
                userInfo={config.userinfo}

            />
            <Timeline
                key="timeline"
                filterValue={filterValue}
                playlists={config.playlists}
            />
        </StyledHomePage>
    )
}

    
 /*       <ThemeProvider theme={theme}>
            <CssReset/>
            
        <ThemeProvider/>    
    
*/