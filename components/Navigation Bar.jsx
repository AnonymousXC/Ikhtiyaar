import {
    Flex,
    Text,
    Link,
    Button,
    useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { courgette } from '../fonts/font.js';
import { Menu } from '@styled-icons/entypo/Menu';
import { DonateBlood } from '@styled-icons/boxicons-solid/DonateBlood';

function NavBar() {
    const [ isMobile ] = useMediaQuery('(max-width: 720px)', { ssr: false })
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
    return (
        <Flex
        w={'100%'}
        h={'67px'}
        position='fixed'
        alignItems={'center'}
        justifyContent={'space-between'}
        backgroundColor={'#fff'}
        className={'nav-bar-mobile'}
        zIndex={1000}>
            <Button variant={'unstyled'} ml={4}>
                <Menu />
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
    )
}

export default NavBar