"use client";

import { getUsers } from "@/services/users";
import { Button, Flex, Table, TableColumnsType, TableProps, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import CreateOrEditModal from "@/components/admin/users/CreateOrEditModal";

const { Title } = Typography;
interface IUser {
  key: React.Key;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  avatar: string;
  roleId: number;
}

const columns: TableColumnsType<IUser> = [
  {
    key: "id",
    title: "ID",
    dataIndex: "id",
  },
  {
    key: "fullName",
    title: "Name",
    dataIndex: "fullName",
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "phone",
    title: "Phone",
    dataIndex: "phone",
  },
];

const onChange: TableProps<IUser>["onChange"] = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRequest = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
      return data;
    } catch (e) {
      console.log(e);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleRequest();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex justify="space-between" align="center" className="mb-4">
        <Title level={5}>Users table</Title>,
        <Flex gap="small">
          <Button type="primary" onClick={showModal}>
            Add user
          </Button>
          <Button icon={<ReloadOutlined />} onClick={handleRequest}></Button>
        </Flex>
      </Flex>
      <Table
        bordered={true}
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
        loading={loading}
        onChange={onChange}
      />
      <CreateOrEditModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Users;
