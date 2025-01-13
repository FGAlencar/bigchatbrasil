import { Link } from "react-router-dom";

const HomePage:React.FC = () =>{
    return(
    <>
        <div><h1>HomePage</h1></div>
        <div><Link to={'/login'}>Logout</Link></div>
    </>)
}

export default HomePage;