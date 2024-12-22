import React from 'react'
import DropdownmenuOption from '../contents/Dropdownmenu';
const CardDesign = ({ card }) => {
    return (
        <div className='p-3 bg-white rounded-md shadow-md'>
            <div className='flex'>
                <h2 className='text-blue-900 font-bold mb-6 text-lg'>{card.title} | <span className='text-slate-300'>{card.year}</span></h2>
                <div className='ml-auto'><DropdownmenuOption /></div>
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
}

export default CardDesign