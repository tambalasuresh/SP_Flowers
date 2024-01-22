import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function NavBar() {
  return (
    <Container fluid className='bg-dark text-white p-2 rounded'>
      <Row>
        <Col className='text-start'>SP Flowers</Col>
        <Col className='' lg={8} sm={6} md={8}>
              <Row className="d-flex justify-content-start">
                <Col>
                <Button variant="success" size='sm' className='mx-2'>Home</Button>
                <Button variant="success" size='sm' className='mx-2'>About Us</Button>
                <Button variant="success" size='sm' className='mx-2'>Gallery</Button>
                <Button variant="success" size='sm' className='mx-2'>Contact Us</Button>
                </Col>
              </Row>
        </Col>
        <Col className='text-end'>Profile Info</Col>
      </Row>
    </Container>
  );
}

export default NavBar;