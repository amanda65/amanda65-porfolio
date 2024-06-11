import {
  Container,
  Button,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('blue.50', 'whiteAlpha.300')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a recent new graduate looking to start my early career
          within tech!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Amanda Nguyen
            </Heading>
            <p>Aspiring Software Developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor={useColorModeValue('blue.100', 'whiteAlpha.900')}
              borderWidth={4}
              borderStyle="solid"
              maxWidth="200px"
              display="inline-block"
              borderRadius="full"
              src="/images/amanda.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Based in Seattle, I graduated from University of Washington with a
            Bachelor's in Computer Science. As a full-stack developer, I am
            passionate about problem-solving and working with data.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('blue.100', 'blue.700')}
              >
                My Porfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Seattle, Washington
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Interned as a full-stack developer for Exchvnge, a start up company,
            between March-June.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Completed Bachelor's program majoring in Computer Science from
            University of Washington in June.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Technical Skills
          </Heading>
          <BioSection>
            <BioYear>Languages:</BioYear>
            Java, JavaScript, TypeScript, Python, SQL, HTML/CSS
          </BioSection>
          <BioSection>
            <BioYear>Frameworks/Libraries:</BioYear>
            React, Next.js, Express.js, JUnit, Swing, Node.js
          </BioSection>
          <BioSection>
            <BioYear>Tools & Platforms:</BioYear>
            MySQL, MongoDB, GitHub, AWS EC2, S3, Lamba, IntelliJ, VS Code,
            Ubuntu, Swagger, Postman
          </BioSection>
          <BioSection>
            <BioYear>Others:</BioYear>
            OOP, Design Patterns, SOLID, Debugging, Agile (Scrum), RESTful APIs
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>Painting, Pottery, Graphic Designing, Music</Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Based On
          </Heading>
          <NextLink href="https://www.craftz.dog/">Takuya Matsuyama</NextLink>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
