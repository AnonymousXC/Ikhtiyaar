import {
    Flex,
    Text,
    Link,
    Button,
    useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react'
import { courgette } from '../fonts/font.js';
import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft';
import { Close } from '@styled-icons/ionicons-solid/Close'

function NavBar() {
    const [ isMobile ] = useMediaQuery('(max-width: 830px)', {ssr: true})
    if(isMobile === false)
        return <NavBarDesktop />
    else
        return <NavBarMobile />
}


function NavBarDesktop() {
    return (
        <Flex
        w={'100%'}
        h={'67px'}
        position='fixed'
        top={'0px'}
        alignItems={'center'}
        justifyContent={'space-around'}
        backgroundColor={'#fff'}
        className={'nav-bar-desktop'}
        zIndex={1000}>
            <Flex gap={0.5} alignItems={'center'}>
                <Text className={courgette.className} color='#000' fontSize={'1.6rem'}>i</Text> 
                <Text color='#000' fontSize={'1.6rem'} fontWeight={'bold'}>ktayaar</Text>
            </Flex>
            <Flex gap={'2.2rem'} alignItems={'center'}>
                <Link as={NextLink} href={'/'} 
                color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'0.9rem'}>
                    Home
                </Link>
                <Link as={NextLink} href={'/'} 
                color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'0.9rem'}>
                    About Us
                </Link>
                <Link as={NextLink} href={'/'} 
                color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'0.9rem'}>
                    What we do
                </Link>
                <Link as={NextLink} href={'/'} 
                color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'0.9rem'}>
                    Media
                </Link>
                <Link as={NextLink} href={'/'} 
                color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'0.9rem'}>
                    Contact
                </Link>
            </Flex>
            <Button w={'100px'} variant={'unstyled'}
            fontWeight={'normal'}
            h={'35px'}
            backgroundColor='#1D2130'
            rounded={'4px'}
            color={'#fff'} >Donate</Button>
        </Flex>
    )
}

function NavBarMobile() {

    const [ isMenuOpen, setOpenMenu ] = useState(false)

    return (
        <>
            <Flex
            w={'100%'}
            h={'67px'}
            position='fixed'
            top={'0px'}
            alignItems={'center'}
            justifyContent={'space-between'}
            backgroundColor={'#fff'}
            className={'nav-bar-mobile'}
            zIndex={1000}>
                <Button variant={'unstyled'} ml={4}
                onClick={() => {
                    setOpenMenu(!isMenuOpen)
                }}>
                    {isMenuOpen === true ? <Close /> : <MenuAltLeft />}
                </Button>
                <Flex gap={0.5} alignItems={'center'}>
                    <Text className={courgette.className} color='#000' fontSize={'1.6rem'}>i</Text> 
                    <Text color='#000' fontSize={'1.6rem'} fontWeight={'bold'}>ktayaar</Text>
                </Flex>
                <Button variant={'unstyled'} 
                mr={4}
                paddingLeft={4}
                paddingRight={4}
                rounded={'4px'}
                fontWeight={'normal'}
                backgroundColor={'#1D2130'}
                color={'#fff'}>
                    Donate
                </Button>
            </Flex>
            <Flex 
            w={'100vw'}
            maxW={'360px'}
            h={'calc(var(--height) - 67px)'}
            top={'67px'}
            position={'fixed'}
            backgroundColor={'#fff'}
            left={isMenuOpen === true ? '0px' : '-360px'}
            className={'nav-bar-mobile-menu'}
            zIndex={100}
            pt={'20px'}
            overflow={'auto'}
            pl={'20px'}
            direction={'column'}
            transition={'all 500ms'}>
                <Text fontWeight={'bold'} fontSize={'1.05rem'}>Know more about us</Text>
                <Flex gap={'10px'} direction={'column'} pl={'14px'} mb={'10px'} mt={'2px'}>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Home
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        About Us
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        What we do
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Media
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Contact
                    </Link>
                </Flex>
                <Text fontWeight={'bold'} fontSize={'1.05rem'}>Connect</Text>
                <Flex gap={'10px'} direction={'column'} pl={'14px'} mb={'10px'} mt={'2px'}>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Facebook
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Instagram
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Twitter
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Linkedin
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Youtube
                    </Link>
                </Flex>
                <Text fontWeight={'bold'} fontSize={'1.05rem'}>More</Text>
                <Flex  gap={'10px'} direction={'column'} pl={'14px'} mt={'2px'} mb={'10px'} >
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Projects
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Events
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Donate
                    </Link>
                    <Link as={NextLink} href={'/'} 
                    color='#525560' _hover={{color: '#0B0706'}} fontWeight={'medium'} fontSize={'1rem'}>
                        Blog
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar