function Item04(props) {
    return(
        <>
            <h3>Tênis</h3>
            <li>{props.nome_tenis} - {props.marca_tenis} - {props.anoLancamento_tenis} - {props.valor_tenis}</li>
        </>
    )
}

export default Item04