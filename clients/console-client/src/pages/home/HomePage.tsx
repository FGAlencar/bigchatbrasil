import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioStograge  from "../../storages/UsuarioStorage";
import CommonButton from "../../components/buttons/Button";
import TopBar from "../../components/navbar/top-bar/TopBar";

const HomePage:React.FC = () =>{
    const requireNewLogin = UsuarioStograge(state => state.requireNewLogin);
    const logout = UsuarioStograge(state => state.logout)
    const navigate = useNavigate();
    
    // useEffect(()=>{
    //     if (requireNewLogin()){
    //         navigate('/login')
    //     }
    // },[])




    return(
    <>
        <TopBar/>
    </>
    )
}

export default HomePage;