import React, {useState} from "react";
import {collection,addDoc} from "firebase/firestore";
import {db} from "./Firebase"

const Contact=()=> 
{
    const [name,Setname]= useState("");
    const [email,Setemail]= useState("");
    const [number, Setnumber]= useState("");
    const [message, Setmessage]= useState("");
  
    const collectionRef= collection(db,"Queries");

    const handleSubmit=(e)=>
    {
      e.preventDefault();
          addFormDetailsFirebase();
          // sendWhatsAppMessage();
          clearForm();
  
    };

    const addFormDetailsFirebase=()=>
  {
    addDoc(collectionRef,
        {
            Name: name,
            Email: email,
            MobileNumber:number,
            Message:message,
            Created: new Date().toLocaleString()
        }
        ).then((docRef) => {
            alert("Data submitted successfully");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

  }

    const clearForm=()=>
    {
      Setname("");
      Setemail("");
      Setnumber("");

    }
  

    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Contact</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">   
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" required
                    value={name} onChange={(e)=>Setname(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address" required
                     value={email} onChange={(e)=>Setemail(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Mobile Number (WhatsApp) </label>
                    <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" required
                     value={number} onChange={(e)=>Setnumber(e.target.value)}
                    />
                    </div>
                    <div className="form-group mb-3">
                    <label >Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required 
                    value={message} onChange={(e)=>Setmessage(e.target.value)}/>
                    </div>
                                            
                   
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                    </div>
                    </form>
                    
                    

                </div>
            </div>

        </div>
        </>
    );
};

export default Contact;