import React from "react";
import { Container,Row,Col,Form, Button } from "react-bootstrap";
import Header from "../components/sidebar";
import '../styles/createToDo.css'

const CreateToDo = ()=>{

    return(
        <div>
            <Header></Header>

            <Container className='create-container p-4 shadow-lg p-3 mb-5 bg-body rounded'>
                <h2>Create a new To-Do</h2>
                    <Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Describe your activity" rows={3} />
                            </Form.Group>
                        </Form>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date"/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Priority</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control type="time"/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control type="time" />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row >
                        <Col className='d-flex flex-row-reverse'>
                            <Button>+Add To-Do</Button>
                        </Col>
                        
                    </Row>

            </Container>
        </div>


    );
}

export default CreateToDo;