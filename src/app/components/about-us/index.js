import { Container, ContentContainer, ContentBox, HeadingWrapper } from "./index.styled"

const AboutUs = () => {
    return <Container>
        <h1>About Us</h1>

        <ContentContainer>
            <ContentBox>
                <HeadingWrapper>
                    <h2>Vision</h2>
                </HeadingWrapper>

                <p>Empower busy mothers to be the architects of their child's unique legacy</p>
            </ContentBox>

            <ContentBox>
                <HeadingWrapper>
                    <h2>Mission</h2>
                </HeadingWrapper>

                <p>Equip busy mothers of 1-10 year olds with fewer but effective strategies to guide their child’s development in the desired dimensions</p>
            </ContentBox>

            <ContentBox>
                <HeadingWrapper>
                    <h2>Team</h2>
                </HeadingWrapper>
                
                <p>We are a bunch of passionate parents and experts on a mission to ensure busy mothers also have a fulfilling family experience.</p>
            </ContentBox>

            <ContentBox>
                <HeadingWrapper>
                    <h2>Contact Us</h2>
                </HeadingWrapper>

                <p>TinyPal Pvt. Ltd.</p>
                <p> 16 Jalan Kilang, #02-01 Hoi-Hup Building</p>
                <p>Singapore-159416 & Hyderabad.</p>
                <p>contact@tinypal.com</p>
            </ContentBox>
        </ContentContainer>
    </Container>
}

export default AboutUs