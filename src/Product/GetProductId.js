import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function ProductId (props){
    const [produtos, setProdutos] = useState([]);

    const getProduto = (id) => {
        api.get(`produto/${id} `).then(response => {
            setProdutos(response.data)
            console.log(response.data)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getProduto(id)
    },[])

    return (
            <div>
            <h1>Produto</h1>
            <li>
                <h2>
                    {console.log(produtos)}
                    Nome: {produtos.nome}
                </h2>
                <h2>
                    Descrição: {produtos.descricao}
                </h2>
                <h2>
                    Quantidade: {produtos.qtdEstoque}
                </h2>
                <h2>
                    Valor: {produtos.valor}
                </h2>
                <img src={`${produtos.fotoLink}`} />
            </li>
            </div>
    )

}
export default  ProductId