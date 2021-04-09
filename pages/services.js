import Layout from '../components/Layout';
import RRSS from '../components/RRSS';

import { motion } from 'framer-motion';

const Services = () => (
    <motion.nav>
        <Layout>
            <div className="services__container">
                <h1 className="services__title">Sobre mi</h1>
            </div>
            <RRSS/>
        </Layout>
    </motion.nav>
)

export default Services;