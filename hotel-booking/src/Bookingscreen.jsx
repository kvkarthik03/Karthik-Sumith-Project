import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
function Bookingscreen() {
  const { roomid } = useParams();
  // const { rentperday } = useParams();
  const { fromdate } = useParams();
  const { todate } = useParams();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  const firstdate = moment(fromdate, 'DD-MM-YYYY')
  const lastdate = moment(todate, 'DD-MM-YYYY')

  const totaldays = moment.duration(lastdate.diff(firstdate)).asDays() + 1
  const totalamount = room ?  totaldays * room.rentperday : 0;
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  // const {totaldays} = moment.duration(todate.diff(fromdate))



  

  useEffect(() => {
    async function fetchRoomData() {
    try {
      setloading(true)
      const data = (await axios.post("http://localhost:5000/api/rooms/getroombyid", { roomid })).data
      setroom(data)
      setloading(false)
    } catch (error) {
      setloading(false)
      seterror(true)
    }
  }

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      // User is not logged in, navigate to the login page
      window.location.href = '/login'; 
    } else {
      // User is logged in, fetch room data
      fetchRoomData();
    }

}, []);

  async function bookRoom() {
    setIsPaymentDone(true);
    const bookingDetails = {
      room, 
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      fromdate,
      todate,
      totalamount,
      totaldays
    }

    try {
      const result = await axios.post('http://localhost:5000/api/bookings/bookroom', bookingDetails)
    } catch (error) {
      
    }

    document.getElementById('paybutton').innerHTML = "Room Booked Successfully";

  }
  return (
    <div className='roomsbgimage'>
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
                <i><p>Name: {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                  <p>From Date : {fromdate}</p>
                  <p>To Date : {todate}</p>
                  <p>Max Count : {room.maxcount} </p>
                </i>
              </div>
              <div>
                <hr />
                <h1>Amount</h1>
                <i><p>Total days : {totaldays}</p>
                  <p>Rent per day : ₹{room.rentperday}</p>
                  <p>Total amount : ₹{totalamount}</p></i>
              </div>
              <div style={{ float: 'right' }}>
              {isPaymentDone ? (
                  <p className="booking-success">Room Booked Successfully!</p>
                ) : (
                  <button className='btn btn-primary' onClick={bookRoom}>
                    Pay Now
                  </button>
                )}
                {/* <button className='btn btn-primary paybutton' onClick={bookRoom}>Pay Now</button>                */}
              </div>
            </div>

          </div>

        </div>)}
      </div>
    </div>

  )
}

export default Bookingscreen