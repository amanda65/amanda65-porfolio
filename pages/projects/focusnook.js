import { Container, Box, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Heading } from '@chakra-ui/react'

const Project = () => {
  return (
    <Layout title="FocusNook">
      <Container maxW="container.md">
        <Box display="flex" justifyContent="center">
          <ProjectImage
            src="/images/focusnook/focusnook-logo.png"
            className="scaled-icon"
          />
        </Box>
        <Title>
          FocusNook <Badge>2023</Badge>
        </Title>
        <P>
          FocusNook is a web service application designed to boost productivity
          and focus through a unique and immersive approach. Unlike traditional
          task management tools, FocusNook stands out by allowing users to
          personalize their workspace with a variety of themes and ambient
          sounds, tailoring the experience to their individual preferences and
          creating an engaging environment conducive to concentration and task
          completion.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta> Stack </Meta>
            MongoDB, Express.js, React, Node.js
          </ListItem>
          <ListItem>
            <Meta> GitHub </Meta>
            <Link href="https://github.com/Younghyuuk/FocusNook">
              Source Code <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Images
          </Heading>
          <ProjectImage
            src="/images/focusnook/focusnook-login.png"
            alt="Login page"
          ></ProjectImage>
          <ProjectImage
            src="/images/focusnook/focusnook-register.png"
            alt="Register Page"
          ></ProjectImage>
          <ProjectImage
            src="/images/focusnook/focusnook-home.png"
            alt="Home page: Default theme will be shown if user is new, else it will show the user's last selected theme."
          ></ProjectImage>
          <ProjectImage
            src="/images/focusnook/focusnook-themes.png"
            alt="Themes to select from, each theme has a different ambient sound"
          ></ProjectImage>
          <ProjectImage
            src="/images/focusnook/focusnook-todo.png"
            alt="To-do List"
          ></ProjectImage>
          <ProjectImage
            src="/images/focusnook/focusnook-tasks.png"
            alt="Add a new task"
          ></ProjectImage>
          <ProjectImage
            src="/images/focusnook/focusnook-calendar.png"
            alt="Calendar to display tasks due on that day"
          ></ProjectImage>
          <ProjectImage
            src="/images/focusnook/focusnook-enter.png"
            alt="Enter Room will have a focus timer and shows tasks of the week. Users must select a task in order to start timer"
          ></ProjectImage>
        </Section>
      </Container>
    </Layout>
  )
}
export default Project
