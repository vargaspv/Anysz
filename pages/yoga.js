import Link from "next/link";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const transition = { duration: 0.6, ease: [0.43, 0.13, .023, 0.96]};

export default function Yoga() {
    return (
        <Layout>
                <motion.div className= 'product_container'>
                    <Link href="/about">
                        <a>
                            <motion.img
                                className="product_image"
                                src="/yoga.jpg"
                                initial={{scale: 0, x: -2000}}
                                animate={{scale: 1, transition: transition, x: 0}}
                                />
                        </a>
                    </Link>
                    <div className="product_container-right">    
                        <motion.h1 className="product_title">Yoga</motion.h1>
                        <motion.p className="product_text"
                        initial={{scale: 0}}
                        animate={{transition: transition, scale: 1}}>En el año 2019 el universo confuyó para que hiciera ese tan soñado viaje a India... y alli partí en busqueda  de la sabiduria ancestral del Yoga...a sus ríces, sus inicios..a aprender con los verdaderos YOGUIS la  Filosofia del Yoga, Ayurveda, Hatha Yoga , Ashtanga Yoga, Yoga Nidra, anatomía del Yoga...para poder un día como hoy transmitirte algo de paz mental y conexión con el propio ser. ..tal como se me fue transmitida en su momento y en cada prática diaria a mí... en muestra de mi gratitud , a la Vida,  al Yoga y a mis Maestros de Rishikul Yogshala en RishiKesh, India. Espero poder ayudarte con mi Dharma, Gracias por leer esta expresión de mi humilde experiencia, Namasté.</motion.p>
                    </div>
            </motion.div>
        </Layout>
    )
}

