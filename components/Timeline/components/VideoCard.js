import styled from "styled-components"

const StyledVideoCard = styled.a`
    span{
        color: ${({theme})=> theme.textColorBase};
    }  
`;
export const VideoCard = ({video}) => {
    return(
        <StyledVideoCard
            href={video.url}
        >
            <img src={video.thumb}/>
            <span>
                {video.title}
            </span>
        </StyledVideoCard>
    ) 
}

