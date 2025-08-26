function Item(props) {
    return(
        <>
            <h3>Carro</h3>
            <li>{props.nome_carro} - {props.modelo_carro} - {props.anoLancamento_carro} - {props.valor_carro}</li>
        </>
    )
}

export default Item