import React from 'react'
import { Col } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
import Card from "react-bootstrap/Card";
import { useState } from "react";




const PlayerCard = ({legend}) => {
  const [show, setShow] =useState(false)
  return (
    
      <Col className="player-card" xs={10} sm={8} md={6} lg={4} xl={3}>
              <Card  role="button" onClick={()=> setShow(!show)}>
                {
                    !show ?
                    <Card.Img variant="top" src={legend.img} title={legend.name} alt={legend.name} /> :
                    <> <Card.Header>
                  <Card.Title>{legend.name}</Card.Title>
                </Card.Header>
                <ul className="m-auto">
                    {legend.statistics.map(item=> 
                    <li className=" list-unstyled h5 text-start">⚽ {item}</li>)}
                </ul>
                <span>{legend.official_career}</span>
                    </>
                   
                }
                
                
              </Card>
            </Col>
    
  )
}

export default PlayerCard