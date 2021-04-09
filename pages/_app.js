import React from 'react';
import App from 'next/app';
import { AnimateSharedLayout, motion } from 'framer-motion';
import '../components/scss/app.scss';



function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <AnimateSharedLayout >
                    <Component {...pageProps} />
            </AnimateSharedLayout>
        </>
    )
}


export default MyApp;