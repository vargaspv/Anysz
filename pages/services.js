import Link from "next/link";
import Image from "next/image";
import Layout from '../components/Layout';
import RRSS from "../components/RRSS";
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const transition = { duration: 0.6, ease: [0.43, 0.13, .023, 0.96]};
//const color = rgb(73, 73, 73);

const About = props => {
    return (
        <>  
            <Navbar/>
            <div className="services__container">
                <h2 className="services__title">En lo que puedo ayudarte...</h2>
                <div className= 'imgs-container'>
                        <Link href='/yoga' >    
                            <a>
                                <motion.img
                                src="/yoga.jpg"
                                className="image"
                                whileHover={{scale: 1}}
                                animate={{scale: 1.1, transition: transition}}
                                />
                            </a>
                        </Link>
                        <Link href='/salsayzumba'>    
                            <a>
                                <motion.img
                                src="/salsa.jpg"
                                className="image"
                                whileHover={{scale: 1}}
                                animate={{scale: 1.1, transition: transition}}
                                />
                            </a>
                        </Link>
                        <Link href='/nuevoproyecto'>    
                            <a>
                                <motion.img
                                src="/newPro.jpg"
                                className="image"
                                whileHover={{scale: 1}}
                                animate={{scale: 1.1, transition: transition}}
                                />
                            </a>
                        </Link>
                </div>
            <RRSS className="rrss"/>
            <Footer className="footer"/>
            </div>
        </>
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