import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { UnorderedListOutlined, FileAddOutlined } from "@ant-design/icons";
export default function Navigation() {
  let activeStyle = {
    color: "#1677ff",
  };
  let notActiveStyle = {
    color: "#ffffff",
  };
  const items = [
    {
      key: "1",
      icon: (
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
        >
          <UnorderedListOutlined className="ant-icons" /> To do list
        </NavLink>
      ),
    },
    {
      key: "2",
      icon: (
        <NavLink
          to="/create"
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
        >
          <FileAddOutlined className="ant-icons" />
          Create Duty
        </NavLink>
      ),
    },
  ];
  return (
    <Menu theme="dark" mode="horizontal" items={items} />
  );
}
