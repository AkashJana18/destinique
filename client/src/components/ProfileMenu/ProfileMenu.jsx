import React from "react";
import { Avatar,Button,  Menu } from "@mantine/core";

const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture}  radius="xl"/>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Favorites</Menu.Item>
        <Menu.Item>Favorites</Menu.Item>
        <Menu.Item>Favorites</Menu.Item>
        <Menu.Item>Favorites</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
