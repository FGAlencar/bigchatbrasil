import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserStorage } from "../../storages";

const HomePage:React.FC = () =>{
    const requireNewLogin = UserStorage(state => state.requireNewLogin);
    const navigate = useNavigate();
    useEffect(()=>{
        if (requireNewLogin()){
            navigate('/login')
        }
    },[])


    return(
    <>
        <div><h1>HomePage</h1></div>
        <div><Link to={'/login'}>Logout</Link></div>
    </>)
}

export default HomePage;