import React from 'react';
import Layout from '../components/Layout';
import RRSS from '../components/RRSS';

import { motion } from 'framer-motion';



const Index = () => (
            <Layout>
                <RRSS/>
                <div className="index__container">
                    <motion.div className="index__container-title"
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        >
                        <h1 className="index__title"> Anysz </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        >
                            <p>...transmitirte algo de paz mental y conexión con el propio ser...</p>
                    </motion.div>
                        <div className="index__container--bg"></div>
                        <img src="/img_07.jpg" className="index__img" />
                        
                </div>
            </Layout>
)

export default Index;