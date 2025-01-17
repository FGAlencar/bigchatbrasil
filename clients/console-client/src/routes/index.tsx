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
import {InternalUsuarioRoutes, ExternalUsuarioRoutes} from './UsuarioRoutes'
import MainPage from '../pages/main/MainPage';


const mapToRoute = (route:RoutesType) =>
    <Route path={route.path} element={route.element}/>
    
const IndexRoutes:React.FC = () =>{

    const externalRoutes = [
        ...LoginRoutes.map(mapToRoute),
        ...ExternalUsuarioRoutes.map(mapToRoute)
    ]

    const internalRoutes = [
        ...InternalUsuarioRoutes.map(mapToRoute),
        ...HomeRoutes.map(mapToRoute)

    ]

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}
                    children={ internalRoutes }
                />
                {externalRoutes}
            </Routes>
        </BrowserRouter>
    ) 
}

export default IndexRoutes;