import LoginPage from "../pages/login/LoginPage";
import RegistroUsuarioPage from "../pages/registro-usuario/RegistroUsuarioPage";
import { RoutesType } from "../types/config/RoutesType.d";
const routes:RoutesType[] =  [
    {
        label:'Login page',
        path: '/usuario/:id',
        element: <LoginPage/>,

    },
    {
        label:'Registro usuario',
        path: '/usuario/novo',
        element: <RegistroUsuarioPage/>,

    }
]

export default routes;