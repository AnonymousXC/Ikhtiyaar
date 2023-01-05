import {
    Flex,
    Box,
    Text,
    Button,
    useMediaQuery
} from '@chakra-ui/react';
import {PlayCircleFill} from '@styled-icons/bootstrap/PlayCircleFill'


function HomeSection() {
    const [ isMobile ] = useMediaQuery('(max-width: 720px)', { ssr: false })
    return (
        <Box 
        pos={'relative'}
        top={'67px'}
        h={'calc(100vh - 67px)'}
        backgroundImage={"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/Home BG.jpg')"}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        className={'home-desktop'}
        color={'#fff'}>
            <Flex w={isMobile === true ? '90vw' : '50vw'} maxW={isMobile === true ? '100vw' : '650px'} position={'relative'} top={'130px'} left={isMobile === true ? '5vw' : '110px'} direction={'column'} gap={'40px'}>
                <Text fontSize={isMobile === true ? '3rem' : '4rem'} fontWeight={'bold'} lineHeight={'120%'}>Inclusive care for children with special needs</Text>
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
        </Box>
    )
}

export default HomeSection;