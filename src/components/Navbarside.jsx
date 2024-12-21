"use client"
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { IoHomeOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { TbPinned, TbNotebook } from "react-icons/tb";
import { MdOutlineDashboardCustomize,MdOutlineNoteAlt,MdOutlineAccountBalance,MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TfiNotepad } from "react-icons/tfi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { TiShoppingBag } from "react-icons/ti";
import { GiJetpack } from "react-icons/gi";
import { Button, Layout, Menu, theme } from 'antd';
import NavMenu from './Navmenu';
import Dashboard from './contents/Dashboard';

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
              icon: <IoHomeOutline />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <BsClockHistory />,
              label: 'Recent',
            },
            {
              key: '3',
              icon: <TbPinned />,
              label: 'Pined',
            },
            {
              key: '4',
              label: 'My works',
            },
            {
              key: '5',
              icon: < GiJetpack />,
              label: 'Sales accelerator',
            },
            {
              key: '6',
              icon: <MdOutlineDashboardCustomize />,
              label: 'Dashboards',
            },
            {
              key: '7',
              icon: <MdOutlineNoteAlt />,
              label: 'Activities',
            },
            {
              key: '8',
              label: 'Customers',
            },
            {
              key: '9',
              icon: <MdOutlineAccountBalance />,
              label: 'Accounts',
            },
            {
              key: '10',
              icon: <VscAccount />,
              label: 'Contacts',
            },
            {
              key: '11',
              label: 'Sales',
            },
            {
              key: '12',
              icon: <HiOutlinePhoneMissedCall />,
              label: 'Leads',
            },
            {
              key: '13',
              icon: <TiShoppingBag />,
              label: 'Opportunities',
            },
            {
              key: '14',
              icon: <MdOutlinePeopleAlt />,
              label: 'Competitors',
            },
            {
              key: '15',
              label: 'Collateral',
            },
            {
              key: '16',
              icon: <TfiNotepad />,
              label: 'Quotes',
            },
            {
              key: '17',
              icon: <TbNotebook />,
              label: 'Orders',
            },
            {
              key: '18',
              icon: <LiaFileInvoiceDollarSolid />,
              label: 'Invoices',
            },
            {
              key: '19',
              icon: <AiOutlineProduct />,
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
          <Dashboard/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Navbarside;