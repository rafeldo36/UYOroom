import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Homepage(props) {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/sign-in")
    }
  })
  return (
    <>
      <div>
        <h1> Welcome To UYO Rooms </h1>
        <h5>For Students and Bachelors</h5>
        <div className='col-7'>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" >
              Select Years
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {
                navigate("/cities")
                alert('You are looking hostel for duration of 1 year') 
              }}>1 Year</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                navigate("/cities")
                alert('You are looking hostel for duration of 2 years') 
              }}>2 Years</Dropdown.Item> 
              <Dropdown.Item onClick={() => {
                navigate("/cities")
                alert('You are looking hostel for duration of 3 years') 
              }}>3 Years</Dropdown.Item> 
              <Dropdown.Item onClick={() => {
                navigate("/cities")
                alert('You are looking hostel for duration of 4 years') 
              }}>4 Years</Dropdown.Item> 
              <Dropdown.Item onClick={() => {
                navigate("/cities")
                alert('You are looking hostel for duration of 5 years') 
              }}>5 Years</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}


