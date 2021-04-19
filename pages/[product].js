import Layout from '../components/Layout';
import { useRouter } from "next/router";
import { motion } from 'framer-motion';
import Link from 'next/link';

//const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const transition = { duration: 1.4, ease: [0.6, 0.03, -0.05, 0.9] };

export default function Product() {
    const {
        query: {product},
    } = useRouter();
    return (
        <Layout>
            <motion.h1 
            layoutId="header" 
            className="product_title"
            >{product}</motion.h1>
                <Link href="/services">
                    <motion.div className= 'product_container'>
                            <a>
                                <motion.img
                                    LayoutId={product}
                                    className="product_image" 
                                    src={product + ".jpg"}/>
                            </a>
                            <p className="product_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta libero reiciendis autem cumque, hic voluptate nobis. Animi, illo velit?</p>
                    </motion.div>
                </Link>
        </Layout>
    )
}

