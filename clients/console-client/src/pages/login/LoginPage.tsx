import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage:React.FC = () =>{
    return(
        <>
            <div><h1>LoginPage</h1></div>
            <div><Link to={'/home'}>HomePage</Link></div>
        </>)
}

export default LoginPage;