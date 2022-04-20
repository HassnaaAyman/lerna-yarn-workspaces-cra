/**
 *
 *
 * @format
 */

/* eslint-disable react-hooks/exhaustive-deps */

import { ChangeEvent, useEffect, useState } from 'react';
import { OrdersData } from '@lucifer/infrastructure/interfaces/orders.interface';
import { ActionsContainer, StyledTable } from './style';
import { ColumnsType } from 'antd/lib/table';
import FetchRequests from '@lucifer/api/fetchRequests';
import EditIcon from '../assets/eye-regular';
import { useNavigate } from 'react-router-dom';
import SearchInput from '@lucifer/components/src/common/SearchInput';
import { Button, Radio as AntDRadio, RadioChangeEvent } from 'antd';
import Modal from '@lucifer/components/src/common/Modal';
import Radio from '@lucifer/components/src/common/Radio';

const Orders = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<OrdersData[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [statuses, setStatuses] = useState<
    Array<{ text: string; value: string }>
  >([]);
  const [value, setValue] = useState('delivered');
  const [statusUpdated, setStatusUpdated] = useState(false);

  const getOrders = new FetchRequests();
  const getStatuses = new FetchRequests();
  const updateStatus = new FetchRequests();

  useEffect(() => {
    setLoading(true);
    getOrders
      .getRequests(`/orders?_page=${page}&_limit=${pageSize}&q=${searchValue}`)
      .then((res: any) => {
        setLoading(false);
        setData(res?.data);
      })
      .catch((err) => {
        setLoading(false);
        return err.error;
      });
  }, [page, searchValue, pageSize, statusUpdated]);

  useEffect(() => {
    getStatuses
      .getRequests(`/statuses`)
      .then((res: any) => {
        setStatuses(res.data);
      })
      .catch((err) => {
        return err.error;
      });
  }, []);

  const columns: ColumnsType<any> | undefined = [
    {
      title: 'Order Id',
      dataIndex: 'orderId',
      key: 'orderId',
      sorter: (a, b) => a.orderId - b.orderId,
    },
    {
      title: 'Drop Id',
      dataIndex: 'dropId',
      key: 'dropId',
      sorter: (a, b) => a.dropId - b.dropId,
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      sorter: (a, b) => (a.region > b.region ? 1 : -1),
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
      sorter: (a, b) => (a.area > b.area ? 1 : -1),
    },
    {
      title: 'Shipping Company',
      dataIndex: 'shippingCompany',
      key: 'shippingCompany',
      sorter: (a, b) => (a.shippingCompany > b.shippingCompany ? 1 : -1),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => (a.status > b.status ? 1 : -1),
      filters: statuses,
      onFilter: (value, record) => record.status.startsWith(value),
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      sorter: (a, b) => (a.comment > b.comment ? 1 : -1),
    },
    {
      title: 'Last Status',
      dataIndex: 'lastStatus',
      key: 'lastStatus',
      sorter: (a, b) => (a.lastStatus > b.lastStatus ? 1 : -1),
    },
    {
      title: 'Actions',
      dataIndex: 'orderId',
      render: (id: number) => (
        <EditIcon onClick={() => navigate(`/orders/${id}`)} />
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  const handlePagination = (value: number) => {
    setPage(value);
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onShowSizeChange = (current: any, pageSize: any) => {
    setPageSize(pageSize);
  };

  const hasSelected = selectedRowKeys.length > 0;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setLoading(true);
    updateStatus
      .PatchRequests('/orders/10559', {
        ids: selectedRowKeys,
        status: value,
      })
      .then(() => {
        setStatusUpdated(true);
        setLoading(false);
      })
      .catch((err) => {
        setStatusUpdated(false);
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <ActionsContainer>
        <Button type='primary' disabled={!hasSelected} onClick={showModal}>
          Update Status
        </Button>
        <SearchInput
          placeholder='Search'
          handleChange={(e) => handleSearchInput(e)}
        />
        <Modal
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          title='Update Order Status'>
          <AntDRadio.Group onChange={onChange} value={value}>
            {statuses?.map((status, index) => (
              <Radio value={status.value} key={index}>
                {status.text}
              </Radio>
            ))}
          </AntDRadio.Group>
        </Modal>
      </ActionsContainer>
      <StyledTable
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        // @ts-ignore
        rowKey={(record: OrdersData) => record?.orderId}
        loading={loading}
        pagination={{
          position: ['bottomLeft'],
          total: 18,
          showSizeChanger: true,
          onShowSizeChange: onShowSizeChange,
          onChange: (value: number) => handlePagination(value),
        }}
      />
    </>
  );
};

export default Orders;
