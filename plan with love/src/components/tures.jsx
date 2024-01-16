import Card from "./cards";
import React from "react";
import App from "../App";

function Tures({tures, removeTure}){
    return (
        <div className="tures">
            <div className="heading">
                <h2>Plan With BroS</h2>
            </div>
            <div className="AllCards">
                {
                    tures.map((ture) => {
                        return <Card {...ture} removeTure = {removeTure}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tures;