import React, { useState, useEffect } from 'react'
import axios from "axios";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Room from './components/Room'
//import axios from './axiosInstance';
// const instance = axios.create({
//   baseURL: 'http://localhost:5000',
// });

function Rooms() {
  const [rooms, setrooms] = useState([])
  const [loading, setloading] = useState()
  const [error, seterror] = useState()
  useEffect(() => {
    const fetchData = async() => {
    try {
      setloading(true)
      const data = (await axios.get('http://localhost:5000/api/rooms/getallrooms')).data
      setrooms(data)
      setloading(false)
    
    } catch (error) {
      seterror(true)
      console.log(error)
      setloading(false)
    }
  }
  fetchData();
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div className='row'>
        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>) : (rooms.map(room => {
          return <div className='col-md-9 mt-2'>
              <Room room={room}/>
            </div>; 

        }))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Rooms        