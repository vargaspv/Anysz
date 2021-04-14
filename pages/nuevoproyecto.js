import Link from "next/link";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RRSS from "../components/RRSS";

const transition = { duration: 0.6, ease: [0.43, 0.13, .023, 0.96]};

export default function Nuevoproyecto() {
    return (
        <>
            <Navbar/>
            <motion.div className= 'product_container'>
                        <Link href="/services" className="product_container-left">
                            <a>
                                <motion.img
                                    className="product_image"
                                    src="/zumba.jpg"
                                    initial={{scale: 0, x: -2000}}
                                    animate={{scale: 1, transition: transition, x: 0}}
                                    />
                            </a>
                        </Link>
                    <div className="product_container-right">
                        <motion.h1
                            className="product_title">Nuevo Proyecto</motion.h1>
                        <motion.p className="product_text"
                        initial={{scale: 0}}
                        animate={{transition: transition, scale: 1}}
                        >Con el campeón mundial de taekwondo Gustavo Oyarzo hemos desarrollado el proyecto "Armonía" ; un gimnasio itinerante al aire libre que combina una disciplina fuerte y desendrenada como puede ser el Kick-boxing, Hit , Boxeo o Taekwondo con el YOGA para finalizar nuestras prácticas con paz mental y fisíca es decir en perfecta ARMOÍA con nuestro ser y entorno; para ver más y asistir a nuestro proyecto puedes contactarnos por instagram @Anyluisavargas <a target="_blank" href="https://www.instagram.com/gus_oyarzo/">@Gus_Oyarzo</a> <a href="https://www.instagram.com/goteambarcelona/" target="_blank">@goteambarcelona</a> y te resolveremos cualquier duda.</motion.p>
                    </div>
                    <Footer className="footer"/>
            </motion.div>
        </>
    )
}
