import { Box, FormControl } from "@mui/material";
import React, { ReactNode, useState } from 'react';
import { Endereco, PessoaForm } from "../../../types";
import InputText from "../../inputs/InputText";
import InputRadio from "../../inputs/InputRadio";
import { InputRadioItem } from "../../inputs/InputProps";
import CommonTable, { TableColumn } from "../../table/CommonTable";
import CommonButton from "../../buttons/Button";


const rowForFormControl = {
    position:'relative', 
    width:'100%', 
    height:'100%', 
    display:'flex',
    flexDirection:'row',
    gap:'50px',
    justifyContent:'space-between',
    marginBottom:2
};


type CadastroEnderecoProps = {
    enderecos:Endereco[],
    onUpdateEndereco: (name:string, value:any) => void
}

type CadastroEnderecoFormProp = {
    endereco?:Endereco,
    index?:number,
    onSubmit:(endereco:Endereco, index?:number) =>void
}


const CadastroEnderecoForm:React.FC<CadastroEnderecoFormProp> = ({
    onSubmit,
    index,
    endereco={
        rua:'',
        numero:'',
        complemento:'',
        bairro:'',
        cidade:'',
        estado:'',
        uf:'',
        principal: false,
        correspondencia: false
    }
}) =>{

    const isEdit = index !== undefined;
    const [form, setForm] = useState<Endereco>(endereco);

    const updateForm = (name:string, value:any) =>
        setForm({...form, [name]:value})

    const submit = () =>{
        onSubmit(form, index);
    }
    
    return (
        <Box justifyContent={'start'} alignItems={'start'}>
                <FormControl sx={rowForFormControl}>
                        <InputText 
                            name="rua" 
                            label="Rua"
                            value={form.rua}
                            onChange={updateForm}/>
                        <InputText 
                            name="numero" 
                            label="Número" 
                            value={form.numero}
                            onChange={updateForm}/>
                        <InputText 
                            name="complemento" 
                            label="Complemento" 
                            value={form.complemento}
                            onChange={updateForm}/>
                </FormControl>
                <FormControl sx={rowForFormControl}>
                        <InputText 
                            name="bairro" 
                            label="Bairro"
                            value={form.bairro}
                            onChange={updateForm}/>
                        <InputText 
                            name="cidade" 
                            label="Cidade" 
                            value={form.cidade}
                            onChange={updateForm}/>
                        <InputText 
                            name="estado" 
                            label="Estado" 
                            value={form.estado}
                            onChange={updateForm}/>
                        <InputText 
                            name="uf" 
                            label="UF" 
                            value={form.uf}
                            onChange={updateForm}/>
                </FormControl>
                <FormControl sx={rowForFormControl}>
                        <InputText 
                            name="principal" 
                            label="Principal"
                            value={form.principal}
                            onChange={updateForm}/>
                        <InputText 
                            name="correspondencia" 
                            label="Correspondencia" 
                            value={form.correspondencia}
                            onChange={updateForm}/>
                </FormControl>
                <Box display={'flex'} justifyContent={'end'}>
                    <CommonButton onClick={ () => submit()} label={isEdit ? 'Atualizar' : 'Adicionar'}/>
                </Box>
        </Box>
    )
}


const CadastroEndereco:React.FC<CadastroEnderecoProps> = ({
    enderecos, 
    onUpdateEndereco
}) =>{

    const editEndereco = (index: number) =>{
        setEnderecoForm(enderecos[index])
    }

    const removeEndereco = (index: number) =>{
        const copy = [...enderecos]
        delete copy[index]
        onUpdateEndereco('enderecos', copy.filter(e => e))
    }

    const onSubmitForm = (endereco:Endereco, index?:number) =>{
        if(index !== undefined){
            const copy = [...enderecos]
            copy[index] = endereco;
            return onUpdateEndereco('enderecos', copy )
        }else{
            return onUpdateEndereco('enderecos', [...enderecos, endereco])
        }
    }

    const [enderecoForm, setEnderecoForm] = useState<Endereco| undefined>();

    const [tableData, setTableData] = useState<{
        columns: TableColumn[],
        data?:any[],
        action?:(element:any, index:number) => ReactNode
    }>({
        columns:[
            { label: 'Rua', column:'rua', renderComponent: (value => <>{value}</>)},
            { label: 'Número', column:'numero',renderComponent: (value => <>{value}</>)},
            { label: 'Complemento', column:'complemento',renderComponent: (value => <>{value}</>)},
            { label: 'Bairro', column:'bairro',renderComponent: (value => <>{value}</>)},
            { label: 'cidade', column:'cidade',renderComponent: (value => <>{value}</>)},
            { label: 'Estado', column:'estado',renderComponent: (value => <>{value}</>)},
            { label: 'UF', column:'ud',renderComponent: (value => <>{value}</>)},
            { label: 'principal', column:'principal',renderComponent: (value => <>{Boolean(value) ? 'Sim': 'Não'}</>)},
            { label: 'correspondencia', column:'correspondencia',renderComponent: (value => <>{Boolean(value) ? 'Sim': 'Não'}</>)}
        ],
        action: (element:any, index:number) => (
            < div style={{position:'relative',display:'flex', justifyContent:'center', gap:10}}>
                <CommonButton onClick={() => editEndereco(index)} label="Editar"/>
                <CommonButton onClick={() => removeEndereco(index)} label="Remover" variant="outlined"/>
            </div>),
        data:enderecos
    })


    return<Box>
                <h3>Endereços</h3>
        <Box>
            <CadastroEnderecoForm endereco={enderecoForm} onSubmit={onSubmitForm}/>
        </Box>
        <Box>
            <CommonTable 
                columns={tableData.columns} 
                data={tableData.data ?? []} 
                action={tableData.action}/>
        </Box>
    </Box>
}






















type Props ={
    pessoa: PessoaForm,
    updatePessoa:  (name:string, value:any) => void,
    completo?: boolean
}


const tipoPessoaOptions:InputRadioItem[]=[
    {label:'Física', value:'FISICA'},
    {label:'Jurídica', value:'JURIDICA'}
];



const CadastroPessoa:React.FC<Props> = ({
    pessoa, 
    updatePessoa,
    completo=false
}) =>{
    return(
        <>
            <Box justifyContent={'start'} alignItems={'start'}>
                <h2>Dados pessoa</h2>
                <FormControl sx={rowForFormControl}>
                        <InputRadio
                            name="tipoPessoa" 
                            label="Tipo pessoa"
                            value={pessoa.tipoPessoa}
                            onChange={updatePessoa}
                            row
                            options={tipoPessoaOptions}/>
                </FormControl>
                <FormControl sx={rowForFormControl}>
                        <InputText 
                            name="nome" 
                            label="Nome"
                            value={pessoa.nome}
                            onChange={updatePessoa}/>
                        
                        <InputText 
                            name="cpfCnpj" 
                            label="Documento" 
                            value={pessoa.razaoSocial}
                            onChange={updatePessoa}/>
                </FormControl>
            </Box>
            <Box>
                {completo && 
                   <Box>
                    <CadastroEndereco enderecos={pessoa.enderecos ?? []} onUpdateEndereco={updatePessoa}/>
                   </Box> 
                }
            </Box>
        </>
    )

}




export default CadastroPessoa;