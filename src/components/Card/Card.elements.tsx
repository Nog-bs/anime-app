import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.cardPimary};
    border-radius: 4px;
    margin: 6px;
    display: flex;
    position: relative;
    height: 250px;
`;
export const CardImg = styled.img`
    height: 250px;
    width: 150px;
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
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
export const Synopsis = styled.p`
    font-size: 0.8rem;
    padding: 6px;
    height: 50%;
    overflow: scroll;
`;
export const InfoContainer = styled.div`
    font-size: 0.75rem;
`;
export const StartDate = styled.p``;
