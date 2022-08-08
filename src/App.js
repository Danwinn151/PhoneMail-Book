import React,{useState, useEffect} from 'react'
import Header from './Header'
import Addcontact from './Addcontact'
import ContactList from './ContactList'
import {v4 as uuidV4} from "uuid"
import {Routes, Route, useNavigate} from "react-router-dom"
import ContactDetails from './ContactDetails'


const LOCAL_STORAGE_KEY = "contacts.app"
export default function App() {
   const [details, setDetails] = useState([])
   console.log(details)
   useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, (details)))
      if(storedItems){
        setDetails(storedItems)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
     useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify((details)))
     },[details])
     const addContactHandler = (thisState) => {
          console.log(thisState)
          setDetails([...details, {id:uuidV4(), ...thisState} ])
     }
     const DeleteContactId = (id) => {
        const selectedDetails = details.filter(detail => {
            return detail.id !== id
        })
        setDetails(selectedDetails)
     } 
     const Navigate = useNavigate()
    return (
    <div>
    <Header/>
    <Routes>
     <Route path='/' element={<Addcontact Navigate={Navigate} addContactHandler={addContactHandler}/>}></Route> 
      <Route path='/Contact' element={<ContactList DeleteContactId={DeleteContactId} details={details}/>}></Route>
       <Route path='/ContactDetails' element={<ContactDetails/>}></Route>
    </Routes>
    </div>
  )
}
