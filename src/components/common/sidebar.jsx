import React from "react";
import {
  Image,
  List,
  ListItem,
  ListTitle,
  LogoBox,
  Sidebar,
} from "./sidebar.styled";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo_white.png";
import dashboard from "../../images/dashboard.svg";
const SideBar = () => {
  return (
    <Sidebar>
      <LogoBox>
        <Link to="/dashboard">
          <Image src={logo} alt="logo" />
        </Link>
      </LogoBox>
      <List>
        <ListItem>
          <NavLink to="/dashboard" activeclassname="active">
            <Image src={dashboard} alt="Dashboard" />
            <ListTitle>Dashboard</ListTitle>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/users" activeclassname="active">
            <Image src={dashboard} alt="Dashboard" />
            <ListTitle>Users</ListTitle>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/imageCropper" activeclassname="active">
            <Image src={dashboard} alt="Dashboard" />
            <ListTitle>Image Cropper</ListTitle>
          </NavLink>
        </ListItem>
      </List>
    </Sidebar>
  );
};
export default SideBar;
