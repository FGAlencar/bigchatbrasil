import { Box } from "@mui/material";
import { CSSProperties, useState } from "react";
import React from 'react';
import FullScreenFlex from "../../components/screen/FullScreeFlex";
import CadastroPessoa from "../../components/cadastros/pessoa/CadastroPessoa";
import { Usuario, UsuarioForm } from "../../types";
import CadastroDadosLogin from "../../components/cadastros/dados-login/CadastroDadosLogin";
import CommonButton from "../../components/buttons/Button";
import LoadingSpinner from "../../components/user-feedback/LoadingSpinner";
import { UsuarioService } from "../../services";
import { useNavigate } from "react-router-dom";
import UsuarioStograge from "../../storages/UsuarioStorage";
import AlertError from "../../components/user-feedback/alert/AlertError";



const MotherBoxStyle:CSSProperties={
    height:'70vh',
    width:'50vw',
    margin:'auto',
    borderRadius:'10px',
    borderWidth:2,
    borderStyle:'solid',
    padding:'15px',
    boxShadow:'15px 15px rgba(0,0,0,.5)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    gap:'25px'
}

const RegistroUsuarioPage:React.FC = () =>{
    const usuarioStorage = UsuarioStograge();
    const navigator = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [form, setForm] = useState<UsuarioForm>({
        planos:[],
        pessoa:{ativo:true, enderecos:[], contatoTelefones:[], emails:[]}, 
        dadosLogin:{}
    });



    const onUpdatePessoa = (name:string, value:any) =>
        setForm({...form, pessoa: {...form.pessoa, [name]:value}})

    const onUpdateDadosLogin = (name:string, value:any) =>
        setForm({...form, dadosLogin: {...form.dadosLogin, [name]:value}})

    const submit = ()=>{
        setLoading(true);
        setShowAlert(false)
        UsuarioService.registrar(form as Usuario)
            .then(({data}) => {
                usuarioStorage.login(data)
                setLoading(false)
                navigator('/home')
            })
            .catch((err) => {
                setLoading(false)
                setShowAlert(true)
            })
    }

    const goToLoginPage = () => navigator('/login');

    return(
        <>  
            <LoadingSpinner loading={loading}/>
            <FullScreenFlex justifyContent="center" alignItem="center" >
                <Box style={MotherBoxStyle}>
                    <Box>
                        <Box>
                            <CadastroPessoa pessoa={form.pessoa} updatePessoa={onUpdatePessoa}/>
                        </Box>
                        <Box>
                            <CadastroDadosLogin dadosLogin={form.dadosLogin} updateDadosLogin={onUpdateDadosLogin}/>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center', marginBottom:'30px', gap:'20px'}}>
                        <CommonButton onClick={submit} label="Registrar"/>
                        <CommonButton variant='outlined' onClick={goToLoginPage} label="voltar"/>
                    </Box>
                </Box>
                {showAlert && <AlertError/>}
            </FullScreenFlex>
        </>
    )
}

export default RegistroUsuarioPage;