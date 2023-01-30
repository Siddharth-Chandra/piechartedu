import React from "react";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"

import Card from "./Card"



const Courses=()=> 
{
    const data = [
        { img: img3, title: "Computer Science & Engineering",desc:"KTU 2015 and 2019 schemes available" },
        { img: img1 , title: "Electronics & Communication Engineering",desc:"KTU 2015 and 2019 schemes available" },
        { img: img2, title: "Civil Engineering",desc:"KTU 2015 and 2019 schemes available" },
       
        
    ]

    return (
        <>
        <div className="my-8"> 
        <h1 className="text-center mb-4">Courses</h1>
        <div className="container-fluid" mb-5>
         <div className="row"> 
            <div className="col-10 mx-auto">
                <div className="row gy-3">  
                {
                data.map((val,ind)=>
                {
                    return <Card key={ind}
                    img={val.img}
                    title={val.title}
                    desc={val.desc}
                    />
                })
            }
                

                </div>
            
            </div>
        </div>
        </div>

        </div>
        </>
    );
};

export default Courses;