import { Container, CardsContainer, Card } from './index.styled'

const HowItWorks = () => {
    return <Container>
        <h1>How does it work?</h1>

        <CardsContainer>
            <Card>
                <h2>Step 1</h2>
                <h3>Install TinyPal</h3>
                <p>Install TinyPal from the App Store or Google Play Store.</p>
            </Card>

            <Card>
                <h2>Step 2</h2>
                <h3>Explore a Signature Module</h3>
                <p>Experience one of our signature modules at no cost and see the difference it makes to your family experience</p> 
            </Card>

            <Card>
                <h2>Step 3</h2>
                <h3>Tailor Your Path</h3>
                <p>Customize your experience by selecting modules that resonate with your style and goals.</p> 
            </Card>

            <Card>
                <h2>Step 4</h2>
                <h3>Thrive as a parent</h3>
                <p>Enjoy a continuous stream of insights and support that empowers you on your personalized feed</p> 
            </Card>
        </CardsContainer>
    </Container>
}

export default HowItWorks