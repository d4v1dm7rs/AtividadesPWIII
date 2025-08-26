function Item02(props) {
    return(
        <>
            <h3>Celular</h3>
            <li>{props.nome_celular} - {props.modelo_celular} - {props.anoLancamento_celular} - {props.valor_celular}</li>
        </>
    )
}

export default Item02