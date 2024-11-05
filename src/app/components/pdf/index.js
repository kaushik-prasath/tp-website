'use client'

import Image from 'next/image'
import { Container, Rectangle, ContentContainer, ImageContainer } from './index.styled'

const PDF = () => {
    return <Container>
        <Rectangle>
            <ImageContainer>
                {/* <Image
                    src="/happy-couple.svg"
                    alt="happy-couple"
                    width={246}
                    height={410}
                /> */}
            </ImageContainer>

            <ContentContainer>
                <p>We provide busy mothers with curated, effective parenting strategies in a fun and modular way so they can have a fulfilling family experience</p>

                <p className='bold'>Know your child’s love language</p>

                <button>Dowload PDF</button>
            </ContentContainer>
        </Rectangle>
    </Container>
}

export default PDF