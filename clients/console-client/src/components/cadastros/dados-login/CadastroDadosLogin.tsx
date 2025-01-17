import { Box, FormControl } from "@mui/material";
import { DadosLoginForm } from "../../../types";
import InputText from "../../inputs/InputText";
import InputPassword from "../../inputs/InputPassword";

type Props = {
    dadosLogin:DadosLoginForm | undefined,
    updateDadosLogin: (name:string, value:any) => void;
}


const rowForFormControl = {
    position:'relative', 
    width:'100%', 
    height:'100%', 
    display:'flex',
    flexDirection:'row',
    gap:'50px',
    justifyContent:'space-between'
};

const CadastroDadosLogin:React.FC<Props>= ({
    dadosLogin, 
    updateDadosLogin
}) =>{
    
    return(
        <Box justifyContent='center' alignItems='center'>
            <h2>Dados usuário</h2>
            <FormControl sx={rowForFormControl}>
                    <InputText 
                        name="login" 
                        label="Login"
                        value={dadosLogin?.login}
                        onChange={updateDadosLogin}/>
                    <InputPassword 
                        name="senha" 
                        label="Senha" 
                        value={dadosLogin?.senha}
                        onChange={updateDadosLogin}/>
                    <InputText 
                        name="emailRedefinicao" 
                        label="E-mail redefinição" 
                        value={dadosLogin?.emailRedefinicao}
                        onChange={updateDadosLogin}/>
            </FormControl>
        </Box>
    )
}

export default CadastroDadosLogin;