'use client';

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  Highlight,
  Button,
  Icon,
  IconButton
} from "@chakra-ui/react"
import { HandPeace, PaperPlaneRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

export default function Page() {
  return (
    <Box fontSize="lg" pt="30vh" m="auto" maxW="2xl">
      <Stack
        spaceY="6"
      >
        <Heading size='5xl'>
          Hi, I'm Julian Sy <Icon as={HandPeace} /><br />
        </Heading>
        <Text>I'm a curious creative with a background in front-end development and illustration driven to learn how different people think (and think about how to make things work better for them)</Text>
        <Text><Highlight
          query={["remote", "SF Bay Area."]}
          styles={{ px: "1", bg: "purple.subtle", color: "purple.fg", fontFamily: "heading", fontWeight: "semibold" }}
        >
          Currently searching for remote or hybrid work in the SF Bay Area.
        </Highlight></Text>

        <HStack>
          <IconButton
            aria-label="GitHub"
            variant="surface"
            size="xl"
            colorPalette="cyan"
            asChild
          >
            <a href="https://github.com/chengjinjs"><GithubLogo /></a>
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            variant="surface"
            size="xl"
            colorPalette="blue"
            asChild
          >
            <a href="https://www.linkedin.com/in/juliancsy/"><LinkedinLogo /></a>
          </IconButton>
          <Button
            fontFamily="heading"
            colorPalette="purple"
            variant="surface"
            size="xl"
            asChild
          >
            <a href="mailto:js@chengj.in">email me <Icon as={PaperPlaneRight} /></a>
          </Button>
        </HStack>
        
      </Stack>
    </Box>
  )
}
