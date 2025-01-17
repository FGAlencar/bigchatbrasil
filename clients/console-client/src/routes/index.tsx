import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter,
    Navigate,
  } from "react-router-dom";
import LoginRoutes from './LoginRoutes';
import { RoutesType } from '../types/config/RoutesType.d';
import HomeRoutes from './HomeRoutes'
import UsuarioRoutes from './UsuarioRoutes'


const mapToRoute = (route:RoutesType) =>
    <Route path={route.path} element={route.element}/>
    
const IndexRoutes:React.FC = () =>{
   

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={(
                    <Navigate to={'home'}/>
                )}/>
                {UsuarioRoutes.map(mapToRoute)}
                {LoginRoutes.map(mapToRoute)}
                {HomeRoutes.map(mapToRoute)}
            </Routes>
        </BrowserRouter>
    ) 
}

export default IndexRoutes;