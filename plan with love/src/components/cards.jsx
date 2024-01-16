import { useState } from "react";


function Card({id, name, info, image, price, removeTure}) {
    const [readmore, setSeeMore] = useState(false);

    function readMoreHandler() {
        setSeeMore(!readmore);
    }   

    let  description;
    if(!readmore){
        description= `${info.substring(0, 200)}....`;
    }else{
        description = info;
    }


    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="cityPrice">
                <h4 className="Price">$ {' '} {price}</h4>
                <h4 className="City">{name}</h4>
            </div>
            <div>
                {description}
                <span onClick={readMoreHandler} className="readMore"> 
                    {readmore ? `Show less` : 'Show more'}
                </span>
            </div>
            <button className= "NotIntrestbtn" onClick={() => removeTure(id) }>Not Intrested</button>
        </div>
    );
}

export default Card;