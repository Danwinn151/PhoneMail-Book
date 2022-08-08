import React from 'react'
import Phonebook from "./images/PhoneBook.png"

export default function Header() {
  return (
    <>
    <div className='text-center  px-20 flex justify-center'>
        <div className='flex text-center '>
         <img className='' width={"50px"} height={"50px"} src={Phonebook} alt="imageBook"/>
      <div className='mt-2 ml-5 font-serif'>
     PhoneBook
      </div>
    </div>
    </div>
    
     
    </>
    
  )
}
