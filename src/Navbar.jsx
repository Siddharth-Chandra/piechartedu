import React  from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>
{
    return (
        <>
        <div className="container-fluid-nav bg">
            <div className="row"> 
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <NavLink 
                className="navbar-brand" 
                to="/">
                    Piechart.edu
                    </NavLink>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <NavLink activeClassName="menu_active" exact className="nav-link active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' className="nav-link" to="/courses">Courses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                    </li>
                    </ul> 
                </div>
                </div>
            </nav>
         
                    
            </div>
        </div>

        </div>
        </>

    );
};

export default Navbar;