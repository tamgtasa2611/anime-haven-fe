import { Avatar, Flex } from "antd";
import React from "react";
import { Typography } from "antd";
import { UserOutlined, ArrowLeftOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    label: (
      <Flex gap="small" align="center">
        <Avatar>User</Avatar>
        <Flex vertical>
          <Text>Tam Nguyen</Text>
          <Text type="secondary">Admin</Text>
        </Flex>
      </Flex>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Flex align="center" gap="small">
        <UserOutlined />
        Profile
      </Flex>
    ),
    key: "1",
  },
  {
    label: (
      <Flex align="center" gap="small">
        <SettingOutlined />
        Settings
      </Flex>
    ),
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Flex align="center" gap="small">
        <ArrowLeftOutlined />
        Sign out
      </Flex>
    ),
    key: "3",
  },
];

const Profile = () => {
  return (
    <Flex align="center">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()} className="h-fit">
          <Avatar>User</Avatar>
        </a>
      </Dropdown>
    </Flex>
  );
};

export default Profile;
