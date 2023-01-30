import React  from "react";
import { NavLink } from "react-router-dom";


const Card=(props)=>
{
    return (
            <><div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img className="card-img-top" src={props.img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to={{
                        pathname:'/register'}}
                        state={{title:props.title}}
                        className="btn btn-primary">Register</NavLink>
                    </div>
                    </div>
                </div>
            </>
    );
};


export default Card;