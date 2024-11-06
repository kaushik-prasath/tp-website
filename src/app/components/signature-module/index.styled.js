import styled, { keyframes } from "styled-components"

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

export const TopHalfRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 480px;
`;

export const TopHalfRightContainer = styled.div`
    height: 460px;
    background-color: #DAB9F2;
    border-radius: 0 60px 60px 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;


const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const ContentContainer = styled.div`
    width: 90%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: opacity 0.5s ease;
    animation: ${props => (props.animate ? slideIn : slideOut)} 0.5s forwards;

    h2 {
        font-weight: 800;
        font-size: 24px;
        line-height: 40px;
        font-family: "Montserrat", sans-serif;
        color: ${props => props.theme.colors.textBlack};
    }

    h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        margin: 1rem 0;
        color: ${props => props.theme.colors.textBlack};
    }

    p {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: ${props => props.theme.colors.textBlack};
    }

    button {
        width: 200px;
        padding: 0 10px;
        height: 48px;
        background-color: ${props => props.theme.colors.blackButton};
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 700;
        font-family: "Quicksand", sans-serif;
        margin-top: 40px;

        @media (max-width: 900px) {
            font-size: 12px;
        }
    }
`;


export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-weight: 700;
        font-size: 18px;
        line-height: 40px;
        margin: 1rem;
    }
`;

export const PrevBtn = styled.button`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.lightPurple};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`;

export const NextBtn = styled(PrevBtn)`
`;

export const BottomHalf = styled.div`
    width: 100%;
    height: 481px;
    background-color: ${props => props.theme.colors.backgroundBlack};

    display: flex;
    align-items: center;
`;

/* Carousel styles */
export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 100%;
`;

export const ReviewCard = styled.div`
    display: ${({ position }) => (position === "hidden" ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    width: ${({ position }) => (position === "center" ? "840px" : "840px")};
    min-height: 262px;
    height: ${({ position }) => (position === "center" ? "365px" : "auto")};
    margin: 0 10px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease, opacity 0.5s ease, width 0.5s ease, height 0.5s ease;
    padding: 1rem 0;

    opacity: ${({ position }) => (position === "center" ? 1 : 0.3)};
    position: absolute;
    left: ${({ position }) => {
        if (position === "left") return "25%";
        if (position === "right") return "75%";
        return "50%";
    }};
    transform: ${({ position }) =>
        position === "center"
            ? "translateX(-50%)"
            : position === "left"
            ? "translateX(-100%)"
            : "translateX(0)"};
    z-index: ${({ position }) => (position === "center" ? 2 : 0)};
`;

export const QuoteContainer = styled.div`
    position: absolute;
    right: 10px;
    top: 0;

    img {
    }
`;

export const ReviewContent = styled.div`
    width: 90%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
        text-align: left;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }

    p.content {
        margin: 2rem 0;
    }

    p.title, p.author {
        font-weight: 700;
        font-size: 18px;
        line-height: 40px;
    }
`;

