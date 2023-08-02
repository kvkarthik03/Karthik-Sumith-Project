import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { json } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

function Navbar_1() {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  function logout() {
    localStorage.removeItem('currentUser')
    window.location.href ='/login'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <img height="75" className="d-inline-block align-text-top brandlogo" src="/logo.jpg" alt="stay-zenith-logo" />
      <Navbar.Brand className="" href="/">StayZenith</Navbar.Brand>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-0">
            <Nav.Link href="/rooms">Rooms</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            {user ? (
              <>
                <DropdownButton  id="dropdown-basic-button" title={user.name}>
                  {/* <Dropdown.Item href="#/action-1">Bookings</Dropdown.Item> */}
                  <Dropdown.Item href="#/action-1" onClick={logout}>Log Out</Dropdown.Item>
                </DropdownButton>
              </>)
              : (<>
                <Nav.Link href="/login">Login/Sign Up</Nav.Link>
              </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_1;