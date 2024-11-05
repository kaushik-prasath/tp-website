import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 550px;
    background-color: ${props => props.theme.colors.lightPurple};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 32px;
        line-height: 40px;
        font-weight: 900; 
        color: ${props => props.theme.colors.textBlack};
        text-align: center;

        @media (max-width: 900px) {
            font-size: 22px;
        }
    }
`;

export const ContentContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 900px) {
        width: 90%;
    }
`;

export const ContentBox = styled.div`
    flex: 1 1 20%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        flex: 1 1 40%;
    }

    @media (max-width: 900px) {
        flex: 1 1 50%;
    }

    p {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: ${props => props.theme.colors.textBlack};
        margin-top: 1rem;
        
        @media (max-width: 900px) {
            font-size: 14px;
            line-height: 24px;
        }
    }
`;

export const HeadingWrapper = styled.div`
    height: 180px;
    padding: 1rem 0;
    padding-right: 1rem;
    border-bottom: 4px solid ${props => props.theme.colors.textBlack};
    display: flex;
    align-items: center;

    @media (max-width:900px) {
        height: auto;
    }

    h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        font-weight: 700; 
        line-height: 40px;
        color: ${props => props.theme.colors.textBlack};

        @media (max-width: 900px) {
            font-size: 18px;
            line-height: 28px;
        }
    }
`;
