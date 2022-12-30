import { PlaylistSection } from "./PlaylistSection";
import styled from "styled-components";
const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
`;

export const Timeline = ({playlists}) => {
    const playlistNames = Object.keys(playlists);
    //statement
    //retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                return(
                    <PlaylistSection
                        key={playlistName}
                        playlistName={playlistName}
                        videos={playlists[playlistName]}
                    />
                )
            })}
        </StyledTimeline>
    )
}