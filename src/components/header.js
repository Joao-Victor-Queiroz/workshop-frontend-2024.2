import styles from "../styles/header.module.css";
import Link from "next/link";
import Input from "../components/input";


export default function Header( ){
    return(
        <div className={styles.container_header}>
            <div className={styles.logo}></div>
        
            <nav className={styles.nav_header}>
                <Link className={styles.link_header}href="/">HOME</Link>
                <Link className={styles.link_header}href="/characters">AGENTES</Link>
                <Link className={styles.link_header}href="/about">SOBRE</Link>
            </nav>
        </div>

    )
}