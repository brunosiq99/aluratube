import { PlaylistSection } from "./components/PlaylistSection";
import styled from "styled-components";
const StyledTimeline = styled.div`
    background-color: ${({theme})=> theme.backgroundBase};
    color: ${({theme})=> theme.textColorBase};
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
`;

export const Timeline = ({playlists, filterValue, theme}) => {
    const playlistNames = Object.keys(playlists);
    //statement
    //retorno por expressão
    return (
        <StyledTimeline
            theme={theme}
        >
            {playlistNames.map((playlistName) => {
                return(
                    <PlaylistSection
                        key={playlistName}
                        theme={theme}
                        filterValue={filterValue}
                        playlistName={playlistName}
                        videos={playlists[playlistName]}
                    />
                )
            })}
        </StyledTimeline>
    )
}