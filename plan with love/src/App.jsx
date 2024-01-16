import React from 'react';
import { useState } from 'react';
import data from './data.jsx'; 
import Tures from './components/tures.jsx';
import './App.css';

function App() {
  const [tures, setTures] = useState(data);

  function removeTure(id){
    
    const newTures = tures.filter(ture => ture.id !== id);
    setTures(newTures);
  }

  function refreshPage(){
    setTures(data);
  }

  if(tures.length === 0){
      return(
        <div className='refreshBtn'>
          <h3>No ture left</h3>
          <button className='bg-gray-500 rounded-md px-3 text-white font-bold'
            onClick={refreshPage}
          >refresh</button>
        </div>
      );
  }

  return (
    <div className='App'>
        <Tures tures={tures} removeTure = {removeTure} ></Tures>     
    </div>
  );
}

export default App;