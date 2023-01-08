import {
    Flex,
    Box,
    Text,
    Button,
    useMediaQuery,
    Divider,
} from '@chakra-ui/react';
import { PlayCircleFill } from '@styled-icons/bootstrap/PlayCircleFill';
import Typewriter from 'typewriter-effect';


function HomeSection() {
    const [ isMobile ] = useMediaQuery('(max-width: 730px)', {ssr: true})
    const [ max900 ] = useMediaQuery('(max-width: 900px)', {ssr: true})
    const [ max700 ] = useMediaQuery('(max-width: 700px)', {ssr: true})
    return (
        <Box 
        pos={'relative'}
        marginTop={'67px'}
        h={'calc(100vh - 67px)'}
        backgroundImage={"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/Home BG.jpg')"}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        className={'home-desktop'}
        color={'#fff'}>
            <Flex w={max900 === true ? '90vw' : '50vw'} maxW={isMobile === true ? '100vw' : '650px'} position={'relative'} top={'7rem'} left={max900 === true ? '5vw' : '110px'} direction={'column'} gap={'40px'}>
                {/* <Text fontSize={isMobile === true ? '3rem' : '4rem'} fontWeight={'bold'} lineHeight={'120%'}>Inclusive care for children with special needs</Text> */}
                <Typewriter
                options={{ loop: true, cursor: '_' }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString('Inclusive care for children with special needs.')
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString('The generated Lorem Ipsum is therefore always.')
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString('It uses a dictionary of over 200 Latin words.')
                    .pauseFor(3000)
                    .deleteAll()
                    .start();
                }}
                />
                <Flex gap={'24px'}>
                    <Button variant={'unstyled'}
                    backgroundColor={'#fff'}
                    h={'40px'}
                    paddingLeft={4}
                    paddingRight={4}
                    rounded={'4px'}
                    color={'#1D2130'}
                    fontWeight={'medium'}
                    _hover={{
                        backgroundColor: '#1D2130',
                        color: '#fff'
                    }}>What we do</Button>
                    <Button variant={'unstyled'}
                    paddingLeft={4}
                    display={'inline-flex'}
                    alignItems={'center'}
                    gap={'8px'}
                    paddingRight={4}
                    fontWeight={'medium'}
                    _hover={{
                        color: 'rgba(255,255,255,0.9)'
                    }}><PlayCircleFill size={'28px'} /> Play Video</Button>
                </Flex>
            </Flex>
            <Flex pos={'absolute'} bottom={'2.5rem'} w={'90vw'} ml={'5vw'} display={max700 === true ? 'none' : 'flex'}
            justifyContent={'space-between'} alignItems={'center'} gap={'20px'}>
                <Text fontSize={'0.9rem'} fontWeight={'medium'} w={'fit-content'} display='ruby'>230 children under our care</Text>
                <Divider />
                <Text fontSize={'0.9rem'} fontWeight={'medium'} display='ruby'>58 donations collected</Text>
            </Flex>
        </Box>
    )
}

export default HomeSection;