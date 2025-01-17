import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HomeIcon from '@mui/icons-material/Home';
import AppContextStorage from '../../../storages/AppContextStorage';
import { useNavigate } from 'react-router-dom';


type Props={
    open:boolean,
    toggleDrawer:( open:boolean) =>
                    (event: React.KeyboardEvent | React.MouseEvent) => void
}

type Menu = {
  label:string, path:string, icon:any
}

const usuarioMenus:Menu[] = [
  {label:'Usuário', icon:<AccountCircleIcon/>, path:''}
]

const sistemaMenus:Menu[] = [
  {label:'Serviços', path:'/servico', icon:<TextSnippetIcon/>}
]

const homeMenu:Menu[] =[
  {label:'Home', icon:<HomeIcon/>, path:'/home'}
]

const LeftSideBar:React.FC<Props> = ({
    open, toggleDrawer
}) => {
  const navigateTo = useNavigate();
  const setTitle = AppContextStorage(state=> state.currentPage.setTitle);

  const mapToList =(menus:Menu[]) =>
    <List>
        {menus.map((item, index) => (
          <ListItem key={`${item.label}-${index}`} disablePadding>
            <ListItemButton onClick={() => {setTitle(item.label); navigateTo(item.path)}}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

  const list = () => (
    <Box
    sx={{width:250}}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {mapToList(homeMenu)}
      <Divider />
      {mapToList(sistemaMenus)}
      <Divider /> 
      {mapToList(usuarioMenus)}
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <Drawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default LeftSideBar;