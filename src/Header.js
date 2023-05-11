import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/Nj4NDLvr/kisspng-adobe-illustrator-fundal-poster-brief-geometry-beauty-makeup-festival-poster-backg-5a816dab5.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <strong className='p-3 top  text-warning' style={{top:50}} > Best Salons</strong>
          </Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  )
}

export default Header