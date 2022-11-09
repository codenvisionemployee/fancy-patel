import * as React from "react";
import './App.css'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3Icon from "@mui/icons-material/Person3";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StyleIcon from '@mui/icons-material/Style';
import HandymanIcon from '@mui/icons-material/Handyman';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Table from "./Table";

const drawerWidth = 240;

export default function Main(props) {
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Creative Entries
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { name: " Dashboard", url: "Dashboard", icon: <DashboardIcon /> },
              {
                name: " Reservation Manangement",
                url: "Reservation",
                icon: <Person3Icon />,
              },
              {
                name: " Customer Management",
                url: "Customer",
                icon: <SupportAgentIcon />, 
              },
              { name: "Materials", url: "Materials", icon: <DashboardIcon /> },
              { name: "Report", url: "Report", icon: <DashboardIcon /> },
              { name: "User Access", url: "UserAccess", icon: <AccountCircleIcon/>},
              {
                name: "Account Management", url: "Account", icon:<AccountBalanceIcon/> },
        {name: "Tags Management", url: "Tags", icon:<StyleIcon/>  },
        {name: "System Settings", url: "System", icon:< HandymanIcon/>},
        {name: "Marketing", url: "Marketing", icon: < LocalConvenienceStoreIcon/>},
        {name: "Log out", url: "Logout", icon:< LocalAirportIcon/>},
            ].map((singleList, index) => (
              <ListItem
                key={singleList.name}
                disablePadding
               onClick={() => redirect(singleList.url)}
              >
                <ListItemButton>
                  <ListItemIcon>{singleList.icon}</ListItemIcon>
                  <ListItemText primary={singleList.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <h2>Dashboard</h2>
          <h4>Tajimaya - Great World City</h4>
          <p>welcome Back,SINGLE OUTLET RESRAURANT MANAGER!</p>
          <h3>Notice Board</h3>
          
          <div className="row">
          <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.20, 0.200, 0.20],
        },
      }}
    />
    
    <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.20, 0.200, 0.20],
        },
      }}
    />
    
    <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.20, 0.200, 0.20],
        },
      }}
    />
    
    <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.20, 0.200, 0.20],
        },
      }}
    />
     <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.20, 0.200, 0.20],
        },
      }}
    />
    
    <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.20, 0.200, 0.20],
        },
      }}
    />
    
    
    <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.20, 0.200, 0.20],
        },
      }}
    />
    
    </div>
        </Typography>
        <Typography paragraph>
          <h2>Intrigated Activity List</h2>
          <Table/>
        </Typography>
      </Box>









    </Box>
  );
}
