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
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent p-md-3">
            <div className="container">
                <a className="navbar-brand" href="/">ANYSZ</a>
                <button 
                    type="button" 
                    class="navbar-toggler" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav__izq" id="navbarNav">
                    <div className="mx-auto"></div>
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
    </>
)

export default Navbar;