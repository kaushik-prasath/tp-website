import { Container, ModulesContainer } from './index.styled'
import Carousel from '../../../../carousel'

const Modules = () => {
    return <Container>
        <h1>Learning with TinyPal is fun!</h1>

        <ModulesContainer>
            <Carousel />
        </ModulesContainer>
    </Container>
}

export default Modules 