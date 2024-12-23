import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from '../../components/images/profile.jpg'

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
                    <div className='flex gap-3'>
                        <div className='border p-4 w-1/3 rounded-xlg'>
                            <div className='grid grid-cols-4'>
                                <img src={Image} alt='#' className='col-span-1'/>
                                <div className='col-span-3'>
                                    <h1>Jane Reyes</h1>
                                    <p>COO. Northwind Traders</p>
                                </div>
                            </div>
                            <div>
                                <img src="http://placehold.it/" alt='#' />
                                <h1>Engagement with Jane Reyes</h1>
                                <p>Jane may be interested in upgrading expresso for her instore coffie shop</p>
                            </div>
                            <div>
                                <p>Expand business . High buying intent</p>
                            </div>
                        </div>
                        <div className='border p-4 w-1/3 rounded-xlg'>
                            <div>
                                <img src="http://placehold.it/" alt='#' />
                                <h1>Jane Reyes</h1>
                                <p>COO. Northwind Traders</p>
                            </div>
                            <div>
                                <img src="http://placehold.it/" alt='#' />
                                <h1>Engagement with Jane Reyes</h1>
                                <p>Jane may be interested in upgrading expresso for her instore coffie shop</p>
                            </div>
                            <div>
                                <p>Expand business . High buying intent</p>
                            </div>
                        </div>
                        <div className='border p-4 w-1/3 rounded-xlg'>
                            <div>
                                <img src="http://placehold.it/" alt='#' />
                                <h1>Jane Reyes</h1>
                                <p>COO. Northwind Traders</p>
                            </div>
                            <div>
                                <img src="http://placehold.it/" alt='#' />
                                <h1>Engagement with Jane Reyes</h1>
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