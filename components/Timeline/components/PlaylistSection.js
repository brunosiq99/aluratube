import { VideoCard } from "./VideoCard.js";
import styled from "styled-components";

const StyledPlaylistSection = styled.section`
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 1rem;
    h2 {
        font-size: 1rem;
        margin-bottom: 1rem;
        text-transform: capitalize;
    }
    div { 
    width: calc(100vw - 1rem * 4);
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
        a {
            scroll-snap-align: start;
            img {
                aspect-ratio: 16/9;
                font-weight: 500;
                object-fit: cover;
                width: 100%;
                max-width: 210px;
                height: auto;
            }
            span {
                padding-top: 8px;
                display: block;
                padding-right: 24px;
                color: ${({ theme }) => theme.textColorBase || "#222222"};
            }
        }
    }
`

export const PlaylistSection = ({videos, playlistName, filterValue, theme}) => {
    return(
        <StyledPlaylistSection theme={theme}>
            <h2>{playlistName}</h2>
            <div>
                {videos
                    .filter((video)=>{
                        const titleNormalized = video.title.toLowerCase();
                        const filterNormalized = filterValue.toLowerCase();
                        return titleNormalized.includes(filterNormalized) 
                    })
                    .map((video) => {
                        return(
                            <VideoCard
                                key={video.url}
                                theme={theme}
                                video={video}
                            />
                        )
                    })
                }
            </div>    
        </StyledPlaylistSection>
    )    
}