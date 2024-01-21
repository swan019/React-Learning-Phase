import React, { useState } from "react";
import Card from "./Card";
function Cards(props) {
    let Courses = props.Courses;
    let category = props.category;
    const [lickCoursec, setlickCoursec] = useState([]);

    function getAllcourses() {
        if (category === "All") {
            let allCourses = [];

            Object.values(Courses).forEach(arry => {
                arry.forEach(data => {
                    allCourses.push(data);
                })
            })
            console.log(allCourses);
            return allCourses;
            
        } else {
            return Courses[category];
        }
    }



    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getAllcourses().map((course) => (
                    <Card key={course.id}
                        course={course}
                        lickCoursec={lickCoursec}
                        setlickCoursec={setlickCoursec}
                    />
                ))
            }
        </div>
    );
}

export default Cards;