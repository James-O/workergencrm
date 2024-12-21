
import React from 'react'
import {Dropdown, Space } from 'antd';
import {SettingOutlined, ShoppingCartOutlined, DollarOutlined,UsergroupAddOutlined} from '@ant-design/icons'
import AddChart from '../contents/AddChart';
import DropdownmenuOption from '../contents/Dropdownmenu';
import RecentActivity from '../contents/RecentActivities';
// import TableData from '@/components/Dashboard/TableData';


function Dashboard() {

    let CardX =({card})=>
        (
            <div className='p-3 h-36 bg-white rounded-md shadow-md'>
                <div className='flex'>
                    <h2 className='text-blue-900 font-bold mb-6 text-lg'>{card.title} | <span className='text-slate-300'>{card.year}</span></h2>
                    <div className='ml-auto'><DropdownmenuOption/></div>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='rounded-full flex w-12 h-10 bg-green-50 '>{card.icon}</div>
                    <div className='col-span-2'>
                        <h1 className='text-3xl font-bold text-blue-900'>{card.price}</h1>
                        <h3 className='text-green-900 font-bold mt-2'>{card.margin}</h3>
                    </div>
                </div>
            </div>
        )
  return (
    //<div className="ml-72 mt-[-34rem] mr-8">
    <div className="">
        <h1 className='text-blue-900 font-bold size-8 text-xl'>Dashboard</h1>
        <h2 className='mb-3'>Home / Dashboard</h2>
        <div className='grid grid-cols-6 gap-5'>
            <div className="col-span-4">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div>
                        <CardX 
                            card={{
                                title: 'Sales',
                                year: 'Today',
                                icon: <ShoppingCartOutlined className='text-2xl mx-auto text-blue-400'/>,
                                price: '145',
                                margin: '12% Increase',
                            }}
                        />
                    </div>

                    <div>
                        <CardX 
                            card={{
                                title: 'Revenue',
                                year: 'This Month',
                                icon: <DollarOutlined className='text-2xl text-green-700 mx-auto'/>,
                                price: '$3,268',
                                margin: '8% Increase',
                            }}
                        />
                    </div>

                    <div>
                        <CardX 
                            card={{
                                title: 'Customers',
                                year: 'This Year',
                                icon: <UsergroupAddOutlined className='text-2xl text-red-600 mx-auto'/>,
                                price: '1,244',
                                margin: '12%  Decrease',
                            }}
                        />
                    </div>
                    
                </div>
                 <div>
                    <AddChart/>
                </div>
                <div className='mt-6'>
                  {/* <TableData/> */}
                </div>
                <div className='mt-6'>
                  {/* <Products/> */}
                </div>
            </div>

            <div className="col-span-2">
                <RecentActivity/>
            </div>
        </div> 
    </div>  
  )
}

export default Dashboard