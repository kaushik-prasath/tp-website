import { Conatiner, TopHalf, TopHalfContentContainer, TopHalfLeftContainer, TopHalfRightContainer, BottomHalf } from './index.styled'

import data from './data.json'
import Carousel from './gpt';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
  }

const SignatureModule = () => {
    return <Conatiner>
        <TopHalf>
            <h1>Our Signature Modules</h1>

            <TopHalfContentContainer>
                <TopHalfLeftContainer>

                </TopHalfLeftContainer>

                <TopHalfRightContainer></TopHalfRightContainer>
            </TopHalfContentContainer>
        </TopHalf>

        <BottomHalf>
            <Carousel />
            {/* <StyledSlider {...settings}>
                {data.map((module) => {
                    return <ReviewCard>
                        <p>{module.review}</p>
                    </ReviewCard>
                })}
            </StyledSlider> */}
        </BottomHalf>
    </Conatiner>
}

export default SignatureModule