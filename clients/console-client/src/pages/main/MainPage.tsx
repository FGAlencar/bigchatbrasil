import { Outlet, useNavigate } from "react-router-dom"
import TopBar from "../../components/navbar/top-bar/TopBar"
import LeftSideBar from "../../components/navbar/left-bar/LeftSideBar"
import React, { useEffect, useState } from "react";
import UsuarioStograge from "../../storages/UsuarioStorage";


const MainPage:React.FC = () =>{
  const requireNewLogin = UsuarioStograge(state => state.requireNewLogin);
  const navigate = useNavigate();
  
    useEffect(()=>{
        if (requireNewLogin()){
            navigate('/login')
        }
    },[])

    const [openMenus, setOpenMenus] = useState<boolean>(false);
    
      const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setOpenMenus(open);
        };
        

    return(
        <>
            <TopBar 
                toggleDrawer={toggleDrawer}/>
            <LeftSideBar 
                toggleDrawer={toggleDrawer}
                open={openMenus}
                />
            <Outlet/>
        </>
    )
}

export default MainPage