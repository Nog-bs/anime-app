import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.cardPimary};
    border-radius: 4px;
    margin: 6px;
    display: flex;
    position: relative;
    height: 250px;
    @media (min-width: 475px) {
        width: 300px;
    }
`;
export const CardImg = styled.img`
    height: 250px;
    width: 100%;
`;
export const CardTitle = styled.h3`
    margin: 6px 0;
    width: 100%;
    border-bottom: solid ${({ theme }) => theme.cardSecondary} 1px;
    font-size: 1rem;
    text-align: center;
`;
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
export const MyAnimeList = styled.img`
    width: 25px;
    height: 25px;
`;
export const Link = styled.a`
    position: absolute;
    top: 5px;
    left: 5px;
`;
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
export const Synopsis = styled.p`
    font-size: 0.8rem;
    padding: 6px;
    height: 50%;
    overflow: auto;
    overflow-x: hidden;
`;
export const InfoContainer = styled.div`
    font-size: 0.75rem;
    padding: 6px;
`;
export const StartDate = styled.p``;
export const Score = styled.p``;
export const Episodes = styled.p``;
