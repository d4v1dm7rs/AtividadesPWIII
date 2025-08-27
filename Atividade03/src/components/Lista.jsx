import Item from './Item'
import Item02 from './Item02'
import Item03 from './Item03'
import Item04 from './Item04'
import Item05 from './Item05'

function Lista() {
    return(
        <div>
            <ul>
                <Item
                    nome_carro="Challanger Hellcat"
                    modelo_carro="Dodge"
                    anoLancamento_carro={2023}
                    valor_carro="R$ 1,5 milhão"
                />
                <Item02
                    nome_celular="J5 Prime"
                    modelo_celular="Samsung"
                    anoLancamento_celular={2016}
                    valor_celular="R$ 400,00"
                />
                <Item03
                    nome_plcVid="RX 7600 XT"
                    modelo_plcVid="OC Asus"
                    marca_plcVid="AMD"
                    anoLancamento_plcVid={2024}
                    valor_plcVid="R$ 3.069,00"
                />
                <Item04
                    nome_tenis="Air Jordan 11 Retro"
                    marca_tenis="Nike"
                    anoLancamento_tenis={1995}
                    valor_tenis="R$ 1,500.00"
                />
                <Item05
                
                />
            </ul>
        </div>
    )
}

export default Lista