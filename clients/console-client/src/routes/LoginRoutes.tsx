import LoginPage from "../pages/login/LoginPage";
import { RoutesType } from "../types/config/RoutesType.d";
const routes:RoutesType[] =  [
    {
        label:'Login page',
        path: '/login',
        element: <LoginPage/>,

    }
]

export default routes;