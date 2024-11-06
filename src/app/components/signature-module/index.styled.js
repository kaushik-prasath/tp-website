import styled from "styled-components"

export const Conatiner = styled.div`
    width: 100%;
`;

export const TopHalf = styled.div`
    width: 100%;
    height: 820px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 32px;
        line-height: 30px;
        font-weight: 900; 
        color: ${props => props.theme.colors.textBlack};
        text-align: center;

        @media (max-width: 900px) {
            font-size: 24px;
            line-height: 32px;
        }
    }
`;

export const TopHalfContentContainer = styled.div`
    width: 80%;
    height: 576px;
    margin: 0 auto;
    margin-top: 20px;

    display: flex;
    align-items: center;
`;

export const TopHalfLeftContainer = styled.div`
    width: 20%;
    height: 100%;
    background-color: grey;
    border-radius: 20px;
`;

export const TopHalfRightContainer = styled.div`
    flex: 1;
    height: 460px;
    background-color: #DAB9F2;
    border-radius: 0 60px 60px 0;
`;

export const BottomHalf = styled.div`
    width: 100%;
    height: 481px;
    background-color: ${props => props.theme.colors.backgroundBlack};

    display: flex;
    align-items: center;
`;

export const ReviewCard = styled.div`
    height: 840px;
    width: 365px;
    background-color: pink;
`;