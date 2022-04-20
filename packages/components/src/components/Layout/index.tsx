/** @format */

import React, { FC, useEffect, useState } from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { HomeOutlined, ShopOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { StyledHeader } from './style';
import Logout from '../Logout';

const { Content, Footer, Sider } = AntdLayout;
const { SubMenu } = Menu;

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  let location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const [current, setCurrent] = useState(
    location.pathname === '/' || location.pathname === ''
      ? '/home'
      : location.pathname,
  );

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntdLayout>
      <Sider breakpoint='lg' trigger={null} collapsible collapsed={collapsed}>
        <div
          className='logo'
          style={{
            margin: '16px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
          }}>
          Lucifer Operations
        </div>

        <Menu
          theme='dark'
          mode='inline'
          style={{ marginTop: '30%' }}
          onClick={handleClick}
          selectedKeys={[current]}
          defaultSelectedKeys={['/home']}>
          <Menu.Item key='/home' icon={<HomeOutlined />}>
            <Link to='/home'>Home</Link>
          </Menu.Item>

          <SubMenu key='sub1' icon={<ShopOutlined />} title='Orders'>
            <Menu.Item key='/orders'>
              <Link to='/orders'>All Orders</Link>
            </Menu.Item>

            <SubMenu key='sub2' icon={<ShopOutlined />} title='Fulfilment'>
              <Menu.Item key='Forward'>
                <Link to='/orders'>Forward</Link>
              </Menu.Item>
              <Menu.Item key='Exchange'>
                <Link to='/orders'>Exchange</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key='sub3' icon={<ShopOutlined />} title='Logistics'>
              <Menu.Item key='Forward2'>
                <Link to='/orders'>Forward</Link>
              </Menu.Item>
              <Menu.Item key='Exchange2'>
                <Link to='/orders'>Exchange</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key='sub4' icon={<ShopOutlined />} title='Return'>
              <Menu.Item key='Rejections'>
                <Link to='/orders'>Rejections</Link>
              </Menu.Item>
              <Menu.Item key='Exchange3'>
                <Link to='/orders'>Exchange</Link>
              </Menu.Item>

              <Menu.Item key='Refund'>
                <Link to='/orders'>Refund</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key='sub5' icon={<ShopOutlined />} title='Archive'>
              <Menu.Item key='Delivered'>
                <Link to='/orders'>Delivered</Link>
              </Menu.Item>
              <Menu.Item key='Cancelled'>
                <Link to='/orders'>Cancelled</Link>
              </Menu.Item>

              <Menu.Item key='Completed'>
                <Link to='/orders'>Completed</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>

          <Menu.Item key='/shipping' icon={<ShopOutlined />}>
            <Link to='/shipping'>Shipping</Link>
          </Menu.Item>

          <Menu.Item key='/dropshippers' icon={<ShopOutlined />}>
            <Link to='/dropshippers'>Dropshippers</Link>
          </Menu.Item>

          <Menu.Item key='/transactions' icon={<ShopOutlined />}>
            <Link to='/transactions'>Transactions</Link>
          </Menu.Item>

          <Menu.Item key='/access-management' icon={<ShopOutlined />}>
            <Link to='/access-management'>Access Management</Link>
          </Menu.Item>

          <Menu.Item key='/profile' icon={<ShopOutlined />}>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntdLayout>
        <StyledHeader>
          {collapsed ? (
            <MenuUnfoldOutlined
              className='trigger'
              onClick={toggle}
              style={{ color: 'white' }}
            />
          ) : (
            <MenuFoldOutlined
              className='trigger'
              onClick={toggle}
              style={{ color: 'white' }}
            />
          )}
          <Logout />
        </StyledHeader>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: '80vh' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
