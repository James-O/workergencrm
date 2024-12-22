
import React from 'react'
import { ShoppingCartOutlined, DollarOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import AddChart from '../contents/AddChart';

import RecentActivity from '../contents/RecentActivities';
import TableDesign from '../contents/TableDesign';
import CardDesign from '../contents/CardDesign';
import ModalDesign from './ModalDesign';


function Dashboard() {

    return (
        //<div className="ml-72 mt-[-34rem] mr-8">
        <div className="">
            <h1 className='text-blue-900 font-bold size-8 text-xl'>Dashboard</h1>
            <h2 className='mb-3'>Home / Dashboard</h2>
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-9">
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <CardDesign
                                card={{
                                    title: 'Sales',
                                    year: 'Today',
                                    icon: <ShoppingCartOutlined className='text-2xl mx-auto text-blue-400' />,
                                    price: '145',
                                    margin: '12% Increase',
                                }}
                            />
                        </div>

                        <div>
                            <CardDesign
                                card={{
                                    title: 'Revenue',
                                    year: 'This Month',
                                    icon: <DollarOutlined className='text-2xl text-green-700 mx-auto' />,
                                    price: '$3,268',
                                    margin: '8% Increase',
                                }}
                            />
                        </div>

                        <div>
                            <CardDesign
                                card={{
                                    title: 'Customers',
                                    year: 'This Year',
                                    icon: <UsergroupAddOutlined className='text-2xl text-red-600 mx-auto' />,
                                    price: '1,244',
                                    margin: '12%  Decrease',
                                }}
                            />
                        </div>

                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
                        <AddChart />
                    </div>

                </div>

                <div className="hidden lg:block lg:col-span-3">
                    <RecentActivity />
                </div>
            </div>
            <div><ModalDesign/></div>
            <div className='mt-6'>
                < TableDesign />
            </div>
        </div>
    )
}

export default Dashboard