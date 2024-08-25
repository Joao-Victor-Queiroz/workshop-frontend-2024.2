import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import styles from "../../styles/characters.module.css";
import Input from "../../components/input";
import { useRouter } from "next/router"; 

export default function Characters(){
    const[data, setData] = useState([]);
    const[pesquisa, setPesquisa] = useState('');
    const router = useRouter();

    useEffect(() => {
        async function fetchData(){
            const resp = await fetch("https://valorant-api.com/v1/agents");
            const result = await resp.json();
            const dataFiltered = result.data.filter(
                (item => item.isPlayableCharacter === true )
            );
            
            console.log(result);
            setData(dataFiltered);
          
        }
        fetchData();
    }, []);



    const handleSearch = () => {
        router.push(`/resultados?query=${pesquisa}`);
    };
    return(
        <>
            <Header>
            </Header>
            <main className={styles.agentes_exibicao}>
                <div className={styles.titulo_principal}>
                    <div className={styles.linha_titulo}></div>
                    <h1>CONHEÇA OS AGENTES DE VALORANT!</h1>
                    <div className={styles.linha_titulo}></div>
                </div>
                <div className={styles.input_pesquisa}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Procurando um agente em específico?"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        />
                        <button onClick={handleSearch}>Pesquisar</button>
                 </div>
                <div className={styles.agente}>
                {data && 
                    data.map((item) => (
                    <div key={item.uuid} className={styles.card}>
                        <div className={styles.imagem_card}><img src={item.displayIcon} alt={item.displayName } /></div>

                        <div className={styles.divisao_imagem}></div>

                        <div className={styles.agente_funcao}>
                            <div className={styles.informacoes_agente}>
                                <h3 className={styles.nome_agente}>{item.displayName }</h3>
                                <p className={styles.descricao_agente}>{item.description}</p>
                            </div>

                     
                         
                            {item.role &&(
                               <div className={styles.funcao}>
                                    <h3>FUNCTION</h3>
                                    <h4>:</h4>
                                    <h4> {item.role.displayName}</h4>
                                 </div>
                            )}
                            </div>
                           
                        <div className={styles.abilities}>
                            <p>Abilities</p>
                        {item.abilities && item.abilities.map((habilidades) =>       
                                <div key={habilidades.slot} className={styles.habilidades_container}>
                                    <div className={styles.habilidades}>
                                        
                                        <img className={styles.imagem_habilidade} src={habilidades.displayIcon} alt={habilidades.displayName}/>
                                        <h4>{habilidades.displayName}</h4>
                                    </div>
                                </div>
                        )}
                        </div>
                        </div>
                 
          ))}   
            	
                </div>
            </main>
            <Footer/>
        </>
    )

}