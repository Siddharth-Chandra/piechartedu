import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home"

import About from "./About";
import Courses from "./Courses";
import TeachOnPiechart from "./TeachOnPiechart";
import Navbar  from "./Navbar";
import { Route, Routes,Navigate } from "react-router-dom";
import Register from "./Register";
import Contact from "./Contact";


const App=()=> 
{
    return (
        <>
        <Navbar />
        <Routes basename="/Piechart" >
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/courses" element={<Courses/>}/>
            <Route exact path="/teach" element={<TeachOnPiechart/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route path='*' element={<Navigate to='/' />} />
     
       </Routes>
       </>
    );
};

export default App;