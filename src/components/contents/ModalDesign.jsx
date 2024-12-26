import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import { MessageOutlined } from '@mui/icons-material';

const ModalDesign = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Leads
            </Button>
            <Modal
                title="Leads"
                top
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}

            >
                <div>
                    some contents...
                    <div className='flex gap-3 p'>
                        <div className='border p-4 w-1/3 rounded-xlg'>
                            <div className='grid grid-cols-5'>
                                <Image
                                    src="/image/profile.png"
                                    alt='random-image'
                                    width={40}
                                    height={10}
                                    className='rounded-full'
                                />
                                <div className='col-span-4'>
                                    <h1>Jane Reyes</h1>
                                    <p>COO. Northwind Traders</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-3'>
                                    <MessageOutlined />
                                    <h1 className='font-bold'>Engagement with Jane Reyes</h1>
                                </div>
                                <p>Jane may be interested in upgrading expresso for her instore coffie shop</p>
                            </div>
                            <div>
                                <p>Expand business . High buying intent</p>
                            </div>
                        </div>
                        <div className='border p-4 w-1/3 rounded-xlg'>
                            <div className='grid grid-cols-5'>
                                <Image
                                    src="/image/profile.png"
                                    alt='random-image'
                                    width={40}
                                    height={10}
                                    className='rounded-full'
                                />
                                <div className='col-span-4'>
                                    <h1>Jane Reyes</h1>
                                    <p>COO. Northwind Traders</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-3'>
                                    <MessageOutlined />
                                    <h1 className='font-bold'>Engagement with Jane Reyes</h1>
                                </div>
                                <p>Jane may be interested in upgrading expresso for her instore coffie shop</p>
                            </div>
                            <div>
                                <p>Expand business . High buying intent</p>
                            </div>
                        </div>
                        <div className='border p-4 w-1/3 rounded-xlg'>
                            <div className='flex gap-2'>
                                <Image
                                    src="/image/profile.png"
                                    alt='random-image'
                                    width={40}
                                    height={10}
                                    className='rounded-full'
                                />
                                <div>
                                    <h1 className='font-bold'>Jane Reyes</h1>
                                    <p>COO. Northwind Traders</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-3'>
                                    <MessageOutlined />
                                    <h1 className='font-bold'>Engagement with Jane Reyes</h1>
                                </div>
                                <p>Jane may be interested in upgrading expresso for her instore coffie shop</p>
                            </div>
                            <div>
                                <p>Expand business . High buying intent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalDesign;