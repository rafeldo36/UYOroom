import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div>
     <h2>Welcome To UYO Rooms</h2>
     <div className="d-grid my-3">
      <p>Are you looking for a rooms? Click the below button!</p>
          <Link className="btn btn-outline-primary my-2" to='sign-up' role="button">Signup</Link>
          <Link className="btn btn-outline-primary my-2" to='sign-in' role="button">Login</Link>
        </div>
    </div>
  )
}
