'use client'

import Image from 'next/image'

import { Container, Nav, LogoContainer, NavLinks, BannerContainer, BannerLeftPortion, BannerRightPortion, DownloadAppBtn, BannerRightIllustrationWrapper } from './index.styled'

import TypeWriter from './typewriter'
const Header = () => {
    return <Container>
        <Nav>
            <LogoContainer>
                <Image
                    src="/logo.svg"
                    alt="tinypal logo"
                    width={110}
                    height={60}
                />
            </LogoContainer>

            <NavLinks>
                <li>Download App</li>
                <li>Our Modules</li>
                <li>About us</li>
            </NavLinks>
        </Nav>

        <BannerContainer>
            <BannerLeftPortion>
                <TypeWriter />
                <h3>way to raise 1-10 year old</h3>

                <DownloadAppBtn>Download App</DownloadAppBtn>
            </BannerLeftPortion>
            
            <BannerRightPortion>
                <BannerRightIllustrationWrapper>
                    <Image
                        src="/banner-illustration.svg"
                        alt="tinypal banner image"
                        fill
                        className='banner-illustration'
                    />
                </BannerRightIllustrationWrapper>
            </BannerRightPortion>
        </BannerContainer>
    </Container>
}

export default Header

