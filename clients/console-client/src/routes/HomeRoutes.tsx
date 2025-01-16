import HomePage from "../pages/home/HomePage";
import { RoutesType } from "../types/config/RoutesType.d";
const routes:RoutesType[] =  [
    {
        label:'Home',
        path: '/home',
        element:<HomePage/>,

    },
    {
        label:'Hello World',
        path: '/hello-world',
        element: (<div>HellorWorld</div>),

    }
]

export default routes;