import { Box, FormControl } from "@mui/material";
import React from 'react';
import { PessoaForm } from "../../../types";
import InputText from "../../inputs/InputText";
import InputRadio from "../../inputs/InputRadio";
import { InputRadioItem } from "../../inputs/InputProps";


type Props ={
    pessoa: PessoaForm | undefined,
    updatePessoa:  (name:string, value:any) => void
}


const tipoPessoaOptions:InputRadioItem[]=[
    {label:'Física', value:'FISICA'},
    {label:'Jurídica', value:'JURIDICA'}
];

const rowForFormControl = {
    position:'relative', 
    width:'100%', 
    height:'100%', 
    display:'flex',
    flexDirection:'row',
    gap:'50px',
    justifyContent:'space-between'
};

const CadastroPessoa:React.FC<Props> = ({
    pessoa, 
    updatePessoa
}) =>{
    return(
        <Box justifyContent={'start'} alignItems={'start'}>
            <h2>Dados pessoa</h2>
            <FormControl sx={rowForFormControl}>
                    <InputRadio
                        name="tipoPessoa" 
                        label="Tipo pessoa"
                        value={pessoa?.tipoPessoa}
                        onChange={updatePessoa}
                        row
                        options={tipoPessoaOptions}/>
            </FormControl>
            <FormControl sx={rowForFormControl}>
                    <InputText 
                        name="nome" 
                        label="Nome"
                        value={pessoa?.nome}
                        onChange={updatePessoa}/>
                    
                    <InputText 
                        name="cpfCnpj" 
                        label="Documento" 
                        value={pessoa?.razaoSocial}
                        onChange={updatePessoa}/>
            </FormControl>
        </Box>
    )

}


export default CadastroPessoa;