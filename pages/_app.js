import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AnimateSharedLayout, motion } from 'framer-motion';
import '../components/scss/app.scss';

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <meta name="description" content="Ana Luisa Vargas, simple web de presentacion."></meta>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1
                0, minimum-scale=1.0" />
                <meta charSet="utf-8"/>
                <meta name="keywords" content="clases de baile, zumba, bachata, yoga, barcelona, españa"/>
                <link rel="icon" href="/logo.png"   /> 
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        
                <title>Anysz</title>
            </Head>
            <AnimateSharedLayout >
                    <Component {...pageProps} />
            </AnimateSharedLayout>
        </>
    )
}


export default MyApp;