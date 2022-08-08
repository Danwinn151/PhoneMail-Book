import React from 'react'
import ContactCard from './ContactCard'
import {Link} from "react-router-dom"
function ContactList({details, DeleteContactId}) {
  const rendererdContacts = details.map(detail => {
    return <ContactCard DeleteContactId={DeleteContactId} key={detail.id} detail={detail}/>
  })
   
  return (
    <div>
    <div className='contactList flex justify-between my-4 mx-2'>
    <div className='mt-4 ml-3 font-bold'>
        <h1 className='ml-3'>ContactList</h1>
    </div>
    <Link to={"/"}>
    <button type='Button' className='bg-blue-600 py-3 px-3 rounded-md'>Add Contact</button>
    </Link>
    </div>
    {rendererdContacts}
    </div>
  )
}

export default ContactList