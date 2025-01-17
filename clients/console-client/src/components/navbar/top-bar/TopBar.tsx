import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import UsuarioStograge from '../../../storages/UsuarioStorage';
import { useNavigate } from 'react-router-dom';
import AppContextStorage from '../../../storages/AppContextStorage';


type Props ={
    toggleDrawer: (open:boolean) =>
                        (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const  TopBar :React.FC<Props> = ({
    toggleDrawer
})  => {
    const navigateTo = useNavigate();
    const logoutUser = UsuarioStograge(state => state.logout)
    const currentPageTitle = AppContextStorage(state => state.currentPage.title)
    const onClickLogout = () =>{
        logoutUser();
        navigateTo('/login')
    } 
  
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{textAlign:'center'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Big Chat Brasil - {currentPageTitle}
                </Typography>
                <Button color="inherit" onClick={() => onClickLogout()}>Logout</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default TopBar;