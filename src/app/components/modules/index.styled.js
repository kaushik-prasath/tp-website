import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

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

export const ModulesContainer = styled.div`
    width: 100%;
    height: 554px;
    background-color: ${props => props.theme.colors.backgroundBlack};
    margin-top: 2rem;
`;