function Item05(props) {
    return(
        <>
            <div class="item ">
                <h3>Tênis</h3>
                <li>{props.nome_tenis} - {props.marca_tenis} - {props.anoLancamento_tenis} - {props.valor_tenis}</li>
            </div>
        </>
    )
}

export default Item05