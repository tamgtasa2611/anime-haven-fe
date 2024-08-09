import { Modal } from "antd";
import React from "react";

type Props = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const CreateOrEditModal = ({ isModalOpen, handleOk, handleCancel }: Props) => {
  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CreateOrEditModal;
