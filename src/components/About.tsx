// @ts-nocheck
import React from "react";
import { Card, Button } from "react-bootstrap";



function About(){
    return(
        <Card className="text-center">
  <Card.Header>Welcome to my test page</Card.Header>
  <Card.Body>
    <Card.Title>Are you ready for see my page?</Card.Title>
    <Card.Text>
        Please, Click on some tab to the Navbar
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">Moment is comming</Card.Footer>
</Card>
    )
  }
  
  export default About;
