import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import { Global } from '@emotion/react'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/projects">
      Projects
    </Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectImageStyle = () => (
  <Global
    styles={`
          .scaled-icon {
            align: center;
            max-width:200px;
            height: auto;
            max-height:500px;
        
        }
      `}
  />
)

export const ProjectImage = ({ src, alt, className }) => (
  <>
    <p> {alt} </p>
    <br />
    <Image
      borderRadius="lg"
      w="full"
      src={src}
      alt={alt}
      mb={4}
      className={className}
    />
  </>
)
export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
