function Item02(props) {
    return(
        <>
            <div class="item">
                <h3>Celular</h3>
                <li>{props.nome_celular} - {props.modelo_celular} - {props.anoLancamento_celular} - {props.valor_celular}</li>
            </div>
        </>
    )
}

export default Item02