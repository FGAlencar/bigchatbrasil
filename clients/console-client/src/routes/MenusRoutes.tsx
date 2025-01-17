import HomePage from "../pages/home/HomePage";
import PlanoServicoListPage from "../pages/plano-servico/PlanoServicoListPage";
import { RoutesType } from "../types/config/RoutesType";

const MenusRoutes:RoutesType[] =  [
    {
        label:'Home',
        path: '/home',
        element:<HomePage/>,

    },
    {
        label:"Serviço",
        path:'/servico',
        element:<PlanoServicoListPage/>
    }
]

export default MenusRoutes;