import { Container, Row, GraphicContainer, ContentContainer } from "./index.styled"

const Features = () => {
    return <Container>
        <Row>
            <GraphicContainer>

            </GraphicContainer>
            <ContentContainer>
                <h2>Goal-oriented</h2>

                <p>We transform, not just inform. We offer personalized, goal- oriented fun learning modules that enable you to see measurable progress, quickly and efficiently. Start with a FREE self-assessment on where you stand today!</p>
            </ContentContainer>
        </Row>

        <Row>
            <ContentContainer>
                <h2>Modularized for lazer-sharp relevance</h2>

                <p>Essential parenting objectives are modularized to help you focus on specific areas of interest or need, ensuring that each learning experience is directly relevant and immediately applicable to you</p>
            </ContentContainer>

            <GraphicContainer>

            </GraphicContainer>
        </Row>

        <Row>
            <GraphicContainer>

            </GraphicContainer>
            <ContentContainer>
                <h2>Backed by research</h2>

                <p>All of our content is curated by experts and reviewed by an advisory board composed of experts in children's health and development.</p>
            </ContentContainer>
        </Row>
    </Container>
}

export default Features