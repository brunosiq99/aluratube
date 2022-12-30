export const VideoCard = ({video}) => {
    return(
        <a href={video.url}>
            <img src={video.thumb}/>
            <span>
                {video.title}
            </span>
        </a>
    ) 
}

