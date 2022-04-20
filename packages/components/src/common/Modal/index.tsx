/** @format */

import { Modal as AntDModal } from 'antd';

interface Props {
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({
  children,
  handleOk,
  handleCancel,
  isModalVisible,
  title,
}) => {
  return (
    //@ts-ignore
    <AntDModal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}>
      {children}
    </AntDModal>
  );
};

export default Modal;
