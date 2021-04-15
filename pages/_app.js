import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AnimateSharedLayout, motion } from 'framer-motion';
import '../components/scss/app.scss';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above



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