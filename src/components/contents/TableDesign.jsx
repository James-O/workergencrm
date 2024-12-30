'use client'
import React, { useState } from 'react';
import { Button, Space, Table } from 'antd';
const data = [
  {
    key: '1',
    customer: 'John Brown',
    product:'product one',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    customer: 'Jim Green',
    product:'product two',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    customer: 'Joe Black',
    product:'product three',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    customer: 'Jim Red',
    product:'product four',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
const TableDesign = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
      ],
      filteredValue: filteredInfo.customer || null,
      onFilter: (value, record) => record.customer.includes(value),
      sorter: (a, b) => a.customer.length - b.customer.length,
      sortOrder: sortedInfo.columnKey === 'customer' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      sorter: (a, b) => a.product - b.product,
      sortOrder: sortedInfo.columnKey === 'product' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div className='sm:w-3/4 md:w-4/5 lg:w-full'>
      <Space
        style={{
          marginBottom: 16,
        }}
        className='lg:flex sm:hidden hidden'
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
};
export default TableDesign;