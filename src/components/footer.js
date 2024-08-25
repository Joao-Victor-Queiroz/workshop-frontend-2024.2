import styles from "../styles/footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return(
        <>
            <footer className={styles.footer_pagina}>
                <nav>
                <Link href="https://github.com/Joao-Victor-Queiroz" className={styles.link_footer} target='_blank'><FaGithub className={styles.icone_link}/></Link>
                <Link href="https://wa.me/5583998691213" className={styles.link_footer} target='_blank'><FaWhatsapp className={styles.icone_link} /></Link>
                <Link href="https://www.instagram.com/joao_victtorqa/" className={styles.link_footer}target='_blank'><FaInstagram className={styles.icone_link} /></Link>
                </nav>
            </footer>
        </>
    )
}