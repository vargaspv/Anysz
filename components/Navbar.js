import Link from 'next/link';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];
const variants = {
    hidden: {
        opacity: 0,
        y: -200
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .6,
            ease: easing
        }
    }
};

const Navbar = () => (
    <motion.nav className="nav"
        exit={{ opacity: 0 }}
        initial="hidden"
        animate="visible"
        variants={variants}>
        <div>
            <Link href="/">
                <a>Anysz</a>
            </Link>
        </div>
        <div className="nav__izq">
            <ul>
                <li>
                    <Link href="/about">
                        <a>Servicios</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        <a>Sobre Mi</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contactos">
                        <a>Contactos</a>
                    </Link>
                </li>
            </ul>
        </div>
    </motion.nav>
)

export default Navbar;