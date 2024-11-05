import { Container, ContentContainer, ContentBox, HeadingWrapper } from "./index.styled"

const Guarantee = () => {
    return <Container>
        <h1>Our Parent Satisfaction Gaurantee</h1>

        <ContentContainer>
            <ContentBox>
                <HeadingWrapper>
                    <h2>Only the Most Practical & Impactful Insights</h2>
                </HeadingWrapper>
                <p>We focus on delivering the most effective advice cutting through the clutter to support your parenting journey – not just with theories, but with heart</p>
            </ContentBox>

            <ContentBox>
                <HeadingWrapper>
                    <h2>Digestible Content</h2>
                </HeadingWrapper>
                <p>Designed to be digestible and engaging, making the journey fun and easy.</p>
            </ContentBox>

            <ContentBox>
                <HeadingWrapper>
                    <h2>Time Efficiency</h2>
                </HeadingWrapper>
                <p>Spend just two minutes per day with TinyPal—only a fraction of the time you’d spend reading the newspaper</p>
            </ContentBox>

            <ContentBox>
                <HeadingWrapper>
                    <h2>Money-Back Guarantee</h2>
                </HeadingWrapper>
                <p>Full refund, no questions asked; only feedback so we can serve you better</p>
            </ContentBox>
        </ContentContainer>
    </Container>
}

export default Guarantee