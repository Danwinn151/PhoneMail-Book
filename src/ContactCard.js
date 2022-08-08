import React from 'react'
import {Link} from "react-router-dom"
import Download from "./images/contacts.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faTrash} from "@fortawesome/free-solid-svg-icons"
export default function ContactCard({detail, DeleteContactId}) {
    function clickHandler (id) {
        DeleteContactId(id)
    }
  return (
    <>
      <div>
    <Link to={"/contactDetails"} state={{from: detail}}>
      <div className='flex justify-center'>
        <img width={"80px"} height="50px" src={Download} alt='contact'/>
      </div>
        
    <div className='detail font-sans text-center mx-auto  my-3'>
    <div className='name font-bold'>
        {detail.name}<br/>
    </div>
         {detail.email} 
    </div>
 
    </Link>
    <div className='flex justify-center'>
        <FontAwesomeIcon icon={faTrash} onClick={() => {clickHandler(detail.id)}}/>
    </div>
     
      </div>  
    </>
    
  )
}
