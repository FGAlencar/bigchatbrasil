import HomePage from "../pages/home/HomePage";
import PlanoServicoFormPage from "../pages/plano-servico/PlanoServicoFormPage";
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
    },
    {
        label:"Serviço",
        path:'/servico/:id',
        element:<PlanoServicoFormPage/>
    }
]

export default MenusRoutes;