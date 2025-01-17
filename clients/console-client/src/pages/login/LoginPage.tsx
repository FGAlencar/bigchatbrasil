import React, { CSSProperties, useState } from 'react'
import FullScreenFlex from '../../components/screen/FullScreeFlex';
import { Box, FormControl } from '@mui/material';
import InputText from '../../components/inputs/InputText';
import CommonButton from '../../components/buttons/Button';
import InputPassword from '../../components/inputs/InputPassword';
import LoadingSpinner from '../../components/user-feedback/LoadingSpinner';
import { UsuarioService } from '../../services';
import { LoginRequest } from '../../types/LoginRequest';
import { useNavigate } from 'react-router-dom';
import AlertError from '../../components/user-feedback/alert/AlertError';


const MotherBoxStyle:CSSProperties={
    height:'50vh',
    width:'20vw',
    margin:'auto',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    borderRadius:'10px',
    borderWidth:2,
    borderStyle:'solid',
    boxShadow:'15px 15px rgba(0,0,0,.5)'
}


type LoginForm = {
    login?: string, 
    senha?: string
}

type AlertControl = {
    open:boolean;
    title: string; 
    message:string
}

const LoginPage:React.FC = () =>{
    const navigate = useNavigate();
    const [form, setFormData] = useState<LoginForm>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<AlertControl>({
        open:false, title:'', message:''
    });
    
    const updateFormData = (name:string, value: string | boolean) =>
        setFormData({...form, [name]:value})

    const openErrorAlert = (title:string, message:string) =>
        setShowAlert({
            title, message, open:true
        })

    const closeErrorAlert = () =>
        setShowAlert({
            title:'', message:'', open:false
        })
    
    const submit = (form:LoginForm )=>{
        setLoading(true)
        closeErrorAlert()
        UsuarioService.logar(form as LoginRequest)
        .then(() =>{
            setLoading(false)
            navigate('/home')
        })
        .catch((err) => {
            setLoading(false)
            openErrorAlert(
                'Erro ao logar',
                'Verifique os dados de login'
            )
        })
    }   

    const goToNovoUsuarioPage = () => navigate('/usuario/novo')

    const mountErrorAlert = () => 
        <AlertError title={showAlert.title} message={showAlert.message}/>

    return(<>
    
            <LoadingSpinner loading={loading}/>
            <FullScreenFlex alignItem='center' justifyContent='center'>
                <Box style={MotherBoxStyle}>
                    <FormControl sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                        <FormControl style={{marginBottom:20}}>
                            <InputText  
                                label='Login'
                                name="login" 
                                onChange={updateFormData}/>
                        </FormControl>
                        <FormControl style={{marginBottom:20}}>
                            <InputPassword 
                                    name="senha" 
                                    label='Senha' 
                                    onChange={updateFormData} />
                        </FormControl>
                        <FormControl>
                            <CommonButton 
                                    label='Logar' 
                                    onClick={() =>{submit(form)}}/>
                        </FormControl>
                        <FormControl>
                        <CommonButton 
                                variant='text' 
                                label='Registrar' 
                                onClick={() => goToNovoUsuarioPage()}/>
                        </FormControl>
                    </FormControl>
                </Box>
                {showAlert && showAlert.open && mountErrorAlert()}
            </FullScreenFlex>
            </>
        )
}

export default LoginPage;