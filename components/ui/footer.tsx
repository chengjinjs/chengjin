'use client';

import {
    Flex,
    Icon,
    Text,
    HStack
} from "@chakra-ui/react";
import { Copyright } from "@phosphor-icons/react";

export default function Footer() {
    return(
        <Flex
            as={'footer'}
            maxW="5xl"
            margin="auto"
            flexGrow="0"
        >
            <Flex          
                minH={'60px'}
                py={{ base: 2 }}
                // px={{ base: 4 }}
                w="full"
            >
                <HStack gap="0.5" color="fg.subtle" textStyle="sm">
                    <Icon as={Copyright} />
                    2025 Julian Sy
                </HStack>
            </Flex>
        </Flex>
    )
}