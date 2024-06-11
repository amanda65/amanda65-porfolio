import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Button,
  Icon,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button.js'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? '#DAE1EB' : undefined}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>

          <LinkItem
            href="https://www.linkedin.com/in/amanda-nguyen-176999217/"
            path={path}
          >
            <Button variant="ghost" leftIcon={<Icon as={IoLogoLinkedin} />}>
              LinkedIn
            </Button>
          </LinkItem>

          <LinkItem href="https://github.com/amanda65" path={path}>
            <Button variant="ghost" leftIcon={<Icon as={IoLogoGithub} />}>
              GitHub
            </Button>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}></Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
