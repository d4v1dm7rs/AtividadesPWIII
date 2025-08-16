import styles from "./Pessoa.module.css"
function Pessoa({nome, idade, profissao, foto}) {
    
    return(
        <div className={styles.pessoaContainer}>
            <h2 className={styles.pessoaContent}>Perfil Pessoal</h2>
            <img src={foto} alt={nome}/>
            <h3>Nome: {nome}</h3>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa