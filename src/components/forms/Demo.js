import React, { Component } from 'react';
import {Form,Col,Card,Button} from 'react-bootstrap';
class Demo extends Component{
    render(){
        return(
            <>
            <Card border="info" >
  <Card.Header style={{backgroundColor:"#17A2B8",color:"white"}} as="h5">Add New Job</Card.Header>
  <Card.Body>
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Row>
          <Col>
    <Form.Label>JobID</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
  </Col>
  <Col>
  <Form.Label>JobName</Form.Label>
  
  <Form.Control size="sm" type="text" placeholder="Small text" />
  </Col>
  </Form.Row>
  <Form.Row>
          <Col>
          <Form.Label>Max Salary</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
          <Col>
          <Form.Label>Min Salary</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
          </Col>
   </Form.Row>
    <Form.Row>
        <Col>
        <Form.Label>Medical Allowance</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
        </Col>
        <Col>
        <Form.Label>Traveling Allowance</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
  </Col>
        <Col>
        <Form.Label>Education Allowance</Form.Label>
  <Form.Control size="sm" type="text" placeholder="Small text" />
        </Col>
        
    </Form.Row>
  </Form.Group>
  <Button variant="info" type="submit">Submit form</Button>
</Form>
  </Card.Body>
</Card>
           
            </>
        )
    }
}
export default Demo;