import styled from "styled-components";
const StyledHeader = styled.div`
    .user-info{
        align-items: center;
        display: flex;
        margin-top: 5rem;
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
export const Header = ({userInfo}) => {
    return (
        <StyledHeader>
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