import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
import LoginRoutes from './LoginRoutes';
import { RoutesType } from '../types/Routes';
import HomeRoutes from './HomeRoutes'



const IndexRoutes:React.FC = () =>{
    const mapToRoute = (route:RoutesType) =>
        <Route path={route.path} element={route.element}/>

    return (
        <BrowserRouter>
            <Routes>
                {LoginRoutes.map(mapToRoute)}
                {HomeRoutes.map(mapToRoute)}
            </Routes>
        </BrowserRouter>
    ) 
}

export default IndexRoutes;