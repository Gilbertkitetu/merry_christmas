
import './App.css';
import {Button, Navbar, Container, Carousel } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      

      <Navbar>
      <Container>
        <Navbar.Brand>Santa.</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a>You</a>
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
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




    </div>
  );
}

export default App;
