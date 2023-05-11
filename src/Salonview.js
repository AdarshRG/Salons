import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';

function Salonview() {
    const [restList, setRest] = useState([]);

    //api creation
    const getData = async () => {
      const result = await fetch("/salons.json");
      //asyncronous aanu so json convert to js
      result.json().then((data) => setRest(data.salons));
    };
      //object create for useparams
     const params=useParams()
      console.log(params.id);

    //find single salon data
    const singleSal=restList.find(i=>i.id==params.id)
    console.log(singleSal);

    //userEffects work 2 or3 times so 2 arrays forms stop cheyan aanu []
    useEffect(() => {
      getData();
    }, []);


  return (
    <div>
    {
  singleSal?
        (<Row>
        <Col lg={6} md={6}>
          <img className='w-75 container p-5' style={{height:"700px" }}
          src={singleSal.photograph}/>
          </Col>
          <Col lg={6} md={6} className='mt-5 fs-5'>
  
  <ListGroup className='pe-5 mt-5' >
    
           <ListGroup.Item><h1 className='text-warning'>{singleSal.name}</h1></ListGroup.Item>
          <ListGroup.Item>Address <strong>{singleSal.address}</strong></ListGroup.Item>
          <ListGroup.Item>Neighborhood <strong>{singleSal.neighborhood}</strong></ListGroup.Item>
          <ListGroup.Item>Type <strong>{singleSal.type}</strong></ListGroup.Item>
          <ListGroup.Item>
            <Operatingtime workingTime={singleSal.operating_hours}/>
            <Review reviewList={singleSal.reviews}/>
          </ListGroup.Item>
  
  </ListGroup>
             </Col>
    
        </Row>):""
  }
   </div>
  )
}

export default Salonview