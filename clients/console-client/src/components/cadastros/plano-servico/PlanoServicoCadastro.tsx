import React from "react";
import { PlanoServico } from "../../../types";
import { Box, FormControl } from "@mui/material";
import InputText from "../../inputs/InputText";

type Props ={
    servico: Partial<PlanoServico> | undefined,
    updateServico: (name:string, value:any) => void
}

const rowForFormControl = {
    position:'relative', 
    width:'100%', 
    height:'100%', 
    display:'flex',
    flexDirection:'row',
    gap:'50px',
    justifyContent:'space-between',
    marginBottom:5
};


const PlanoServicoCadastro: React.FC<Props> = ({
    servico, 
    updateServico
}) =>{
return (<Box justifyContent={'start'} alignItems={'start'}>
        <h2>Dados serviço</h2>
        <FormControl sx={rowForFormControl}>
                <InputText 
                    name="nome" 
                    label="Nome"
                    value={servico?.nome}
                    onChange={updateServico}
                    size="45%"/>
                
                <InputText 
                    name="descricao" 
                    label="Descrição" 
                    value={servico?.descricao}
                    onChange={updateServico}
                    size="45%"/>
                <InputText 
                    name="valor" 
                    label="Valor"
                    value={servico?.valor}
                    onChange={updateServico}
                    size="10%"/>
        </FormControl>
    </Box>)
    
}
export default PlanoServicoCadastro;