import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbFocusNook from '../public/images/focusnook/thumbFocusNook.png'
import thumbMoodBlooms from '../public/images/bloommoods/thumbMoodBlooms.png'
import thumbDisneyTrivia from '../public/images/disneytrivia/thumbDisneyTrivia.png'

const Projects = () => {
  return (
    <Container maxW="container.md">
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="focusnook"
            title="FocusNook"
            thumbnail={thumbFocusNook}
          >
            FocusNook is a project management tool with unique custom
            personalization designed to enhance focus and productivity.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="bloommoods"
            title="BloomMoods"
            thumbnail={thumbMoodBlooms}
          >
            BloomMoods is an emotional well-being app that combines
            self-reflection with nurturing virtual plants.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="disneytrivia"
            title="Disney Trivia Maze"
            thumbnail={thumbDisneyTrivia}
          >
            Trivia game created in Java that tests your knowledge about Disney
            characters.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}
export default Projects
