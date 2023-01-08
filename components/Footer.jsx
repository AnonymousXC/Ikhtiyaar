import {
    Flex,
    Text,
    Link,
    InputGroup,
    Input,
    Button,
    InputRightElement,
    useMediaQuery,
} from '@chakra-ui/react';
import { courgette } from '../fonts/font'
import NextLink from 'next/link';

function Footer() {
    const [ isMobile ] = useMediaQuery('(max-width: 830px)', {ssr: true})
    if(isMobile === false)
        return <FooterDesktop />
    else
        return <FooterMobile />
}

function FooterDesktop() {
    const [ changeFooter870 ] = useMediaQuery('(max-width: 900px)', {ssr: true})
    return (
        <Flex 
        h={'370px'}
        backgroundColor={'#0B0706'}
        position={'relative'}
        color={'#fff'}
        alignItems={'flex-start'}
        justifyContent={'space-around'}
        pt={'80px'}
        className={'footer'}
        flexWrap={'wrap'}>
            <Flex gap={0.5} alignItems={'center'}>
                <Text className={courgette.className} color='#fff' fontSize={'1.8rem'}>i</Text> 
                <Text color='#fff' fontSize={'1.8rem'} fontWeight={'bold'}>ktayaar</Text>
            </Flex>
            <Flex gap={'60px'}>
                <Flex direction={'column'} h={'100%'} gap={'24px'}>
                    <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{}} fontWeight={'medium'} fontSize={'1rem'}>
                            Home
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            About Us
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            What we do
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Media
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Contact
                        </Link>
                </Flex>
                <Flex direction={'column'} h={'100%'} gap={'24px'}>
                    <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{}} fontWeight={'medium'} fontSize={'1rem'}>
                            More
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Project
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Events
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Donate
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Bold
                        </Link>
                </Flex>
                <Flex direction={'column'} h={'100%'} gap={'24px'}>
                    <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{}} fontWeight={'medium'} fontSize={'1rem'}>
                            Connect
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Facebook
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Instagram
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Twitter
                        </Link>
                        <Link as={NextLink} href={'/'} 
                        color='#fff' _hover={{color: 'rgba(255,255,255,0.8)'}} fontWeight={'normal'} fontSize={'0.875rem'}>
                            Linkedin
                        </Link>
                </Flex>
            </Flex>
            <Flex direction={'column'} gap={'35px'} w={changeFooter870 === true ? '300px' : 'initial'} h={'204px'} justifyContent={'space-between'}>
                <Text fontWeight={'bold'} fontSize={changeFooter870 === true ? '2rem' : '2.3rem'} maxW={'380px'}>Subscribe to get latest updates</Text>
                <InputGroup>
                    <Input className={'email-footer'} h={changeFooter870 === true ? '45px' : '55px'} border={'none'} outline={'1px solid rgba(235, 240, 249, 0.3)'} rounded={'4px'} color={'#EBF0F9'} placeholder={'Your email'} type={'email'} />
                    <InputRightElement width={'100px'} h={changeFooter870 === true ? '45px' : '55px'} rounded={0}>
                        <Button h={'100%'} color={'#1D2130'} fontWeight={'normal'} roundedRight={'4px'} roundedLeft={'0px'} _hover={{backgroundColor: '#1D2130', color: '#fff' }} zIndex={5}>Subscribe</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Flex>
    )
}


function FooterMobile() {
    return (
        <Flex 
        h={'370px'}
        backgroundColor={'#0B0706'}
        position={'relative'}
        color={'#fff'}
        pt={'80px'}
        flexWrap={'wrap'}
        px={'5vw'}
        className={'footer'}>
             <Text fontWeight={'bold'} fontSize={'2.3rem'} maxW={'380px'}>Subscribe to get latest updates</Text>
                <InputGroup>
                    <Input className={'email-footer'} border={'none'} outline={'1px solid rgba(235, 240, 249, 0.3)'} rounded={'4px'} color={'#EBF0F9'} placeholder={'Your email'} type={'email'} />
                    <InputRightElement width={'100px'} rounded={0}>
                        <Button h={'100%'} color={'#1D2130'} fontWeight={'normal'} roundedRight={'4px'} roundedLeft={'0px'} _hover={{backgroundColor: '#1D2130', color: '#fff' }} zIndex={5}>Subscribe</Button>
                    </InputRightElement>
                </InputGroup>
        </Flex>
    )
}


export default Footer;