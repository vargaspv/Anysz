import Link from "next/link";

const Footer = () => (
    
        <div className="footer">
            <div className="footer__container">
                <p>
                Todos los derechos reservados 
                    <Link href="http://www.vgpv.me" >
                        <a target="_blank" rel="noopener noreferrer"> VGPV </a>
                    </Link> 
                Copyright © 2021.
                </p>
            </div>
        </div>
    
)

export default Footer;