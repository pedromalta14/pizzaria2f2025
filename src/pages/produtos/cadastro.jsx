import './produtos.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CadastroProduto = () => {

   // estado para guardar dados
   const [dados,setDados] = useState ({})

    const montaJson = () => {
      setDados({
        "nome": nome.value,
         "tipo": tipo.value,
         "precovenda": preco.value,
        "descricao": descricao.value,
        "categoria_id": categoria_id.value
      })      
      alert (JSON.stringify(dados)) 

    }


    return (
        <div className = "CadastroProduto">
            <input type="text" placeholder='0' id ="id" disabled />
            <input type="text" placeholder='nome do produto' id = "nome" />
            <input type="text" placeholder='descricao' id =  "descricao"  />
            <input type="text" placeholder='0.00' id = "preco"  />
            <input type="text" placeholder='tipo de produto' id = "tipo"  />
            <input type="text" placeholder='1' id  = "categoria_id" disabled />
            
            <input type = "button" value = {"Cadastrar"}
                onClick = {()=>{montajson()}} />
        
        </div>
    )
}
export default CadastroProduto