'use client';

import {
    Box,
    Icon,
    Highlight,
    Heading,
    Stack,
    StackSeparator,
    HStack,
    List,
    Mark,
    Text,
    Link
} from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip";
import {
    HandWaving,
    MapPin,
    ArrowRight,
    Asterisk,
    ArrowSquareOut
} from "@phosphor-icons/react"
import { SiPython, SiRenpy } from "react-icons/si";

export default function Page () {
    return (
        <Stack gap="12" separator={<StackSeparator />}>
            <Box>
                <Heading size="4xl" mb="6">Profile</Heading>
                <List.Root gap="1" variant="plain" align="center">
                    <List.Item>
                        <List.Indicator asChild color="blue.solid">
                            <HandWaving />
                        </List.Indicator>
                        <Highlight
                            query={["(he/him)"]}
                            styles={{ pl: "1.5", color: "fg.subtle", fontWeight: "light" }}
                        >
                        Julian Sy (he/him)
                        </Highlight>
                    </List.Item>
                    <List.Item>
                        <List.Indicator asChild color="blue.solid">
                            <MapPin />
                        </List.Indicator>
                        <Tooltip 
                            showArrow
                            content="Portland, OR"
                            openDelay={100}
                            closeDelay={100}
                            positioning={{ placement: "top" }}
                            contentProps={{ css: { "--tooltip-bg": "blue" }}}
                        >
                            <Mark variant="plain" textDecoration="underline" textDecorationColor="gray.emphasized" textUnderlineOffset="4px">PDX</Mark>
                        </Tooltip>
                        <Icon mx="2" as={ArrowRight} />
                        <Tooltip 
                            showArrow
                            content="San José, CA"
                            openDelay={100}
                            closeDelay={100}
                            positioning={{ placement: "top" }}
                            contentProps={{ css: { "--tooltip-bg": "blue" }}}
                        >
                            <Mark variant="plain" textDecoration="underline" textDecorationColor="gray.emphasized" textUnderlineOffset="4px">SJC</Mark>
                        </Tooltip>
                    </List.Item>
                </List.Root>
            </Box>
            <Box>
                <Heading size="4xl" mb="6">Skills</Heading>
            </Box>
            <Box>
                <Heading size="4xl" mb="6">Experience</Heading>
                
                <Stack gap="6" separator={<StackSeparator />}>                   
                    <Stack gap="3" maxW="2xl">
                        <Heading size="2xl">User Experience</Heading>
                        <Stack gap="0.5">
                            <HStack separator={<StackSeparator />}>
                                <Heading size="md">Western Governors University</Heading>
                                <Text textStyle="sm" fontWeight="semibold">BS UX Design</Text>
                                {/* <Text textStyle="sm">Specialization in Visual Design</Text> */}
                                <Text textStyle="sm" fontWeight="light" color="fg.subtle">2024 -</Text>
                            </HStack>
                            {/* <Text textStyle="sm">Acquired experience in user research, information architecture, branding, and user testing through solo and team clients, with some based on briefs and some working directly with a client.</Text> */}
                        </Stack>
                        <Stack gap="0.5">
                            <HStack separator={<StackSeparator />}>
                                <Heading size="md">Out in Tech</Heading>
                                <Text textStyle="sm" fontWeight="semibold">OiTU Youth Mentee</Text>
                                {/* <Text textStyle="sm">Specialization in Visual Design</Text> */}
                                <Text textStyle="sm" fontWeight="light" color="fg.subtle">2021</Text>
                            </HStack>
                            <Text textStyle="sm">Studied under an experienced UX designer for 8 weeks to develop technical and professional skills through project-based work. Focused on developing skills in Figma and working within constraints</Text>
                        </Stack>
                        <Stack gap="0.5">
                            <HStack separator={<StackSeparator />}>
                                <Heading size="md">Thinkful</Heading>
                                <Text textStyle="sm" fontWeight="semibold">Certificate in UX/UI Design</Text>
                                <Text textStyle="sm">Specialization in Visual Design</Text>
                                <Text textStyle="sm" fontWeight="light" color="fg.subtle">2020</Text>
                            </HStack>
                            <Text textStyle="sm">Acquired individual and team experience in a six-month program in user research, information architecture, branding, and user testing through a mix of brief- and client-based work</Text>
                        </Stack>
                    </Stack>
                
                    <Stack gap="3" maxW="2xl">
                        <Stack spaceY="-0.75rem">
                            <Heading size="2xl">Indie Game Dev</Heading>
                            <HStack gap="0.5" textStyle="xs" color="fg.subtle">
                                <Asterisk />
                                <Text>credited as αrcsine</Text>
                            </HStack>
                        </Stack>
                        <Stack gap="0.5">
                            <HStack separator={<StackSeparator />}>
                                <Link
                                    variant="underline"
                                    target="_blank"
                                    href="https://store.steampowered.com/app/1683800/Robot_Daycare/"
                                >
                                    <Heading size="md">Robot Daycare</Heading> 
                                    <Icon as={ArrowSquareOut} />
                                </Link>
                                <Text textStyle="sm" fontWeight="semibold">Writing</Text>
                                <Text textStyle="sm" fontWeight="light" color="fg.subtle">2021</Text>
                            </HStack>
                            {/* <Text textStyle="sm">Horror-comedy visual novel originally written for <Link href="https://lemmasoft.renai.us/forums/viewtopic.php?t=54703" variant="underline" target="_blank">NaNoRenO 2019 <Icon as={ArrowSquareOut} /></Link></Text> */}
                        </Stack>
                        <Stack gap="0.5">
                            <HStack separator={<StackSeparator />}>
                                <Link
                                    variant="underline"
                                    target="_blank"
                                    href="https://arcsine.itch.io/root-words"
                                >
                                    <Heading size="md">Root Words</Heading> 
                                    <Icon as={ArrowSquareOut} />
                                </Link>
                                <Text textStyle="sm" fontWeight="semibold">Programming</Text>
                                <Text textStyle="sm"><Icon as={SiPython} /> + Ren'Py</Text>
                                <Text textStyle="sm" fontWeight="light" color="fg.subtle">2020</Text>
                            </HStack>
                            <Text textStyle="xs"><Highlight
                                query={["3rd", "6th"]}
                                styles={{ px: "0.5", bg: "yellow.subtle", color: "yellow.fg", fontFamily: "heading", fontWeight: "semibold" }}
                            >
                                Ranked 3rd for Originality and 6th Overall</Highlight> in the <Link href="https://itch.io/jam/design-buddies-game-jam" variant="underline" target="_blank">Design Buddies Game Jam <Icon as={ArrowSquareOut} /></Link>
                            </Text>
                        </Stack>
                        <Stack gap="0.5">
                            <HStack separator={<StackSeparator />}>
                                <Link
                                    variant="underline"
                                    target="_blank"
                                    href="https://infinitestars.itch.io/game"
                                >
                                    <Heading size="md">Infinite Stars</Heading> 
                                    <Icon as={ArrowSquareOut} />
                                </Link>
                                <Text textStyle="sm" fontWeight="semibold">Logo Design</Text>
                                <Text textStyle="sm" fontWeight="light" color="fg.subtle">2020</Text>
                            </HStack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}