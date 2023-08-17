import {
    Sidebar,
    Menu,
    MenuItem,
    useProSidebar,
    SubMenu,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//import foto from "";
import { Grid } from "@mui/material";

import { NavLink } from "react-router-dom";

const capitalizeFirstLetter = (area) => {
  return area.toUpperCase();
};


function BarraLateral({ campos, area }) {
    const { collapseSidebar } = useProSidebar();
  
    return (
      <div id="sidebar" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar
          backgroundColor="#eef0f9"
          rtl={false}
          style={{ height: "100vh", position: "sticky", top: 0 }}
        >
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            > <h3> {capitalizeFirstLetter(area)} </h3>  </MenuItem>
  
            {campos.map((campo) => {
              if (campo.sub) {
                return (
                  <NavLink
                    to={campo.link}
                    activeClassName="active"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <MenuItem icon={campo.icon}>{campo.nombre}</MenuItem>
                  </NavLink>
                );
              } else {
                return (
                  <SubMenu icon={campo.icon} label={campo.nombre}>
                    {campo.submenus.map((submenu) => (
                      <Grid marginLeft="5%">
                        <NavLink
                          to={submenu.link}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                    
                            <MenuItem >
                            • {submenu.nombre}
                            </MenuItem>
                        
                          
                        </NavLink>
                      </Grid>
                    ))}
                  </SubMenu>
                );
              }
            })}
          </Menu>
        </Sidebar>
      </div>
    );
  }
  
  export default BarraLateral;
  
