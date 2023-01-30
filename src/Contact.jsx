import React, {useState} from "react";
import {db} from "./Firebase"
import {collection,addDoc} from "firebase/firestore";
import axios from 'axios';


const Contact=()=> 
{
  const [name,Setname]= useState("");
  const [email,Setemail]= useState("");
  const [number, Setnumber]= useState("");
  const [stream, Setstream]= useState("");

  const collectionRef= collection(db,"registrations");

  const header={
    headers:{
        Authorization:'Bearer EAAyH5vKtzxABADfZCrOpIOsNpjQDhKyZAEriQVXjMh9nYAr3b9X421JfwBVg89jvxGtwAzfZBEbquhcCFNRsZBJh7f2YMyzGZC3YYVZBwood4FIbx83f9aaQ10Mi6X10yO8XtzOmpsQbDPgknCt9CrIZBi7msWtIJREryABIKDvOoFxp6wyXmZCAVLYvrxHum6BHBiHaZC2NyHQZDZD',
        Accept:'application/json',

    }
  }

  const sendWhatsAppMessage=()=>
  {
    const body=
    {
        
            "messaging_product": "whatsapp",
            "to": "91"+number,
            "type": "template",
            "template": {
                "name": "hello_world",
                "language": {
                    "code": "en_US"
                }
            }
        
    }
    axios.post('https://graph.facebook.com/v15.0/105317689139660/messages',body,header)
    .then((res) =>(
        storeWhatsAppMsgMetaData(res.data)
    ))
    .catch((err)=>(
        console.log("Message sent Failed",err)
    ))

 
    

  }

  const clearForm=()=>
  {
    Setname("");
    Setemail("");
    Setnumber("");
    Setstream("");
  }

  const addFormDetailsFirebase=()=>
  {
    addDoc(collectionRef,
        {
            Name: name,
            Email: email,
            MobileNumber:number,
            Stream:stream,
            Created: new Date().toLocaleString()
        }
        ).then((docRef) => {
            
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

  }

  const storeWhatsAppMsgMetaData=(data)=>
  {

    addDoc(collection(db,"whatsAppMsgMetaData"),
        {
            Name: name,
            Email: email,
            MessagingProduct:data.messaging_product,
            InputNumber:data.contacts[0].input,
            WhatsAppId:data.contacts[0].wa_id,
            MessagingId:data.messages[0].id,
            Created: new Date().toLocaleString()
        }
        ).then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

  }



  const handleSubmit=(e)=>
  {
    e.preventDefault();
        addFormDetailsFirebase();
        sendWhatsAppMessage();
        clearForm();

  };

    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Teach on Piechart</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">   
                    <form onSubmit={handleSubmit}>
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
                    <label for="exampleFormControlInput1" className="form-label">Mobile Number (WhatsApp) </label>
                    <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" required
                     value={number} onChange={(e)=>Setnumber(e.target.value)}
                    />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label for="validationCustom04" className="form-label">Stream</label>
                        <select className="form-select" id="validationCustom04" required
                         value={stream} onChange={(e)=>Setstream(e.target.value)}
                        >
                        <option selected disabled value="">Choose Stream </option>
                        <option>Computer Science and Engineering</option>
                        <option>Civil Engineering</option>
                        <option>Electronics and Communication Engineering</option>
                        </select>
                        <div className="invalid-feedback">
                        Please choose a stream.
                        </div>
                    </div>
                    {/* <div className="mb-4">
                    <label for="formFile" className="form-label">Upload Resume</label>
                    <input className="form-control" type="file" id="formFile" required/>
                    </div> */}
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

export default Contact;