import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 80%;
    height: 230px;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    justify-content: space-between;

    &:last-child {
        margin-bottom: 100px; 
    }

    @media (max-width: 900px) {
        height: auto;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        width: 90%;
    }
`;

export const GraphicContainer = styled.div`
    width: 35%;
    height: 100%;
    background-color: #D9D9D9;
    border-radius: 8px;

    @media (max-width: 900px) {
        width: 100%;
        height: 170px;
        order: 1;
        margin-top: 30px;
    }
`;

export const ContentContainer = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        font-weight: 900;
        line-height: 40px;
        color: ${props => props.theme.colors.textBlack};

        @media (max-width: 900px) {
            font-size: 20px;
            line-height: 32px;
        }
    }

    p {
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        color: ${props => props.theme.colors.textBlack};
        margin-top: 30px;

        @media (max-width: 900px) {
            font-size: 14px;
            line-height: 24px;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;