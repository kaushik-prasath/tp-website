import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Rectangle = styled.div`
    width: 80%;
    height: 280px;
    background-color: ${props => props.theme.colors.lightYellow};
    margin: 0 auto;
    border-radius: 60px;

    display: flex;
`;

export const ImageContainer = styled.div`
    width: 30%;
    height: 100%;
`;

export const ContentContainer = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;


    p {
        font-size: 20px;
        font-weight: 500;
        line-height: 40px;

        @media (max-width: 900px) {
            /* font-size: calc(20px * 0.875) */
            font-size: 14px;
            line-height: 24px;
        }
    }

    p.bold {
        font-weight: 700;
        margin-top: 2rem;
    }

    button {
        width: 130px;
        height: 40px;
        background-color: ${props => props.theme.colors.blackButton};
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 700;
        font-family: "Quicksand", sans-serif;
        margin-top: 10px;

        @media (max-width: 900px) {
            font-size: calc(14px * 0.875)
        }
    }
`;