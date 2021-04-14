import Link from "next/link";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, .023, 0.96]};

export default function Salsayzumba() {
    return (
        <Layout>
                <motion.div className= 'product_container'>
                    <Link href="/services">
                        <a>
                            <motion.img
                                className="product_image"
                                src="/salsa.jpg"
                                initial={{scale: 0, x: -2000}}
                                animate={{scale: 1, transition: transition, x: 0}}
                                />
                        </a>
                    </Link>
                    <div className="product_container-right">
                        <motion.h1 className="product_title">Salsa y Zumba</motion.h1>
                        <motion.p className="product_text"
                        initial={{scale: 0}}
                        animate={{transition: transition, scale: 1}}>Fue a los 24 años en España, Alicante, que comencé a bailar Salsa Caleña a nivel profesional con el grupo Sabor Dinámico , muy reconocido a nivel mundial... y ZUMBA es una disciplina que combina los ritmos latinos y el fitness, y que me ayuda a conectar y hacer conectar a personas que quizás nunca han bailado, con la música y sus cuerpos a través de la danza.</motion.p>
                    </div>
                </motion.div>
        </Layout>
    )
}
