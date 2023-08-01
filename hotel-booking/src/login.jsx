import React from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link, Router } from 'react-router-dom';
import SignUp from './signup';
import Error from './components/Error';
import { useState, useEffect } from 'react';

function Login() {
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    async function login() {
        
            const user = {
                email,
                password
            }
            console.log(user)
            try {
              setloading(true)
              const result = (await axios.post('http://localhost:5000/api/users/login', user)).data
              setloading(false)

              localStorage.setItem('currentUser', JSON.stringify(result));
              window.location.href='/'
              // console.log(result.data);
          } catch (error) {
              console.log(error)
              setloading(false)
              seterror(true)
          }
    }
  
  return (
    <div className='loginbg'>
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
          <Link to ='/'><img width="100" height="75" class="d-inline-block" src="/logo.jpg" alt="stay-zenith-logo" />
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 mx-auto" style={{color: 'black'}}>StayZenith</span></Link>
          </div>

          <center><div className='d-flex flex-column justify-content-center h-custom-1 w-75 pt-4'>
            {error && (<Error message="Invalid Credentials"/>)}
            <center><h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3></center>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg" 
            value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Password' id='formControlLg' type='password' size="lg"
            value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

            <button className="btn btn-primary px-5 mx-5 w-100" color='info' size='lg' onClick={login}>Login</button>
            {/* <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p> */}
            <div className="noaccnt mx-5 w-100" ><p className='ms-5'>Don't have an account? <Link to = "/signup" class="link-info">Sign Up</Link></p></div>

          </div></center>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Login;