import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
import LoginRoutes from './LoginRoutes';
import { RoutesType } from '../types/config/RoutesType.d';
import MenuRoutes from './MenusRoutes'
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
        ...MenuRoutes.map(mapToRoute)

    ]

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}
                    children={ internalRoutes }
                />
                {externalRoutes} {/* Criado rota externa para não replicar os menus que estão disponívels nas rotas iternas*/}
            </Routes>
        </BrowserRouter>
    ) 
}

export default IndexRoutes;