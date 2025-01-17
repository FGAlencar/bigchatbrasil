import { Box } from "@mui/material"
import CadastroPessoa from "../../components/cadastros/pessoa/CadastroPessoa"
import { Pessoa } from "../../types"
import { useState } from "react"

const PessoaFormPage:React.FC = () =>{
   
    const [pessoa, setPessoa] = useState<Pessoa>({
        nome:'',
        razaoSocial: '',
        tipoPessoa: '', 
        cpfCnpj:'',
        ativo:true,
    });

   
    const updatePessoa = (name:string, value:any)=>
        setPessoa({...pessoa, [name]:value})

   
   return<Box>
            <CadastroPessoa 
                pessoa={pessoa} 
                completo
                updatePessoa={updatePessoa}/>
        </Box>
}

export default PessoaFormPage;