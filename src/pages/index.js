
import styles from "@/styles/Home.module.css";
import Header from "../components/header"
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
    <Header>
    </Header>
    <main className={styles.main_content}>
      
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>OLA, SEJA BEM VINDO(A)</h1>
        <p className={styles.paragrafo_apresentacao}>Este é um desafio da semana de Workshop da Fábrica de Software, na sua
        edição de 2024.2
        O desafio consiste em consumir uma API do jogo "Valorant", da Riot Games, mostrando os agentes a suas informações.</p>
      <div className={styles.direcionar_agentes}>
        <h1 className={styles.titulo_direcionar}>VAMOS LA?</h1>
        <button className={styles.botao_home}>
          <Link className={styles.link_home} href="/characters">CONHECER AGENTES</Link>
        </button>
      </div>     

      </div>
    
    </main>
      <Footer/>
    </>
  );
}
