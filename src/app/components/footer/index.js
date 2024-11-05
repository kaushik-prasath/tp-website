import Image from 'next/image'
import { Container, ContentContainer, LogoContainer, LogoContainerColumn1, LogoContainerColumn2, Nav, SocialContainer, SocialIcons } from './index.styled'

const Footer = () => {
    return <Container>
        <ContentContainer>
            <LogoContainer>
                <LogoContainerColumn1>
                    <Image
                        src="/logo.svg"
                        alt="tinypal logo"
                        width={192}
                        height={60}
                    />

                    <h3>AI-led child development discovery based</h3>
                </LogoContainerColumn1>

                <LogoContainerColumn2>
                    <Nav>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </Nav>
                </LogoContainerColumn2>
            </LogoContainer>

            <SocialContainer>
                <SocialIcons>
                    <Image
                        src="/facebook.svg"
                        alt="facebook icon"
                        width={24}
                        height={24}
                    />
                    <Image
                        src="/twitter.svg"
                        alt="twitter icon"
                        width={24}
                        height={24}
                    />
                    <Image
                        src="/instagram.svg"
                        alt="instagram icon"
                        width={24}
                        height={24}
                    />
                    <Image
                        src="/linkedin.svg"
                        alt="linkedin icon"
                        width={24}
                        height={24}
                    />
                </SocialIcons>

                <p className='copyrights'>© 2024 TinyPal.</p>
                <p>Terms & Conditions | Privacy Policy</p>
            </SocialContainer>
        </ContentContainer>
    </Container>
}

export default Footer