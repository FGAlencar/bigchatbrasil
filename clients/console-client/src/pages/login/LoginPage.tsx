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
import UsuarioStorage from '../../storages/UsuarioStorage';


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


const LoginPage:React.FC = () =>{
    const navigate = useNavigate();
    const [form, setFormData] = useState<LoginForm>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const {login} = UsuarioStorage()
    
    const updateFormData = (name:string, value: string | boolean) =>
        setFormData({...form, [name]:value})

    const submit = (form:LoginForm )=>{
        setLoading(true)
        setShowAlert(false)
        UsuarioService.logar(form as LoginRequest)
        .then(({data}) =>{
            login(data)
            setLoading(false)
            navigate('/home')
        })
        .catch((err) => {
            setLoading(false)
            setShowAlert(true)
        })
    }   

    const goToNovoUsuarioPage = () => navigate('/usuario/novo')
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
                {showAlert && <AlertError/>}
            </FullScreenFlex>
            </>
        )
}

export default LoginPage;