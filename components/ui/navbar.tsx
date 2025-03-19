'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Stack,
  Collapsible,
  Icon,
  Link,
  Popover,
  Portal,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useColorModeValue, ColorModeButton } from "@/components/ui/color-mode";
import {
    Hamburger,
    X,
    CaretDown,
    CaretRight
} from '@phosphor-icons/react';


export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <X w={3} h={3} /> : <Hamburger w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Heading
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            color={useColorModeValue('gray.800', 'white')}>
            <Link href="/" colorPalette='purple'>chengj.in</Link>
          </Heading>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spaceX={6}
        >
          <ColorModeButton />
        </Stack>
      </Flex>

      <Collapsible.Root in={isOpen}> {/* animateOpacity? */}
        <MobileNav />
      </Collapsible.Root>
    </Box>
  )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spaceX={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
            <Popover.Root positioning={{ placement: "bottom-start" }}>
                <Popover.Trigger asChild>
                    <Box
                        as="a"
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={'medium'}
                        textTransform={'lowercase'}
                        letterSpacing={'wide'}
                        color={linkColor}
                        _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                        }}>
                        {navItem.label}
                    </Box>
                </Popover.Trigger>
                {navItem.children && (
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content
                            border={0}
                            boxShadow={'xl'}
                            bg={popoverContentBgColor}
                            p={4}
                            rounded={'xl'}
                            minW={'sm'}
                        >
                          <Popover.Arrow />
                          <Popover.Body>
                              <Stack>
                              {navItem.children?.map((child) => (
                                  <DesktopSubNav key={child.label} {...child} />
                              ))}
                              </Stack>
                          </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
                )}
            </Popover.Root>

        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      className='group'
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'purple.subtle' }}> {/* useColorModeValue('pink.50', 'gray.900') */}
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Heading
            size="md"
            transition={'all .3s ease'}
            _groupHover={{ color: 'purple.solid' }}
            >
            {label}
          </Heading>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-30px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'purple.solid'} w={5} h={5} as={CaretRight} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          >
            <CaretDown />
        </Icon>
        )}
      </Box>

      <Collapsible.Root in={isOpen} style={{ marginTop: '0!important' }}> // animateOpacity?
        <Collapsible.Content>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Case Studies',
    children: [
      {
        label: 'Unemployment Redesigned',
        subLabel: 'Simplying the UX for California\'s online unemployment claim filing process',
        href: '/unemployment',
      },
      {
        label: 'Timetabus',
        subLabel: 'Reiterating the design of a mobile transit tracking app from research to branding',
        href: '/timetabus',
      },
    ],
  },
  {
    label: 'Coding',
    children: [
      {
        label: 're_spring',
        subLabel: 'A vanilla JavaScript web app for archiving Q&A sites from a JSON data backup',
        href: '/re_spring',
      },
    ],
  },
  {
    label: 'CV',
    href: '/cv',
  },
]