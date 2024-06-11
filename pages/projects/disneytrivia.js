import { Container, Box, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Heading } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'

const Project = () => {
  return (
    <Layout title="DisneyTrivia">
      <Container maxW="container.md">
        <Box display="flex" justifyContent="center">
          <ProjectImage
            src="/images/disneytrivia/mike_stand.png"
            className="scaled-icon"
          />
        </Box>
        <Title>
          Disney Trivia <Badge>2023</Badge>
        </Title>
        <P>
          Welcome to the Disney Trivia Maze! 🏰🎉 In this delightful maze
          adventure, you'll embark on a journey through the enchanting worlds of
          Disney, Marvel, Pixar, and Star Wars. Test your knowledge and explore
          iconic characters, magical places, and epic stories as you make your
          way to Boo's door to claim victory!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta> Stack </Meta>
            Java, Java Swing, SQLite, IntelliJ
          </ListItem>
          <ListItem>
            <Meta> GitHub </Meta>
            <Link href="https://github.com/rainiechi/Disney-Trivia-Maze">
              Source Code <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta> Installer </Meta>
            <Link href="https://drive.google.com/file/d/1LxMVY_hhhqirAfbhxXK0XHvXCC31JAEG/view?usp=sharing">
              Download game <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Images
          </Heading>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-load.png"
            alt="Home screen"
          ></ProjectImage>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-instruction.png"
            alt="Game instructions upon new game"
          ></ProjectImage>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-door.png"
            alt="Once player reaches a door, a random trivia question from database will be selected. If answer is correct the door will unlocked, otherwise it will lock and player will need to go through a different path"
          ></ProjectImage>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-chest.png"
            alt="Chests will be in select rooms, if player finds a chest they have a chance of getting a power up"
          ></ProjectImage>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-item.png"
            alt="If there is an item it will be shown upon opening the chest"
          ></ProjectImage>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-emptychest.png"
            alt="Chest is empty"
          ></ProjectImage>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-openedchest.png"
            alt="After a chest has been opened, it cannot be attempted again"
          ></ProjectImage>
          <ProjectImage
            src="/images/disneytrivia/disneytrivia-gameover.png"
            alt="Once players loses all 3 lives, it will be game over"
          ></ProjectImage>
        </Section>
      </Container>
    </Layout>
  )
}
export default Project
