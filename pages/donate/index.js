import dynamic from 'next/dynamic';
import Head from 'next/head'

const NavBarWithoutSSR = dynamic(() => import('../../components/Navigation Bar'), { ssr: false })

function Donate() {
    return (
        <>
            <Head>
                <title>Ikhtiyaar - Donate</title>
            </Head>
            <NavBarWithoutSSR />
        </>
    )
}

export default Donate;