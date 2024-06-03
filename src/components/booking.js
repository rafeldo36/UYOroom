import React from "react";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Cityfilter() {
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [bdate,setBdate]=useState('');
  const [aadhaar,setAadhaar]=useState('');
  const [number,setNumber]=useState('');
  function sendEmail(e) {
    e.preventDefault();
    var templateParams = {email,name,bdate,aadhaar,number}
    emailjs
      .send("service_k5nbiqw","template_el3ha8y",templateParams,"ArKyxs9HDVIYUIB95")
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your room is booked successfully, Check your email");
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <>
        <Alert.Heading>I hope you've liked our service.</Alert.Heading>
      
        <hr />
        <div className="field mb-3">
        <label htmlFor="name">Enter your Name</label>
          <input className="form-control my-2" type="text" name="name" id="name" onChange={e=> setName(e.target.value)} />
          <label htmlFor="email">Mobile No</label>
          <input className="form-control my-2" type="tel" name="number" id="number"  maxLength={10} required  onChange={e=> setNumber(e.target.value)} />
          <label htmlFor="email">Aadhaar No</label>
          <input className="form-control my-2" type="text" name="aadhaar" id="aadhaar" maxLength={12} required onChange={e=> setAadhaar(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input className="form-control my-2" type="email" name="email" id="email" onChange={e=> setEmail(e.target.value)} />
          <div className='col-7 my-2'>
        <h6>Date of Check In</h6>
            <input type="date" className="form-control my-2" name="bdate" id="bdate" onChange={e=> setBdate(e.target.value)} />
        </div>
        </div>
        <hr />
        <p>
          Below button will book your selected room, Are you ready to Proceed?
        </p>
        <div className="d-flex justify-content-end">
          <button type="submit" id="button" className="btn btn-primary mx-2" onClick={sendEmail} value="Send Email">
            Yes
          </button>
  
          <button 
            className="btn btn-primary" 
            onClick={() => {
              navigate("/cities");
            }}
          >
            {" "}
            No{" "}
          </button>
          <hr />
        </div>
    </>
  );
}
