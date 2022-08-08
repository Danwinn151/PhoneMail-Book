import React, { Component } from 'react'
import "./AddContact.css"
import { Link } from "react-router-dom"

class Addcontact extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: "",
            email: ""
        }
    }
    addContact = (e) => {
        e.preventDefault()
        if(this.state.name === "" || this.state.email === ""){
            alert('its required you fill in your details')
        }
        else{
            console.log(this.state)
            this.props.addContactHandler(this.state)
            this.props.Navigate("/Contact")
        }
    }
    render () {
       return (
    <div className='card w-96 mx-auto md:w-96 md:mx-auto mx-30 py-20 mt-4 rounded-lg shadow-lg'>
    <div className='mt-3 text-center shadow-sm'>
    <form onSubmit={this.addContact}>
       <label className='text-center font-bold'>Name</label><br/>
     <input className='input-2 border-red-900 shadow-lg mx-4 py-2 px-5 text-center rounded-md' 
      type={"text"} onChange={(e) => this.setState({name: e.target.value})} placeholder="Name"/><br/>
     <label className='text-center font-bold'>Email</label><br/>
     <input className='input-1 border-red-900 shadow-lg mx-4 py-2 px-5 text-center rounded-md' onChange={(e) => this.setState({email: e.target.value})} type={"text"} placeholder="Email"/><br/>
      <div className='my-4'>
         <button type='submit' className='button bg-blue-600 py-3 px-3 rounded-lg my-3'>Add Contact</button><br/>
      </div> 
    </form>
    <Link to={"/Contact"}>
       <button type='submit' className='button bg-red-600 py-3 px-3 rounded-lg'>View Contacts</button> 
    </Link>
    </div>
    </div>
  ) 
    }
}

export default Addcontact