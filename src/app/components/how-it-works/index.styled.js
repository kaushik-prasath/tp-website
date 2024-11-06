import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 32px;
        font-weight: 900; 
        color: ${props => props.theme.colors.textBlack};
        text-align: center;

        @media (max-width: 900px) {
            font-size: 24px;
            line-height: 32px;
        }
    }
`;

export const CardsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 900px) {
        width: 90%;
    }
`;   

export const Card = styled.div`
    width: 49%;
    /* height: 200px; */
    background-color: ${props => props.theme.colors.lightYellow};
    border-radius: 20px;
    padding: 25px;

    h2 {
        font-family: "Montserrat", sans-serif;
        font-weight: 800;
        font-size: 24px;
        line-height: 40px;
        color: ${props => props.theme.colors.blackButton};

        @media (max-width: 900px) {
            font-size: 22px;
        }
    }

    h3 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 40px;
        margin-top: 1rem;
        color: ${props => props.theme.colors.blackButton};

        @media (max-width: 900px) {
            font-size: 20px;
            line-height: 28px;
        }
    }

    p {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: ${props => props.theme.colors.textBlack};

        @media (max-width: 900px) {
            font-size: 14px;
            line-height: 24px;
        }
    }

    @media (max-width: 1250px) {
        width: 48%;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;