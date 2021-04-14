import Navbar from './Navbar';
import Footer from './Footer';

import { motion } from 'framer-motion';

// const variants = {
//     active: {
//         backgroundColor: "#2b2b2b"
//     },
//     inactive: {
//       backgroundColor: "#000",
//       transition: { duration: 2 }
//     }
//   };

const Layout = ({ children }) => (
    <>
        <Navbar/>
        {

        }
        <main className="container">
            {children}
        </main>
    </>
)

export default Layout;