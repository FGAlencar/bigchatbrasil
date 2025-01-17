import HomePage from "../pages/home/HomePage";
import PessoaFormPage from "../pages/pessoa/PessoaFormPage";
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
    },

    {
        label:"Pessoa",
        path:'/pessoa/:id',
        element:<PessoaFormPage/>
    },

]

export default MenusRoutes;