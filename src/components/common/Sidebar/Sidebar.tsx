"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  ProductOutlined,
  UserOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import logo from "../../../../public/anime-haven-logos/png/logo-no-background.png";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: <Link href={"/admin"}>Dashboard</Link> },
  { key: "2", icon: <UserOutlined />, label: <Link href={"/admin/users"}>Users</Link> },
  { key: "3", icon: <ProductOutlined />, label: "Products" },
  {
    key: "sub2",
    label: "Navigation One",
    icon: <AppstoreOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      className="h-full"
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
