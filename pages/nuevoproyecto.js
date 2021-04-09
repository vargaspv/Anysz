import Link from "next/link";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Nuevoproyecto() {
    return (
        <Layout>
            <motion.h1 className="product_title">Nuevo Proyecto</motion.h1>
                <motion.div className= 'product_container'>
                    <Link href="/about">
                        <a >
                            <motion.img
                                className="product_image"
                                src="/zumba.jpg"
                                />
                        </a>
                    </Link>
                        <p className="product_text">Con el campeón mundial de taekwondo Gustavo Oyarzo hemos desarrollado el proyecto "Armonía" ; un gimnasio itinerante al aire libre que combina una disciplina fuerte y desendrenada como puede ser el Kick-boxing, Hit , Boxeo o Taekwondo con el YOGA para finalizar nuestras prácticas con paz mental y fisíca es decir en perfecta ARMOÍA con nuestro ser y entorno; para ver más y asistir a nuestro proyecto puedes contactarnos por instagram @Anyluisavargas <a target="_blank" href="https://www.instagram.com/gus_oyarzo/">@Gus_Oyarzo</a> <a href="https://www.instagram.com/goteambarcelona/" target="_blank">@goteambarcelona</a> y te resolveremos cualquier duda.</p>
                </motion.div>
        </Layout>
    )
}
