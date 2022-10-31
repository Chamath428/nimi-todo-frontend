import React from "react";
import { Container,Accordion,Row,Col,Card,Button,Form } from "react-bootstrap";
import Header from "../components/sidebar";
import '../styles/home.css'
import InputGroup from 'react-bootstrap/InputGroup';
import { BiTrash } from "react-icons/bi";

const HomePage=()=>{
    return(
        <div>
            <Header></Header>
            <Container className='main-container'>

                {/* Top section starts */}

                <Row className='justify-content-between'>
                    <Col lg={6}><h2>All To-Dos</h2></Col>
                    <Col lg={2}>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col> 
                </Row>

                {/* Top section ends */}


                {/* Filtering starts */}

                <Row className='justify-content-between'>
                    <Col lg={2}>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Sort by</Form.Label>
                        <Form.Select size="lg">
                            <option value='1'>All</option>
                            <option value='2'>Duration</option>
                            <option value='3'>Priority</option>
                        </Form.Select>
                    </Form.Group>
                    </Col> 
                </Row>

                {/* Filtering ends */}
                
                {/* All To do list starts */}
                <Row className='mt-2'>

                {/* To do list starts */}
                    <Col lg={4}>
                        <Container className='middle-container  shadow-lg p-3 mb-5 bg-body rounded'>
                            <div><h4>To Do</h4></div>
                            
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0" className='mb-2 accordian-info'>
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                            <Row>
                                                <Col lg={12} className='d-flex flex-row-reverse'>
                                                    <Button variant="danger"><BiTrash className='icon'/></Button>
                                                </Col>
                                            </Row>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        <Row className='mb-2'>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>Date</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        12.00 P.M
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>Priority</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        12.00 P.M
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            
                                        </Row>

                                        <Row className='mb-2'>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>Start Time</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        12.00 P.M
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>End Time</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        12.00 P.M
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            
                                        </Row>

                                        <Row>
                                            <Col sm={12} className='d-flex flex-row-reverse gap-2'>
                                                <Button variant="primary">Move to in-progress</Button>{' '}

                                                <Button variant="success">Mark as completed</Button>{' '}
                                            </Col>
                                        </Row>
                                            

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='mb-2'>
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Container>
                    </Col>
                {/* To do list ends */}

                {/* In progress list starts */}

                    <Col lg={4}>
                        <Container className='middle-container  shadow-lg p-3 mb-5 bg-body rounded'>
                                <div><h4>In Progress</h4></div>
                                
                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0" className='mb-2 accordian-info'>
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col lg={12} className='d-flex flex-row-reverse'>
                                                    <Button variant="danger"><BiTrash className='icon'/></Button>
                                                </Col>
                                            </Row>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            <Row className='mb-2'>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>Date</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>Priority</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                
                                            </Row>

                                            <Row className='mb-2'>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>Start Time</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>End Time</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                
                                            </Row>

                                            <Row>
                                                <Col sm={12} className='d-flex flex-row-reverse gap-2'>
                                                    <Button variant="success">Mark as completed</Button>{' '}
                                                </Col>
                                            </Row>
                                                

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className='mb-2'>
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                        </Container>
                    </Col>

                {/* In progress list ends */}

                {/* Complete list starts */}

                    <Col lg={4}>
                        <Container className='middle-container  shadow-lg p-3 mb-5 bg-body rounded'>
                                <div><h4>Completed</h4></div>
                                
                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0" className='mb-2 accordian-info'>
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col lg={12} className='d-flex flex-row-reverse'>
                                                    <Button variant="danger"><BiTrash className='icon'/></Button>
                                                </Col>
                                            </Row>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            <Row className='mb-2'>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>Date</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>Priority</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                
                                            </Row>

                                            <Row className='mb-2'>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>Start Time</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col sm={6}>
                                                    <Card>
                                                        <Card.Header>End Time</Card.Header>
                                                        <Card.Body>
                                                            <p>
                                                            12.00 P.M
                                                            </p>

                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                
                                            </Row>                                                

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className='mb-2'>
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                        </Container>

                    </Col>

                {/* Complete list ends */}

                </Row>

                {/*All To do list ends */}

            </Container>
        </div>
    )
}

export default HomePage;