import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FaBeer } from "react-icons/fa";
import reviews from "./data.js";
import './App.css'
import Tesimonial_haeding from './Components/Tesimonial_haeding.jsx';
import Reviews_card from './Components/Reviews_card.jsx';


function App() {
  // console.log("data");
  // console.log(reviews[1].text);
  const[index, setindex] = useState(0);

  return (
    <div className='w-100vw h-[auto] mt-[6rem]'>
      <Tesimonial_haeding/>
      <Reviews_card index = {index} setindex = {setindex}/>
    </div>
  )
}

export default App
