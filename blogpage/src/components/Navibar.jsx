import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navibar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className='mb-5'>
    <Container className='w-75'>
      <Navbar.Brand href="#">METASHOT</Navbar.Brand>
      <Nav>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Pages</Nav.Link>
        <Nav.Link href="#">Blog</Nav.Link>
        <Nav.Link href="#">Shop</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navibar
