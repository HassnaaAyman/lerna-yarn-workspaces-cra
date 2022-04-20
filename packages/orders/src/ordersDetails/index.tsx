/**
 * /* eslint-disable @typescript-eslint/no-redeclare
 *
 * @format
 */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchRequests from '@lucifer/api/fetchRequests';
import {
  Head,
  SubHead,
  Section,
  BoxInfo,
  BoxHeader,
  BoxTitle,
  Boxbody,
  Container,
  StyledRow,
  StyledTable,
} from './style';
import { Button } from 'antd';
import { OrdersData } from '@lucifer/infrastructure/interfaces/orders.interface';

const OrderDetails = () => {
  let { id } = useParams();
  const [orderDetails, setOrderDetails] = useState<OrdersData>();
  const [loading, setLoading] = useState(false);
  const getOrdersByID = new FetchRequests();

  useEffect(() => {
    setLoading(true);
    getOrdersByID
      .getRequests(`/orders/${id}`)
      .then((res) => {
        setLoading(false);
        setOrderDetails(res.data);
      })
      .catch((err) => {
        setLoading(false);
        return err.error;
      });
  }, []);

  const { products, ...orderDetailsrest } = orderDetails || {};

  const columns = [
    {
      title: 'Product ID',
      dataIndex: 'productId',
      key: 'productId',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'Line ID	',
      dataIndex: 'lineId',
      key: 'lineId',
    },
    {
      title: 'Variation',
      dataIndex: 'variation',
      key: 'variation',
    },
    {
      title: 'Selling Price	',
      dataIndex: 'sellingPrice	',
      key: 'sellingPrice',
    },
    {
      title: 'Regular Price	',
      dataIndex: 'regularPrice	',
      key: 'regularPrice',
    },
    {
      title: 'Order Item Type',
      dataIndex: 'orderItemType	',
      key: 'orderItemType',
    },
    {
      title: ' ',
    },
    {
      title: ' ',
    },
    {
      title: ' ',
    },
    {
      title: ' ',
    },
  ];

  const OrderColumns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Drop ID',
      dataIndex: 'dropId',
      key: 'dropId',
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Shipping Company',
      dataIndex: 'shippingCompany',
      key: 'shippingCompany',
      render: () => <Button type='primary'>Change</Button>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render: () => (
        <>
          <Button type='primary' style={{ marginBottom: '10px' }}>
            Add Comment
          </Button>
          <Button>Logs</Button>
        </>
      ),
    },
    {
      title: 'Last Status',
      dataIndex: 'lastStatus',
      key: 'lastStatus',
    },
    {
      title: 'Creation Date',
      dataIndex: 'creationDate',
      key: 'creationDate',
    },
    {
      title: 'Drop Shipper User ID',
      dataIndex: 'dropShipperUserID',
      key: 'dropShipperUserID',
    },
    {
      title: 'Drop Shipper Name',
      dataIndex: 'dropShipperName',
      key: 'dropShipperName',
    },
    {
      title: 'Drop Shipper Email',
      dataIndex: 'dropShipperEmail',
      key: 'dropShipperEmail',
    },
    {
      title: 'Drop Shipper Mobile',
      dataIndex: 'dropShipperMobile',
      key: 'dropShipperMobile',
    },
    {
      title: 'Consumer Name',
      dataIndex: 'consumerName',
      key: 'consumerName',
    },
    {
      title: 'Consumer Mobile1',
      dataIndex: 'consumerMobile1',
      key: 'consumerMobile1',
    },
    {
      title: 'Consumer Mobile2',
      dataIndex: 'consumerMobile2',
      key: 'consumerMobile2',
    },
    {
      title: 'Creation Date',
      dataIndex: 'creationDate',
      key: 'creationDate',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Store Name',
      dataIndex: 'storeName',
      key: 'storeName',
    },
    {
      title: 'Order Total',
      dataIndex: 'orderTotal',
      key: 'orderTotal',
    },
    {
      title: 'Shipping Cost',
      dataIndex: 'shippingCost',
      key: 'shippingCost',
    },
    {
      title: 'Shipping Cost',
      dataIndex: 'shippingCost',
      key: 'shippingCost',
    },
  ];

  return (
    <>
      <Head>
        Orders Management <SubHead>View Order</SubHead>
      </Head>
      <Section>
        <BoxInfo>
          <BoxHeader>
            <BoxTitle>View Order</BoxTitle>
            <Button type='primary'>Re Order Request</Button>
          </BoxHeader>

          <Boxbody>
            <Container>
              <StyledRow>
                <StyledTable
                  dataSource={[orderDetailsrest]}
                  columns={OrderColumns}
                  //@ts-ignore
                  rowKey={(record?: OrdersData) => record?.orderId}
                  pagination={false}
                  loading={loading}
                />
              </StyledRow>
              <StyledRow style={{ overflowX: 'scroll' }}>
                {products?.map((product) => (
                  <StyledTable
                    dataSource={[product]}
                    columns={columns}
                    rowKey={product.productId}
                    size='large'
                    pagination={false}
                    loading={loading}
                  />
                ))}
              </StyledRow>
            </Container>
          </Boxbody>
        </BoxInfo>
      </Section>
    </>
  );
};

export default OrderDetails;
