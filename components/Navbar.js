import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

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
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
                <a className="navbar-brand" href="/">ANYSZ</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav__izq" id="navbarNav">
                    <ul className="nav justify-content-end ml-auto">
                        <li className="nav-item">
                            <Link href="/services">
                                <a className="nav-link active" aria-current="page" >servicios</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link" >Sobre mi</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        
        
        {/* <motion.nav classNameName="nav"
            exit={{ opacity: 0 }}
            initial="hidden"
            animate="visible"
            variants={variants}>
            <div classNameName="nav__logo">
                <Link href="/">
                    <a>Anysz</a>
                </Link>
            </div>
            <div classNameName="nav__izq">
                <ul>
                    <li>
                        <Link href="/services">
                            <a>Servicios</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>Sobre Mi</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
            <nav classNameName="nav__icon">
                <FontAwesomeIcon icon={faBars} classNameName="icon"></FontAwesomeIcon>
            </nav> */}
    </>
)

export default Navbar;