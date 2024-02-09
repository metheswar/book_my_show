import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'; 

function Header() {
  const navigate = useNavigate();
  const clickHandler =()=>{
    navigate('/')
  }
  return (
    <Navbar bg="dark" variant="dark" expand="md" style={{ padding: '10px' }}>
      <Navbar.Brand className="text-light" style={{cursor:'pointer'}} onClick={clickHandler}>Book My Show</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar">
        <BiMenu />
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;