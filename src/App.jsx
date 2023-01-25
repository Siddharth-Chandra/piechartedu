import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home"

import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import Navbar  from "./Navbar";
import { Route, Routes } from "react-router-dom";


const App=()=> 
{
    return (
        <>
        <Navbar />

        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/courses" element={<Courses/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
     
       </Routes>
       </>
    );
};

export default App;