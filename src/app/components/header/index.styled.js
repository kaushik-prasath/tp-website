import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 700px;
    background: linear-gradient(180deg, #FFFBF9 0%, #FAD2B5 100%);

    @media (max-width: 900px) {
        height: auto;
    }
`;

export const Nav = styled.div`
    width: 80%;
    height: 90px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        display: none;
        width: 90%;
    }
`;

export const LogoContainer = styled.div`

`;

export const NavLinks = styled.ul`
    display: flex;

    li {
        list-style: none;
        font-weight: 700;
        font-size: 16px;

        &:nth-child(1), &:nth-child(2) {
            margin-right: 30px;
        }
    }
`;

export const BannerContainer = styled.div`
    width: 80%;
    height: 530px;
    margin: 0 auto;

    display: flex;

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
        height: auto;
        width: 90%;
    }
`;

export const BannerLeftPortion = styled.div`
    width: 50%;
    height: 100%;

    h3 {
        font-size: 24px;
        font-weight: 500;
        color: ${props => props.theme.colors.textBlack};
        font-family: "Inter", sans-serif;

        @media (max-width: 900px) {
            font-size: 18px;
            line-height: 21px;
        }
    }

    
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 300px;

        h1 {
            margin: 0;
        }
    }
`;

export const DownloadAppBtn = styled.button`
    width: 180px;
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
`;

export const BannerRightPortion = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        width: 100%;
        height: 530px;
    }
`;

export const BannerRightIllustrationWrapper = styled.div`
    width: 100%;
    height: 430px;
    position: relative;

    .banner-illustration {
        object-fit: contain;
    }
`;

const cursorBlink = keyframes`
  0% { border-right-color: transparent; }
  50% { border-right-color: black; }
  100% { border-right-color: transparent; }
`;

export const StyledHeading = styled.h1`
    min-height: 70px;
    margin-top: 80px;
    font-family: "Montserrat", sans-serif;
    font-size: 50px;
    font-weight: 900;
    color: ${props => props.theme.colors.textBlack};
    animation: ${cursorBlink} 0.75s step-end infinite;

    @media (max-width: 900px) {
        font-size: 40px;
    }
`;

