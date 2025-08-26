function Item(props) {
    return(
        <>
            <li>{props.nome_carro} - {props.modelo_carro} - {props.dataLancamento_carro} - {props.valor_carro}</li>
        </>
    )
}

export default Item