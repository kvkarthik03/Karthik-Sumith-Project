import React, { useState, useEffect } from 'react'
import axios from "axios";
import Navbar from './components/Navbar';
import moment from 'moment';
import 'antd/dist/reset.css';
import Footer from './components/Footer';
import Room from './components/Room'
import { DatePicker, Space } from 'antd';
//import axios from './axiosInstance';
// const instance = axios.create({
//   baseURL: 'http://localhost:5000',
// });
const { RangePicker } = DatePicker;

function Rooms() {
  const [rooms, setrooms] = useState([])
  const [loading, setloading] = useState()
  const [error, seterror] = useState()

  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()

  const [duplicaterooms, setduplicaterooms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const data = (await axios.get('http://localhost:5000/api/rooms/getallrooms')).data
        setrooms(data)
        setduplicaterooms(data)
        setloading(false)

      } catch (error) {
        seterror(true)
        console.log(error)
        setloading(false)
      }
    }
    fetchData();
  }, [])

  function filterByDate(dates) {
    setfromdate(dates[0].format('DD-MM-YYYY'))
    settodate(dates[1].format('DD-MM-YYYY'))

       //tempRooms
       var temprooms = []
  
       for (const room of duplicaterooms) {
         var availability = false;
     
         if (room.currentbookings.length > 0) {
           for ( const booking of room.currentbookings) {
             //check between or equal to dates
             if (
               !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
                 booking.fromdate,
                 booking.todate
               ) &&
               !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
                 booking.fromdate,
                 booking.todate
               )
             ) {
               
               if (
                 dates[0].format("DD-MM-YYYY") !== booking.fromdate &&
                 dates[0].format("DD-MM-YYYY") !== booking.todate &&
                 dates[1].format("DD-MM-YYYY") !== booking.fromdate &&
                 dates[1].format("DD-MM-YYYY") !== booking.todate
               ) {
                 availability = true;
               }
             }
           }
         } 
         
     
         if (availability == true || room.currentbookings.length == 0) {
           temprooms.push(room);
         }
         setrooms(temprooms);
       }
     
       
     }
  


  return (
    <div className='roomsbgimage'>


      <Navbar></Navbar>

      <div className='row m-5 justify-content-center'>
        <div className="col-md-3">
          <b><p>Enter your Check In and Check Out Dates</p></b>
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
        </div>
      </div>

      <div className='row'>
        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>) : (rooms.map(room => {
          return <div className='col-md-9 mt-2'>
            <Room room={room} fromdate={fromdate} todate={todate} />
          </div>;

        }))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Rooms        