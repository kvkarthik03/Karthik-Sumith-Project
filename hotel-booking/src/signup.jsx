import React from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import Login from './login';
import { Link, Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Error from './components/Error';
import Success from './components/Success';



function SignUp() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsuccess] = useState();

    async function register() {
        if (password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword,
            };

            try {
                setloading(true)
                const result = await axios.post('http://localhost:5000/api/users/register', user).data
                setloading(false)
                setsuccess(true)

                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
                // console.log(result.data);
            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(true)
            }
        }
        else {
            alert('Passwords do not match')
        }
    }

    return (
        <div>
            {error && (<Error />)}

            <div className='signupbgimage'>
                <MDBContainer fluid className='p-4'>

                    <div className='d-flex flex-row ps-5 pt-5'>
                        <Link to='/'><img width="100" height="75" class="d-inline-block" src="/logo.jpg" alt="stay-zenith-logo" />
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                            <span className="h1 mx-auto loginheading">StayZenith</span></Link>
                    </div>

                    <MDBRow>

                        <MDBCol md='6' className='text-center text-md-start d-flex flex-column '>

                            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            <span className="text-primary">The best experience</span> <br />
                                <span className="text-primary">for your vacations!</span>
                            </h1>

                            <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                Discover extraordinary stays, sign up now and
                                experience StayZenith's unmatched hotel booking services.
                            </p>

                        </MDBCol>

                        <MDBCol md='6'>
                            {success && (<Success message="Registration Success" />)}
                            <MDBCard className='my-5'>
                                <MDBCardBody className='p-5'>

                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'
                                                value={name} onChange={(e) => { setname(e.target.value) }} />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
                                        value={email} onChange={(e) => { setemail(e.target.value) }} />
                                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
                                        value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                    <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'
                                        value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                                    <center><button className='btn btn-primary' size='md' onClick={register}>Sign up</button></center>

                                    <div className="text-center">

                                        <p>Already have an account?</p>
                                        <center><Link to="/login">Login</Link></center>

                                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='facebook-f' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='twitter' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='google' size="sm" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                            <MDBIcon fab icon='github' size="sm" />
                                        </MDBBtn>

                                    </div>

                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            </div>
        </div>
    );
}

export default SignUp;