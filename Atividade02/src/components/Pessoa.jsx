import styles from "./Pessoa.module.css"
function Pessoa(props) {
    

    return(
        <div className={styles.pessoaContainer}>
           <h1>Informações pessoais</h1>

           <div>
                <img src={props.foto} className={styles.imagem} />
           </div>

           <div className={styles.pessoaContent}>  
                <h2>Nome: {props.nome}</h2>
                <h2>Idade: {props.idade}</h2>
                <h2>Telefone: {props.telefone}</h2>
            </div>

            <h1>Hobbies</h1>

            <div className={styles.displayFlex}>
                <div className={styles.bloco}>
                    <h2>Hobbie </h2>
                    <p>{props.hobbie1}</p>
                </div>

                <div className={styles.bloco}>
                    <h2>Hobbie: </h2>
                    <p>{props.hobbie2}</p>
                </div>

                <div className={styles.bloco}>
                    <h2>Hobbie: </h2>
                    <p>{props.hobbie3}</p>
                </div>
            </div>

            <h1>Gosto Musical</h1>

            <div className={styles.displayFlex}>
                <div className={styles.bloco}>
                    <h2>Musicas mais ouvidas</h2>
                    <p>{props.musica1}</p>
                    <p>{props.musica2}</p>
                </div>

                <div className={styles.bloco}>
                    <h2>Artistas favoritos</h2>
                    <p>{props.artista1}</p>
                    <p>{props.artista2}</p>
                    <p>{props.artista3}</p>
                </div>
            </div>
        </div>
    )
}

export default Pessoa