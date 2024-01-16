import { useState } from 'react';
import './from.css';

function Formproduct(props){

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

        let obj = {
            title : title,
            date : date
        }
        function OnaddCart(event){
            event.preventDefault();
            props.OnsaveProduct(obj);
            setDate('');
            setTitle('');
        }
        

    function OnNewItem(event){
        setTitle(event.target.value);
    }

    function OnNewDate(event){
       setDate(event.target.value);
    }

    return(
        <form>
            <div  className="bg-blue-300 form rounded-md">
                <label htmlFor="title  " className="text-xl mx-2 rounded-md mb-2">Title</label>
                <input type="text" className="p-2 rounded-md" value={title} onChange={OnNewItem}/>
                <input type="date" name="" id=""  value = {date} className="block p-2 rounded-md" onChange={OnNewDate}/>
                <button className="block bg-sky-700 p-3 rounded-md" 
                    onClick={OnaddCart}    
                >add product</button>
            </div>
        </form>
    );
}

export default Formproduct;