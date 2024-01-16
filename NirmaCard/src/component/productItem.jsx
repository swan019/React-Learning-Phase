import './productItem.css'
import ProductDate from './productDate';
import { useState } from 'react';



function ProductItem(props){
    //useState
    const title = props.title;
    // const [title, setTitle] = useState(props.title);
    // function addCart() {
    //     if(title != 'Popcorn'){
    //         setTitle('Popcorn');
    //     }else{
    //         setTitle(temp);
    //     }    
    // }
    
    return (
        <div className='productitem'>
            <ProductDate
                date = {props.date}    
            ></ProductDate>
            <div>
                 <h2 className='font-bold'>{title}</h2>
            </div>
            <button className='text-xl bg-black text-white p-1 rounded-md drop-shadow-2xl'
                >Add to cart
            </button>
        </div>
    );
}

export default ProductItem;