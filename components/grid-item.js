import NextLink from 'next/link'
import Image from 'next/legacy/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
          object-fit: cover;
        }
        
      `}
  />
)

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={150}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay as={NextLink} href={href} target="_blank">
        <Text mt={2}> {title} </Text>
      </LinkOverlay>
      <Text fontSize={14}> {children} </Text>
    </LinkBox>
  </Box>
)
export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox as="article" cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        width={200}
        height={150}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay as={NextLink} href={`/projects/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
