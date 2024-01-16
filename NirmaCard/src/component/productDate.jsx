import './productDate.css'
import React from 'react';

function ProductDate(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className='bg-gray-800 text-white p-2 rounded-md text-center leading-8 text-2xl'>
            <div className='text-xl font-bold'>{month}</div>
            <div className='text-xl'>{day}</div>
            <div className=' text-xl font-bold'>{year}</div>
        </div>
    );
}

export default ProductDate;