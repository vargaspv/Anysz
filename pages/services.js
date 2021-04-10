import Layout from '../components/Layout';
import RRSS from '../components/RRSS';

import { motion } from 'framer-motion';

const Services = () => (
    <motion.nav>
        <Layout>
            <div className="about__container">
                <h1 className="about__title">Sobre mi</h1>
                <div className="about_container--in">
                    <img className="about_image" src="/yoga_02.jpg"/> 
                    <p className="about_text">Mi experiencia con los Bailes Latinos comienza en mi infancia... en mi ciudad natal Comodoro Rivadavia, Chubut , Argentina...desde muy pequeñita con 8 años comencé a bailar en el Grupo de aerobica de competición de Sandra Varela, mi mentora y maestra de vida, en el cual recorriamos diferentes ritmos y disciplinas, Hip Hop, Funky , Ritmos Latinos, Step y Aeróbica de competición... fue a los 24 años en España, Alicante, que comencé a bailar Salsa Caleña a nivel profesional con el grupo Sabor Dinámico , muy reconocido a nivel mundial, después de este despegue en el mundo de la salsa me transladé a Milan , Italia, donde seguí bailando a nivel profesional con bailarines brillantes de reconocimiento internacional,  diferentes estilos de salsa, Los Angeles, y On2, Ladies Style y en diversos congresos de Salsa y Bachata. Toda mi trayectoria de Salsa la continué paralelamente al Fitness, con entrenos personales y clases dirigidas. He participado , creado y co-creado eventos de ZUMBA en diferentes países de Europa, agredeida por poder transmitir, la alegria y la conexión que nos aporta la danza a todos, sin distinguir géneros , razas, niveles de baile...ni nada... conexión con el propio SER...En la actualidad, paralela a mi trabajo en el club "Bonasport" uno de los clubs míticos ,más prestigiosos de Barcelona, ocupo mi tiempo libre en diferentes proyectos creativos , con la finalidad de hacer un bien mayor a la sociedad...</p>
                </div>
            </div>
            <RRSS/>
        </Layout>
    </motion.nav>
)

export default Services;