import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import download from "./images/download.jpg"
export default function ContactDetails() {
    const Location = useLocation()
    console.log(Location.state.from)
  return (
    <>
    <div className='card w-96 mx-auto md:w-96 md:mx-auto mx-30 py-20 mt-4 rounded-lg shadow-lg'>
    <div className='flex justify-center'>
        <img src={download} alt=''/>
    </div>
    
        <div className='text-center '>
        {Location.state.from.name}<br/>
        {Location.state.from.email}<br/>
       <Link to={"/Contact"}>
        <button type='submit' className='bg-green-700 py-3 px-3 rounded-md'>Back To Contact List</button>
       </Link>
        
        </div> 
    </div>
       
    </>
   ) 
}
