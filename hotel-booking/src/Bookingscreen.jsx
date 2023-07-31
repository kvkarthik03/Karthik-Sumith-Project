import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Bookingscreen() {
  const { roomid } = useParams();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();
  useEffect(async () => {
    try {
      setloading(true)
      const data = (await axios.post("http://localhost:5000/api/rooms/getroombyid", { roomid })).data
      setroom(data)
      setloading(false)
    } catch (error) {
      setloading(false)
      seterror(true)
    }
  }, [])
  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>) : (<div>
          <div className="row mt-5">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className='bigimg' />
            </div>
            <div className="col-md-5 mx-auto">
              <div>
                <h1>Booking Details</h1>
                <i><p>Name: </p>
                  <p>From Date : </p>
                  <p>To Date : </p>
                  <p>Max Count : {room.maxcount} </p>
                </i>
              </div>
              <div>
                <hr/>
                <h1>Amount</h1>
                <i><p>Total days : </p>
                <p>Rent per day : ₹{room.rentperday}</p>
                <p>Total amount : </p></i>
              </div>
              <div style={{float:'right'}}>
                <button className='btn btn-primary'>Pay Now</button>
              </div>
            </div>

          </div>

        </div>)}
      </div>
    </div>
  )
}

export default Bookingscreen