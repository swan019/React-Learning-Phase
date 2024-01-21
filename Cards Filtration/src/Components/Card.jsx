import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';

function Card(props) {
    let course = props.course;
    let lickCoursec = props.lickCoursec;
    let setlickCoursec = props.setlickCoursec;
    
    function clickHandler() {
        if(lickCoursec.includes(course.id)){
            // pehale se like hui he
            setlickCoursec( (prev) => prev.filter( (cid) => (cid !== course.id ) ) );
            toast.warning('Like remove');

        }else{
            if(lickCoursec.length === 0){
                setlickCoursec([course.id]);
            }else{
                setlickCoursec((prev) => [...prev , course.id])
            }
            toast.success('Liked cource')
        }
    }

    return (
        <div className="w-[300px]  bg-[#333] bg-opacity-75  text-white rounded-md overflow-hidden" >
            <div className="relative">
                <img className="" src={course.image.url} alt="" />
                <div className = "w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            lickCoursec.includes(course.id) ? (<FcLike fontSize= "1.75rem" />) :
                             (<FcLikePlaceholder fontSize= "1.75rem" />)
                        }
                    </button>
                </div>
            </div>
            <div className = "p-4">
                <p className = "text-ehite font-semibold text-lg leading-6">{course.title}</p>
                <p className = "mt-2 text-white">{course.description}</p>
            </div>
        </div>
    );
}

export default Card;