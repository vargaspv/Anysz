import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const RRSS = () => (
<>    
    <motion.div className="rrss"
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1 }}
    >
        <p>Podes contactarme en mis redes... </p>
        <ul>
            <motion.div 
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="rrss__container">
                <li>
                    <Link  href="https://www.instagram.com/anyluisavargas/">
                        <a target="_blank">Instagram</a>
                    </Link>
                </li>
                <Link href="https://www.instagram.com/anyluisavargas/">
                    <a target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="icon"></FontAwesomeIcon>
                    </a>
                </Link>
            </motion.div>
            <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="rrss__container"
            >
                <li>
                    <Link href="https://www.facebook.com/analuisa.vargas">
                        <a target="_blank">Facebook</a>
                    </Link>
                </li>
                <Link  href="https://www.facebook.com/analuisa.vargas">
                    <a target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
                    </a>
                </Link>
            </motion.div>
            
            <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .8 }}
            className="rrss__container"
            >
                <li>
                    <Link href="https://www.youtube.com/channel/UC3nvMwNxv0g2SX-Y1oIvtrA">
                        <a target="_blank">Youtube</a>
                    </Link>
                </li>
                <Link href="https://www.youtube.com/channel/UC3nvMwNxv0g2SX-Y1oIvtrA">
                    <a target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="icon"></FontAwesomeIcon>
                    </a>
                </Link>
            </motion.div>
        </ul>
    </motion.div>
</>
)

export default RRSS;