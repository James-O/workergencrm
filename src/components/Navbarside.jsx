"use client"
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import NavMenu from './Navmenu';
const { Header, Sider, Content } = Layout;
const Navbarside = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div className="demo-logo-vertical" /> */}
        <Menu
        className='pt-3 no-underline'
        //   theme="dark"
          //mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Recent',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Pined',
            },
            {
              key: '4',
              label: 'My works',
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'Sales accelerator',
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: 'Dashboards',
            },
            {
              key: '7',
              icon: <UploadOutlined />,
              label: 'Activities',
            },
            {
              key: '8',
              label: 'Customers',
            },
            {
              key: '9',
              icon: <UploadOutlined />,
              label: 'Accounts',
            },
            {
              key: '10',
              icon: <UploadOutlined />,
              label: 'Contacts',
            },
            {
              key: '11',
              label: 'Sales',
            },
            {
              key: '12',
              icon: <UploadOutlined />,
              label: 'Leads',
            },
            {
              key: '13',
              icon: <UploadOutlined />,
              label: 'Opportunities',
            },
            {
              key: '14',
              icon: <UploadOutlined />,
              label: 'Competitors',
            },
            {
              key: '15',
              label: 'Collateral',
            },
            {
              key: '16',
              icon: <UploadOutlined />,
              label: 'Quotes',
            },
            {
              key: '17',
              icon: <UploadOutlined />,
              label: 'Orders',
            },
            {
              key: '18',
              icon: <UploadOutlined />,
              label: 'Invoices',
            },
            {
              key: '19',
              icon: <UploadOutlined />,
              label: 'Products',
            },
            {
              key: '20',
              icon: <UploadOutlined />,
              label: 'Sales literature',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
            {/* navbar here */}
          <div className='flex gap-5'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          {/* <div>Home</div> */}
          <NavMenu/>
          </div>
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Navbarside;