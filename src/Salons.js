
import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Salons.css";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';

function Salons() {
  const [restList, setRest] = useState([]);

  //api creation
  const getData = async () => {
    const result = await fetch("/salons.json");
    //asyncronous aanu so json convert to js
    result.json().then((data) => setRest(data.salons));
  };
  console.log(restList);
  //userEffects work 2 or3 times so 2 arrays forms stop cheyan aanu []
  useEffect(() => {
    getData();
  }, []);

  return (
    <Row className="ms-2 me-2 mb-2 p-2">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"500px" }}
          src="./sal4.jpg"
          
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"style={{height:"500px" }}
          src="./sal2.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"style={{height:"500px" }}
          src="./sal3.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      {/* <h1 className='text-warning' ><strong>Salons List</strong></h1> */}
      {
      restList.map((sal) => (
        <Col className="p-1" lg={4} md={6}>
          <Link id="l1" to={`/Salonview/${sal.id}`}>
            <Card
              id="c1"
              className="mt-5 ms-5"
              style={{ width: "18rem", height: "410px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={sal.photograph}
              />
              <Card.Body>
                <Card.Title>{sal.name}</Card.Title>
                <Card.Text>{sal.address}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default Salons;
