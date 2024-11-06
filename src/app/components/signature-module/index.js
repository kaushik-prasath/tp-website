import { useState } from 'react'
import Image from 'next/image'

import { Conatiner, TopHalf, TopHalfContentContainer, TopHalfLeftContainer, TopHalfRightWrapper, TopHalfRightContainer, BottomHalf, CarouselWrapper, ReviewCard, ReviewContent, ContentContainer, PaginationContainer, PrevBtn, NextBtn, QuoteContainer } from './index.styled'

import data from './data.json'
import TextSlider from './textslider'

const getPosition = (index, currentIndex, length) => {
    if (index === currentIndex) return "center"
    if (index === (currentIndex - 1 + length) % length) return "left"
    if (index === (currentIndex + 1) % length) return "right"
    return "hidden"
}

const SignatureModule = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [animate, setAnimate] = useState(true)

    const nextSlide = () => {
        setAnimate(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)

        setTimeout(() => {
            setAnimate(true)
        }, 500)
    }

    const prevSlide = () => {
        setAnimate(false)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length)

        setTimeout(() => {
            setAnimate(true)
        }, 500)
    }

    return <Conatiner>
        <TopHalf>
            <h1>Our Signature Modules</h1>

            <TopHalfContentContainer>
                <TopHalfLeftContainer>
                </TopHalfLeftContainer>

                <TopHalfRightWrapper>
                    <TopHalfRightContainer>
                        <ContentContainer animate={animate}>
                            <h2>{data[currentIndex].title}</h2>
                            <h3>{data[currentIndex].question}</h3>
                            <p>{data[currentIndex].answer}</p>

                            <button>Free Self Assesment</button>
                        </ContentContainer>
                    </TopHalfRightContainer>

                    <PaginationContainer>
                            <PrevBtn onClick={prevSlide}>
                                <Image
                                    src="/lesser.svg"
                                    alt="prev icon"
                                    width={21}
                                    height={21}
                                />
                            </PrevBtn>
                            <p>1 / 5</p>
                            <NextBtn onClick={nextSlide}>
                                <Image
                                    src="/greater.svg"
                                    alt="next icon"
                                    width={21}
                                    height={21}
                                />
                            </NextBtn>
                    </PaginationContainer>
                </TopHalfRightWrapper>
            </TopHalfContentContainer>
        </TopHalf>

        <BottomHalf>
            <CarouselWrapper>
                {data.map((module, index) => {
                    const position = getPosition(index, currentIndex, data.length)

                    return <ReviewCard key={index} position={position}>
                        <QuoteContainer>
                            <Image
                                src="/quote.svg"
                                alt="quote icon"
                                width={132}
                                height={121}
                            />
                        </QuoteContainer>
                        <ReviewContent>
                            <p className='title'>Our happy customer say:</p>
                            <p className='content'>{module.review}</p>
                            <p className='author' >{module.reviewedBy}</p>
                        </ReviewContent>
                    </ReviewCard>
                })}
            </CarouselWrapper>
                
        </BottomHalf>
    </Conatiner>
}

export default SignatureModule