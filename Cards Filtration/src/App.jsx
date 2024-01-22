import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { toast } from "react-toastify";
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import Card from './Components/Card';
import { filterData, apiUrl } from "./data"
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import React from 'react';


function App() {
  // console.log(filterData);

  const [Courses, setCourses] = useState([]);
  const [loding, setLoding] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);
  async function featchData() {
    setLoding(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data)
    }
    catch (error) {
      toast.error("nework me dikkat he kya");
    }
    setLoding(false);
  }

  // only ones []
  useEffect(() => {
    featchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData}
          category={category}
          setcategory={setcategory}
        />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex 
           justify-center items-center min-h-[50vh]'>
        {
          loding ? (<Spinner />) : (<Cards Courses={Courses} category={category} />)
        }
      </div>
    </div>
  )
}

export default App
