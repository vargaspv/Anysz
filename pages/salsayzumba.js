import Link from "next/link";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Salsayzumba() {
    return (
        <Layout>
            <motion.h1 
            className="product_title">Salsa y Zumba</motion.h1>
                <motion.div className= 'product_container'>
                    <Link href="/about">
                        <a>
                            <motion.img
                                className="product_image"
                                src="/salsa.jpg"
                                />
                        </a>
                    </Link>
                        <p className="product_text">Fue a los 24 años en España, Alicante, que comencé a bailar Salsa Caleña a nivel profesional con el grupo Sabor Dinámico , muy reconocido a nivel mundial... y ZUMBA es una disciplina que combina los ritmos latinos y el fitness, y que me ayuda a conectar y hacer conectar a personas que quizás nunca han bailado, con la música y sus cuerpos a través de la danza.</p>
                </motion.div>
        </Layout>
    )
}
