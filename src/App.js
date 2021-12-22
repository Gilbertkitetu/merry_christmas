import React from 'react';
import './App.css';
import {Navbar, Container, Carousel, Card, Form, Row } from "react-bootstrap"


function App() {

  var  randomQuote = [
    "Wishing you and your family a wonderful Christmas and a blessed New Year!",
    "Merry Christmas! And best wishes for 2022.",
    "Wishing you a joyous Christmas and a prosperous New Year.",
    "Merry Christmas! With many good wishes for the holiday season and the coming year.",
    "May the peace and joy of Christmas be with you today and throughout the New Year."
  ];

  var quote = randomQuote[Math.floor(Math.random()*randomQuote.length)];
  
  return (
    <div className="App">

      <Navbar>
      <Container>
        <Navbar.Brand>Santa.</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a>Breathtaking User</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      </Navbar>


      <Carousel fade variant="dark" >
  <Carousel.Item>
    <img
      className="d-block w-100" style={{ height : "500px"}}
      src="https://i.pinimg.com/564x/2e/98/14/2e98144c161fb11473e1013048428ca5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Merry Christmas</h5>
      <p>{quote}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{ height : "500px"}}
      src="https://i.pinimg.com/564x/55/10/fd/5510fd053e69b5c1aaa2602b4d232bb9.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Merry Christmas</h5>
      <p>{quote}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{ height : "500px"}}
      src="https://i.pinimg.com/564x/78/f0/bd/78f0bd619b4cac848d7060b41d0cac44.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Merry Christmas</h5>
      <p>{quote}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<Card w-100>
  <Card.Img variant="top" src="https://i.pinimg.com/564x/f1/cf/f3/f1cff3becb9241eaff3f68b2dd62b3a4.jpg" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     
    </Card.Text>


    <Form>
  <Row className="mb-3">
    <Form.Group>
      
    </Form.Group>

    
  </Row>
  </Form>

  </Card.Body>

  
</Card>




<Card className="text-center">
  <Card.Header>...</Card.Header>
  <Card.Body>
  
  </Card.Body>
  <Card.Footer className="text-muted">
  <a href="https://github.com/Gilbertkitetu" className="fa fa-github"></a>
  <a href="https://twitter.com/Gilbertkitetu1" className="fa fa-twitter"></a>
  <a href="https://www.instagram.com/gilbertkitetu/" className="fa fa-instagram"></a>
  </Card.Footer>
</Card>

    </div>
  );
}

export default App;
