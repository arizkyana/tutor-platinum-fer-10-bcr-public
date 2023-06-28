import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import { logout } from '@/redux/login/slice';
import { useDispatch } from 'react-redux';

function MyNavbar() {
  const dispatch = useDispatch();
  return (
    <Navbar fixed="top" className="bg-white">
      <Container>
        <Navbar.Brand href="#home">BCR</Navbar.Brand>
        <Nav className="me-right">
          <NavDropdown title={'Menu'} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => dispatch(logout())}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
