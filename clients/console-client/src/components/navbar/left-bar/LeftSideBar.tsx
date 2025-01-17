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


type Props={
    open:boolean,
    toggleDrawer:( open:boolean) =>
                    (event: React.KeyboardEvent | React.MouseEvent) => void
}

const menus = [
    {label:'Usuário', icon:<AccountCircleIcon/>, path:''}
]   

const LeftSideBar:React.FC<Props> = ({
    open, toggleDrawer
}) => {
  

  const list = () => (
    <Box
    sx={{width:250}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider /> 
      <List>
        {menus.map((item, index) => (
          <ListItem key={`${item.label}-${index}`} disablePadding>
            <ListItemButton href={item.path}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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