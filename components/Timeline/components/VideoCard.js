import styled from "styled-components"

const StyledVideoCard = styled.a`
    span{
        color: ${({theme})=> theme.textColorBase};
    }  
`;
export const VideoCard = ({video,theme}) => {
    return(
        <StyledVideoCard
            theme={theme} 
            href={video.url}
        >
            <img src={video.thumb}/>
            <span>
                {video.title}
            </span>
        </StyledVideoCard>
    ) 
}

