import React, { CSSProperties, useState } from 'react'
import FullScreenFlex from '../../components/screen/FullScreeFlex';
import { Box } from '@mui/material';
import InputText from '../../components/inputs/InputText';
import { Col, Row } from 'react-bootstrap';
import CommonButton from '../../components/buttons/Button';
import InputPassword from '../../components/inputs/InputPassword';
import LoadingSpinner from '../../components/user-feedback/LoadingSpinner';
import { UsuarioService } from '../../services';
import { LoginRequest } from '../../types/LoginRequest';
import { useNavigate } from 'react-router-dom';


const MotherBoxStyle:CSSProperties={
    height:'50vh',
    width:'30vw',
    margin:'auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}


type LoginForm = {
    login?: string, 
    senha?: string
}

const LoginPage:React.FC = () =>{
    const navigate = useNavigate();
    const [form, setFormData] = useState<LoginForm>({});
    const [loading, setLoading] = useState<boolean>(false);
    const updateFormData = (name:string, value: string | boolean) =>
        setFormData({...form, [name]:value})
    
    const submit = (form:LoginForm )=>{
        setLoading(true)
        UsuarioService.logar(form as LoginRequest)
        .then(() =>{
            setLoading(false)
            navigate('/home')
        })
        .catch((err) => {
            setLoading(false)
            alert(err)
        })
    }   

    return(<>
    
            <LoadingSpinner loading={loading}/>
            <FullScreenFlex alignItem='center' justifyContent='center'>
                <Box style={MotherBoxStyle}>
                    <Col>
                        <Row style={{marginBottom:20}}>
                            <InputText name="login" placeholder='Login' onChange={updateFormData} />
                        </Row>
                        <Row style={{marginBottom:20}}>
                            <InputPassword name="senha" placeholder='Senha' onChange={updateFormData} />
                        </Row>
                        <Row >
                            <CommonButton style={{marginLeft:'30%'}}label='Logar' onClick={() =>{submit(form)}}/>
                        </Row>
                    </Col>
                </Box>
            </FullScreenFlex>
            </>
        )
}

export default LoginPage;