import React from 'react'
import { Image } from 'react-bootstrap'
import '../App.css'

const RoomItem = (props) => {
    const {info} = props
   
  return (
    <>
  
  <div className="card-body my-2"> 
    <Image src={info.imageLg} height="300" width="350" className='my-2'/>
    <h5 className="card-title my-2">{info.name}</h5>
    <p className="card-text">  {info.description}</p>
    <div className='d-flex'>
    <i className="fa-solid fa-location-dot mx-2 my-2"></i>
    <p className="card-text my-1">  {info.city}</p>
    <i className="fa-solid fa-indian-rupee-sign mx-2 my-2"></i>
    <p className="card-text my-1">  {info.price}/month</p> 
    </div>
    <a href='booked' className="btn btn-primary mx-3">Book Now</a>
  </div>
  <hr/>
    </>
  )
}

export default RoomItem