import Link from "next/link";
import Image from "next/image";
import Layout from '../components/Layout';
import RRSS from "../components/RRSS";
import { motion } from 'framer-motion';


// const transition = { duration: 0.6, ease: [0.43, 0.13, .023, 0.96]};

const About = props => {
    return (
        <Layout>
            <div className="services__container">
                <h2 className="services__title">En lo que puedo ayudarte...</h2>
                <div className= 'imgs-container'>
                        <Link href='/yoga'>    
                            <a>
                                <img
                                src="/yoga.jpg"
                                className="image"
                                />
                            </a>
                        </Link>
                        <Link href='/salsayzumba'>    
                            <a>
                                <motion.img
                                src="/salsa.jpg"
                                className="image"
                                />
                            </a>
                        </Link>
                        <Link href='/nuevoproyecto'>    
                            <a>
                                <motion.img
                                src="/zumba.jpg"
                                className="image"
                                href="../public/salsa.jpg"
                                />
                            </a>
                        </Link>
                </div>
            </div>
            <RRSS/>
        </Layout>
    )
};

export default About;





























// import Navbar from '../components/Navbar';
// import RRSS from '../components/RRSS';
// import Layout from '../components/Layout';

// import { motion } from 'framer-motion';
// import { Component } from 'react';


// const easing = [0.2, -0.05, 0.01, 0.99];
// const variants = {
//     hidden: {
//         opacity: 0,
//         y: -200
//     },
//     visible: {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: .1,
//             ease: easing
//         }
//     }
// };

// const About = props => (
   
//         <Layout>
            
//         </Layout>
// )

// export default About;