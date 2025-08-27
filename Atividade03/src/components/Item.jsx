function Item(props) {
    return(
        <>
            <div class="item">
                <h3>Carro</h3>
                <li>{props.nome_carro} - {props.modelo_carro} - {props.anoLancamento_carro} - {props.valor_carro}</li>
            </div>
        </>
    )
}

export default Item