import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AnimateSharedLayout, motion } from 'framer-motion';
import '../components/scss/app.scss';



function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <meta name="description" content="Ana Luisa Vargas, simple web de presentacion."></meta>
                <link rel="icon" href="/logo.png"   />
                <title>Anysz</title>
            </Head>
            <AnimateSharedLayout >
                    <Component {...pageProps} />
            </AnimateSharedLayout>
        </>
    )
}


export default MyApp;