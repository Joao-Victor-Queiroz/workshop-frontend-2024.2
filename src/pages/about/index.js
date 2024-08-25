import Footer from "@/components/footer";
import Header from "../../components/header";
import styles from "../../styles/about.module.css";

export default function About(){

    return(
        <>
        <Header/>
            <main className={styles.sobre_mim}>
                <div className={styles.container}>
                    <div className={styles.minha_foto}></div>
                    <div className={styles.paragrafo_about}>
                        <h1>Quem sou eu?</h1>
                        <p>Olá, meu nome é João Victor e atualmente estou cursando o 6 período do curso de Ciências na Computação no Unipê. Resolvi participar da Fábrica de Software para testar o que aprendi até aqui e também ganhar experiência na área.
                        Meus hobbies são desenhar, ouvir música e, claro, ensinar. Espero que sua experiência aqui tenha sido bacana, pois tentei desenvolver da forma mais prática e autêntica possível.
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )

}