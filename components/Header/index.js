import styled from "styled-components";
const StyledHeader = styled.div`
    .user-info{
        align-items: center;
        background-color: ${({ theme }) => theme.backgroundBase};
        color: ${({theme}) => theme.textColorBase};
        display: flex;
        padding: 1rem 2rem;
        width: 100%;
        img{
            border-radius: 50%;
            height: 5rem;
            width: 5rem;
        }
        div{
            margin-left: 0.5rem;  
        }
    } 
`;
const StyledBanner = styled.div`
    background-image: url(${({bg}) => bg});
    background-position: center;
    background-size: cover;
    height: 14.375rem;
`;
export const Header = ({userInfo, theme}) => {
    return (
        <StyledHeader
            theme={theme}
        >
            <StyledBanner
                theme={theme}
                bg={userInfo.bg}
            />
            <section className="user-info">
                <img src={`https://github.com/${userInfo.github}.png`}/>
                <div>
                    <h2>{userInfo.name}</h2>
                    <p>{userInfo.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}


