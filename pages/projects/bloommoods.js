import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Heading } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'

const Project = () => {
  return (
    <Layout title="BloomMoods">
      <Container maxW="container.md">
        <Box display="flex" justifyContent="center">
          <ProjectImage
            src="/images/bloommoods/bloommoods-icon.png"
            className="scaled-icon"
          />
        </Box>
        <Title>
          BloomMoods <Badge>2024</Badge>
        </Title>
        <P>
          BloomMoods is an emotional well-being mobile app that combines
          self-reflection with nurturing virtual plants. Users log daily moods,
          contributing to their chosen plant&apos;s growth. With features like a Mood
          Journaling, Emotional Insights Reports, and User Account Management,
          users track their emotional journey and personalize their experience.
          With plants like Tranquil Tulip and Serenity Sunflower, users witness
          growth stages, fostering a sense of care and responsibility.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta> Stack </Meta>
            Java, MySQL, XML, AndroidStudio
          </ListItem>
          <ListItem>
            <Meta> GitHub </Meta>
            <Link href="https://github.com/Hossain2024/BloomMoods">
              Source Code <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Features
          </Heading>
          <Paragraph>
            <br />
            Feature 1: Emotion Log with Journaling
            <br />
            <br />
            Users start by selecting how they feel from a list of emotions:
            Happy, Tired, Upset, Sad, Neutral, Annoyed. After an emotion is
            selected, a text field allows for journal entry. The act of
            journaling is linked to watering the plant, symbolizing emotional
            nurturing and growth.
            <br />
            <br />
            Feature 2: Plant Growth & Care
            <br />
            <br />
            On sign-up, users choose a plant to grow. Each daily log contributes
            to the plant&apos;s health. The home screen displays the plant with a
            growth level bar indicating progress from 0 to 100%. The growth bar
            increases by a set amount for each daily log, encouraging consistent
            engagement.
            <br />
            <br />
            Feature 3: Mood Calendar
            <br />
            <br />
            A calendar view enables users to review past journal entries and
            mood selections. Each day on the calendar reflects the user&apos;s mood
            through color coding, allowing for easy retrospection.
            <br />
            <br />
            Feature 4: Emotional Insights Report
            <br />
            <br />
            A weekly report provides a visual breakdown of the user&apos;s logged
            emotions via a pie chart, offering insights into emotional patterns.
            Additional stats may include the most common emotion, total days
            logged, and streaks.
            <br />
            <br />
            Feature 5: User Account Management
            <br />
            <br />
            Users can update personal details and view a list of all plants they
            have successfully grown in the past, showcasing their journey and
            achievements.
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Images
          </Heading>
          <SimpleGrid columns={2} gap={6}>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-login.png"
                alt="Login page"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-home.png"
                alt="Home page"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-lockedplant.png"
                alt="Unlocked plants"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-water.png"
                alt="Water a plant"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-entry.png"
                alt="Entry logged"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-journal.png"
                alt="Journal page to view past entries"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-report.png"
                alt="Report page shows monthly moods logged"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-report2.png"
                alt="Continuation of report page"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-account.png"
                alt="Account page"
                className="scaled-image"
              ></ProjectImage>
            </div>
            <div>
              <ProjectImage
                src="/images/bloommoods/bloommoods-about.png"
                alt="About page will walk users through in detail."
                className="scaled-image"
              ></ProjectImage>
            </div>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
export default Project
