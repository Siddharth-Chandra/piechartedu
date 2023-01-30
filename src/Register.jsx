import React, {useState} from "react";
import {db} from "./Firebase"
import {collection,doc,addDoc,getDocs} from "firebase/firestore";
import { useLocation } from "react-router-dom";

const Register=(props)=> 
{

    const location = useLocation();
    const { state } = location;
   
  const [name,Setname]= useState("");
  const [email,Setemail]= useState("");
  const [number, Setnumber]= useState("");
  const [stream, Setstream]= useState("");
  const [semester, Setsemester]= useState("");
  const [subject, Setsubject]= useState("");
  const collectionRef= collection(db,"registrations");



  const getData=(e)=>
  {
    e.preventDefault();
   
    const querySnapshot =  getDocs(collection(db, "courses"));
        querySnapshot.forEach((doc) => {

        console.log(doc.id, " => ", doc.data());
  });
}
  
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    addDoc(collectionRef,
        {
            Nane: name,
            Email: email,
            MobileNumber:number,
            Stream:stream
        }
        ).then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        Setname("");
        Setemail("");
        Setnumber("");
        Setsemester("");
        Setsubject("");


  };

    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Register</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">   
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Stream</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"  required readOnly
                    value={state.title} onChange={(e)=>Setstream(e.target.value)}
                    />
                    </div> 
                    <div className="col-md-12 mb-3">
                        <label for="validationCustom04" className="form-label">Semester</label>
                        <select className="form-select" id="validationCustom04" required
                         value={semester} onChange={(e)=>Setsemester(e.target.value)}
                        >
                        <option selected disabled value="">Choose Semester</option>
                        <option>S1</option>
                        <option>S2</option>
                        <option>S3</option>
                        <option>S4</option>
                        <option>S5</option>
                        <option>S6</option>
                        <option>S7</option>
                        <option>S8</option>
                        
                        </select>
                        <div className="invalid-feedback">
                        Please choose a stream.
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label for="validationCustom04" className="form-label">Subject</label>
                        <select className="form-select" id="validationCustom04" required
                         value={subject} onChange={(e)=>Setsubject(e.target.value)}
                        >
                        <option selected disabled value="">Choose Subject</option>
                        <option>S1</option>
                        <option>S2</option>
                        <option>S3</option>
                        <option>S4</option>
                        <option>S5</option>
                        <option>S6</option>
                        <option>S7</option>
                        <option>S8</option>
                        
                        </select>
                        <div className="invalid-feedback">
                        Please choose a stream.
                        </div>
                    </div>

                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" required
                    value={name} onChange={(e)=>Setname(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address" required
                     value={email} onChange={(e)=>Setemail(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                    <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" required
                     value={number} onChange={(e)=>Setnumber(e.target.value)}
                    />
                    </div>
                   
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Register</button>
                    </div>
                    </form>
                    
                    

                </div>
            </div>

        </div>
 
        </>
    );
};

export default Register;