"use client";

import { Header } from "antd/es/layout/layout";
import React from "react";
import { Avatar, Flex, Input } from "antd";
import type { GetProps } from "antd";
import { Typography } from "antd";
import Profile from "./Profile";

const { Text } = Typography;

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) => console.log(info?.source, value);

const Navbar = () => {
  return (
    <Header className="border shadow-sm" style={{ padding: "0 1rem", backgroundColor: "white" }}>
      <Flex align="center" justify="space-between" className="h-full">
        <Search
          placeholder="Type to search..."
          allowClear
          onSearch={onSearch}
          style={{ width: 240 }}
        />
        <Profile />
      </Flex>
    </Header>
  );
};

export default Navbar;
