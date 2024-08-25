import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import styles from "../../styles/characters.module.css";


export default function Resultados(){
    const [data, setData] = useState([]);
    const router = useRouter();
    const { query } = router.query;

    useEffect(() => {
        async function fetchData(){
            const resp = await fetch("https://valorant-api.com/v1/agents");
            const result = await resp.json();
            const dataFiltered = result.data.filter(item =>
                item.isPlayableCharacter === true &&
                (item.displayName.toLowerCase().includes(query.toLowerCase()) ||
                item.role.displayName.toLowerCase().includes(query.toLowerCase()))
            );
            setData(dataFiltered);
        }
        if(query){
            fetchData();
        }
    }, [query]);

    return(
        <>
         <Header />
         <main className={styles.agentes_exibicao}>
                <h1>Resultados da Pesquisa</h1>
                <div className={styles.agente}>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div key={item.uuid} className={styles.card}>
                                <div className={styles.imagem_card}>
                                    <img src={item.displayIcon} alt={item.displayName} />
                                </div>

                                <div className={styles.divisao_imagem}></div>

                                <div className={styles.agente_funcao}>
                                    <div className={styles.informacoes_agente}>
                                        <h3 className={styles.nome_agente}>{item.displayName}</h3>
                                        <p className={styles.descricao_agente}>{item.description}</p>
                                    </div>

                                    {item.role && (
                                        <div className={styles.funcao}>
                                            <h3>FUNÇÃO</h3>
                                            <h4>:</h4>
                                            <h4> {item.role.displayName}</h4>
                                        </div>
                                    )}
                                </div>

                                <div className={styles.abilities}>
                                    <p>Abilities</p>
                                    {item.abilities && item.abilities.map((habilidades) => (
                                        <div key={habilidades.slot} className={styles.habilidades_container}>
                                            <div className={styles.habilidades}>
                                                <img className={styles.imagem_habilidade} src={habilidades.displayIcon} alt={habilidades.displayName} />
                                                <h4>{habilidades.displayName}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.mensagem_erro}>Nenhum agente encontrado para "{query}". Tente buscar por outro termo.</p>
                    )}
                </div>
            </main>
        </>
    )

}