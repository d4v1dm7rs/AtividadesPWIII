function Item03(props) {
    return(
        <>
            <h3>Placa de Vídeo</h3>
            <li>{props.nome_plcVid} - {props.modelo_plcVid} - {props.anoLancamento_plcVid} - {props.valor_plcVid} - {props.marca_plcVid}</li>
        </>
    )
}

export default Item03