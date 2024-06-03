import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import RoomItem from './RoomItem';

const Rooms = () => {
    const context = useContext(noteContext);
    const {rooms} = context;
  return (
<>
    <div>  {rooms && rooms.map((note,key)=>{
        return <RoomItem info={note}  key={key}/>
      })}</div>
      </>
  )
}

export default Rooms