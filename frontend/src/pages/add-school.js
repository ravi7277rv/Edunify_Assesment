import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSchool = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name, address, city, state, contact, email
    }

    await axios.post("http://127.0.0.1:9000/api/v1/addSchool", data)
      .then((response) => {
        console.log(response)
        toast.success(response.data.message);
      })
      .catch((err) => {
        console.log(err)
      })

    setName("");
    setAddress("");
    setCity("");
    setState("");
    setContact("");
    setEmail("");
  }

  return (
    <div className='addContainer1'>
      <div className="addContainer2">
        <div className="heading">
          <h3>Add New School Here... </h3>
        </div>
        <form onSubmit={handleSubmit} className='form'>

          <div className="schoolName">
            <label htmlFor="schoolName">School Name :</label>
            <input
              type="text"
              placeholder='Enter School Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="schoolAddress">
            <label htmlFor="schoolName">School Address :</label>
            <input
              type="text"
              placeholder='Enter School Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="schoolCity">
            <label htmlFor="schoolName">City Name :</label>
            <input
              type="text"
              placeholder='Enter  Name'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="schoolState">
            <label htmlFor="schoolName">State Name :</label>
            <input
              type="text"
              placeholder='Enter State Name'
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="schoolContact">
            <label htmlFor="schoolName">School Phone no. :</label>
            <input
              type="tel"
              placeholder='Enter School Phone no.'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="schoolEmail">
            <label htmlFor="schoolName">School Email-Id :</label>
            <input
              type="email"
              placeholder='Enter School Email-Id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <input className='submitButton' type="submit" value={`Submit`} />
        </form>
      </div>
    </div>
  )
}

export default AddSchool
