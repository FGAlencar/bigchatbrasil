import axios from "axios";
import IndexRoutes from "./routes";
import React from 'react';

axios.interceptors.request.use( async config =>{
    const {...newConfig} = config;
    newConfig.baseURL='http://localhost:8080'
    return Promise.resolve(newConfig);
})

const Context: React.FC = () =>{


    return(
        <IndexRoutes/>
    )
}

export default Context;