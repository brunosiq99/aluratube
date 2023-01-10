import { PlaylistSection } from "./components/PlaylistSection";
import styled from "styled-components";
const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
`;

export const Timeline = ({playlists, filterValue}) => {
    const playlistNames = Object.keys(playlists);
    //statement
    //retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                return(
                    <PlaylistSection
                        key={playlistName}
                        filterValue={filterValue}
                        playlistName={playlistName}
                        videos={playlists[playlistName]}
                    />
                )
            })}
        </StyledTimeline>
    )
}