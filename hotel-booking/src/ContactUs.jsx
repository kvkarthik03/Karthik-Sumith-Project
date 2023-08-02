// import React from 'react'
// import Navbar from './components/Navbar';
// function ContactUs() {
//   return ( 
//       <div>
//         <Navbar></Navbar>
//         <div>ContactUs</div>
        
//       </div>      
//   )
// }

// export default ContactUs

import React from 'react';
import Navbar from './components/Navbar';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import Footer from './components/Footer';

export default function ContactUs() {
  return (
    <div className="contact-img">
    <Navbar></Navbar>
    <center><form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form></center>
    <Footer></Footer>
    </div>
  )
}