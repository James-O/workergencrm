import React, { useState, Component } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import { MessageOutlined } from '@mui/icons-material';
import { Carousel } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ModalDesign = () => {
    const [open, setOpen] = useState(false);
    //casousel
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
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
                    <p className='mb-2'>
                        Copilot have pinpointed 20 key leads that show strong purchase intent and are actively engaging. This leads need your focus.
                    </p>
                    <div className='grid grid-cols-12 gap-2 w-full'>
                        <div className="slider-container col-span-8">
                            <Slider {...settings}>
                                <div className='px-2'>
                                    <div className='border p-4 rounded-2xl'>
                                        {/* <Carousel autoplay > */}
                                        <div className='flex gap-2'>
                                            <Image
                                                src="/image/profile.png"
                                                alt='random-image'
                                                width={40}
                                                height={10}
                                                className='rounded-full'
                                            />
                                            <div className=''>
                                                <h1>Jane Reyes</h1>
                                                <p>COO. Northwind Traders</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='bg-slate-100 p-2 rounded-2xl'>
                                                <div className='flex gap-3'>
                                                    <MessageOutlined />
                                                    <h1 className='font-bold'>Engagement with Jane Reyes</h1>
                                                </div>
                                                <p>Jane may be interested in upgrading expresso for her instore coffie shop</p>
                                            </div>
                                            <div className='mt-2'>
                                                <p>Expand business. High buying intent</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='border p-4 rounded-2xl'>
                                    <div className='grid grid-cols-5'>
                                        <Image
                                            src="/image/profile3.png"
                                            alt='random-image'
                                            width={40}
                                            height={10}
                                            className='rounded-full col-span-1 col-'
                                        />
                                        <div className='col-span-4'>
                                            <h1>Allan Munger</h1>
                                            <p>Head estate development . Contoso</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='bg-slate-100 p-2 rounded-2xl'>
                                            <div className='flex gap-3'>
                                                <MessageOutlined />
                                                <h1 className='font-bold'>Prepare for meeting with Allan</h1>
                                            </div>
                                            <p>Prepare for high-buying intent meeting Copilot scheduled for 2 PM.</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p>Expand business. High buying intent</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className='border p-4 rounded-xlg col-span-4'>
                            <p>Other key activities</p>
                            <div className='flex gap-1'>
                                <Image
                                    src="/image/profile.png"
                                    alt='random-image'
                                    width={40}
                                    height={10}
                                    className='rounded-full'
                                />
                                <div>
                                    <h1 className='font-semibold'>Cafe A100 for woodland bank</h1>
                                    <p>Woodland . $280000 . 8 days to close</p>
                                </div>
                            </div>
                            <div className='flex gap-1'>
                                <MessageOutlined />
                                <p className='bg-slate-100 p-1'>Review draft and reply to Chris Naido</p>
                            </div>
                            <div >
                                <div className='flex gap-1'>
                                    <MessageOutlined />
                                    <div>
                                        <h1 className='font-semibold'>Partnership opportunity for Fabrikam</h1>
                                        <p>Fabricakam . $5000000 . 12 days to close</p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <MessageOutlined />
                                    <p className='bg-slate-100 p-1'>Prepare me for Fabricam's meeting</p>
                                </div>
                            </div>
                            <p>Show all key activities</p>
                        </div>

                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalDesign;