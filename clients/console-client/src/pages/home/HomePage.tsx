import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserStorage } from "../../storages";
import CommonButton from "../../components/buttons/Button";

const HomePage:React.FC = () =>{
    const requireNewLogin = UserStorage(state => state.requireNewLogin);
    const logout = UserStorage(state => state.logout)
    const navigate = useNavigate();
    
    useEffect(()=>{
        if (requireNewLogin()){
            navigate('/login')
        }
    },[])




    return(
    <>
        <h1>HomePage</h1>
        <>
            <CommonButton label="Logout" onClick={() =>{
                logout();
                navigate('/login')
            }}/>
        </>
    </>
    )
}

export default HomePage;