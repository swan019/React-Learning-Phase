import reviews from "../data.js";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Card.css"
// import { FaQuoteLeft } from "react-icons/fa";

function Reviews_card(props) {
    let index = props.index;
    let setindex = props.setindex;
    let data = reviews[index];
    // console.log(data);
    function prevHandle() {
         if(index == 0){
            index = Object.keys(reviews).length-1;
        }else{
            index -= 1;
        }
        setindex(index);
    }
    
    function NextHand(){
        if(index === Object.keys(reviews).length-1){
            index = 0;
        }else{
            index += 1;
        }
        setindex(index);
    }

    function randomUser() {
        let index = Math.floor(Math.random() * Object.keys(reviews).length)
        console.log(index);
        setindex(index);
    }
    return (
        <div className="mt-[3rem] flex content-center justify-center w-[100vw] h-auto">
            <div className="md:relative w-[700px] flex items-center justify-center h-full p-[2rem] flex-col gap-6  bg-gray-300 rounded-md 
            ">
                <div className="absolute top-[-80px] left-[20px]">
                    <div className=" rounded-[50%] w-[170px] h-[170px] bg-violet-400 z-[-1]"></div>
                    <img src={data.image} alt="" className = "absolute rounded-[50%] w-[170px] top-[6px] left-[-8px] z-[0]"/>
                </div>

                <div className="text-center">
                    <p className="text-[1.7rem] font-semibold">
                        {data.name}
                    </p>
                    <p className="text-[1.1rem] font-semibold text-violet-400">
                        {data.job}
                    </p>
                </div>
                <div>
                    <FaQuoteLeft  className="icons"/>
                </div>
                <p className="text-[1.1rem] font-normal">
                    {data.text}
                </p>
                <div>
                    <FaQuoteRight className="icons"/>
                </div>

                <div className="flex gap-3 mt-[0.5rem]">
                    <button><HiChevronLeft className="icons size-8" onClick={prevHandle}/></button>
                    <button><HiChevronRight className="icons size-8" onClick={NextHand}/></button>
                </div>
                <div className="mb-[-10px]">
                    <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none  p-2 rounded-md font-semibold text-white"
                        onClick={randomUser}
                    >Suprise Me</button>
                </div>
            </div>
        </div>
    );

}

export default Reviews_card;