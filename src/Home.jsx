import React from "react";
import { NavLink } from "react-router-dom";
import img from "./images/elearn.jpg";


const Home=()=> 
{
    return (
        <>
       <section id="header" className="d-flex align-items-center">
       <div className="container-fluid">
         <div className="row"> 
            <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-lg-6 order-1 order-lg-1 header-img">
                <img src={img} className="img-fluid"></img>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> 
                <h2>Your Last Minute Tutor</h2>
                <h6 className="my-2">Our mission is to connect people who want to learn with experts who love to teach. For over last few years, we have pursued that singular goal. In the process, we have become one of the nation’s leading online tutoring providers.</h6>
                <div className="mt-3">
                    <NavLink to="/courses" className="btn-get-started">Get Started</NavLink>
                </div>
                </div>
                </div>
            </div>
         </div>
        </div>
       </section>

        </>
    );
};

export default Home;