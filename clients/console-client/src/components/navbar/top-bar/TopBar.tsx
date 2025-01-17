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

const  TopBar :React.FC = ()  => {
    const navigateTo = useNavigate();
    const logoutUser = UsuarioStograge(state => state.logout)
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
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Big Chat Brasil - Home
                </Typography>
                <Button color="inherit" onClick={() => onClickLogout()}>Logout</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default TopBar;