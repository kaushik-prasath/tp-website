import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
        height: auto;
    }
`;

export const ContentContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    @media (max-width: 900px) {
        width: 90%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const LogoContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;

    @media (max-width: 1300px) {
        width: 50%;
    }

    @media (max-width: 900px) {
        width: 50%;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 2rem;
    }
`;

export const LogoContainerColumn1 = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;    

    h3 {
        font-size: 16px;
        font-weight: 700;
        line-height : 24px;
        color: ${props => props.theme.colors.blueishGrey};

        @media (max-width: 900px) {
            font-size: calc(16px * 0.875)
        }
    }

    @media (max-width: 900px) {
        height: auto;
        width: 100%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const LogoContainerColumn2 = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
        margin-top: 2rem;
        height: auto;
        justify-content: flex-start;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const Nav = styled.ul`
    list-style: none;

    li {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
        line-height : 24px;
        color: ${props => props.theme.colors.blueishGrey};

        @media (max-width: 900px) {
            font-size: calc(16px * 0.875)
        }
    }
`;

export const SocialContainer = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    p {
        font-size: 16px;
        font-weight: 700;
        line-height : 24px;
        line-height : 24px;
        color: ${props => props.theme.colors.blueishGrey};

        @media (max-width: 900px) {
            font-size: calc(16px * 0.875)
        }
    }

    p.copyrights{
        margin-top: 2rem;
    }

    @media (max-width: 1300px) {
        width: 40%;
    }

    @media (max-width: 900px) {
        width: 50%;
    }

    @media (max-width: 600px) {
        width: 100%;
        align-items: center;
        margin: 2rem 0;
    }
`;

export const SocialIcons = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`;