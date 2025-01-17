import LoginPage from "../pages/login/LoginPage";
import RegistroUsuarioPage from "../pages/registro-usuario/RegistroUsuarioPage";
import { RoutesType } from "../types/config/RoutesType.d";
export const InternalUsuarioRoutes:RoutesType[] =  [
    {
        label:'Login page',
        path: '/usuario/:id',
        element: <LoginPage/>,

    }
]

export const ExternalUsuarioRoutes:RoutesType[] =  [
    {
        label:'Registro usuario',
        path: '/usuario/novo',
        element: <RegistroUsuarioPage/>,

    }
]
