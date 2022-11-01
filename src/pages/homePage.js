import React from "react";
import { Container,Accordion,Row,Col,Card,Button,Form } from "react-bootstrap";
import Header from "../components/sidebar";
import '../styles/home.css'
import InputGroup from 'react-bootstrap/InputGroup';
import { BiTrash } from "react-icons/bi";
import { useState,useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const HomePage=()=>{
    const [todos,setTodo] = useState([]);
    const [inProgess,setInProgess] = useState([]);
    const [completed,setCompleted] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/todo/getAll/1").then((response) => {
            setTodo(response.data);
            console.log(response);
          })
          .catch((error) => {
            console.log(error)
          });

          axios.get("http://localhost:5000/todo/getAll/2").then((response) => {
            setInProgess(response.data);
            console.log(response);
          })
          .catch((error) => {
            console.log(error)
          });

          axios.get("http://localhost:5000/todo/getAll/3").then((response) => {
            setCompleted(response.data);
            console.log(response);
          })
          .catch((error) => {
            console.log(error)
          });

    },[])

    const changeStatus = (todoId,currentStatus,toBeStatus,todoIndex)=>{
        axios.put("http://localhost:5000/todo/update",{id:todoId,status:toBeStatus}).then((response)=>{
            if(currentStatus==1){
                let todosCopy = [...todos];
                if(toBeStatus==2){
                    let inProgessCopy = [...inProgess];
                    inProgessCopy.push(todos[todoIndex]);
                    todosCopy=todosCopy.filter(todo=>todo.id!=todoId);
                    setTodo(todosCopy);
                    setInProgess(inProgessCopy);
                }
                else if(toBeStatus==3){
                    let completedCopy = [...completed];
                    completedCopy.push(todos[todoIndex]);
                    todosCopy=todosCopy.filter(todo=>todo.id!=todoId);
                    setTodo(todosCopy);
                    setCompleted(completedCopy);
                }
            }
            
            else if(currentStatus==2){
                let inProgessCopy = [...inProgess];
                let completedCopy = [...completed];
                completedCopy.push(inProgessCopy[todoIndex]);
                inProgessCopy=inProgessCopy.filter(todo=>todo.id!=todoId);
                setInProgess(inProgessCopy);
                setCompleted(completedCopy);

            }

        }).catch((error)=>{
            console.log(error);
        })
    }

    const filterToDos = (filterOption)=>{

        if(filterOption==1){
        axios.get("http://localhost:5000/todo/filter/all").then((response)=>{
            setTodo(response.data);
        }).catch((error)=>{
            console.log(error);
        })
        }
        else if(filterOption==2){
        axios.get("http://localhost:5000/todo/filter/duration").then((response)=>{
            setTodo(response.data)
        }).catch((error)=>{
            console.log(error);
        })
        }
        else{
            axios.get("http://localhost:5000/todo/filter/priority").then((response)=>{
            setTodo(response.data)
        }).catch((error)=>{
            console.log(error);
        })

        }
    }

    const deleteToDo = (currentStatus,todoId)=>{
        axios.delete(`http://localhost:5000/todo/delete/${todoId}`).then((response)=>{
            if(currentStatus==1){
            let todosCopy = [...todos];
            todosCopy=todosCopy.filter(todo=>todo.id!=todoId);
            setTodo(todosCopy);
        }else if(currentStatus==2){
            let inProgressCopy = [...inProgess];
            inProgressCopy=inProgressCopy.filter(todo=>todo.id!=todoId);
            setInProgess(inProgressCopy);
        }else if(currentStatus==3){
            let completedCopy = [...completed];
            completedCopy=completedCopy.filter(todo=>todo.id!=todoId);
            setCompleted(completedCopy);
        }
        }).catch((error)=>{
            console.log(error);
        })
    }


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
                        <Form.Select size="lg" onChange={(event) => { filterToDos(event.target.value) }}>
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

                                {todos.length==0?<p>No todo to show</p>:todos.map((todo)=>(
                                    <Accordion.Item eventKey={todos.indexOf(todo)} className='mb-2 accordian-info'>
                                    <Accordion.Header>{todo.activity}</Accordion.Header>
                                    <Accordion.Body>
                                            <Row>
                                                <Col lg={12} className='d-flex flex-row-reverse'>
                                                    <Button variant="danger" onClick={()=>{deleteToDo(1,todo.id)}}><BiTrash className='icon'/></Button>
                                                </Col>
                                            </Row>
                                            <p>
                                            {todo.description}
                                            </p>
                                        <Row className='mb-2'>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>Date</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        {moment(todo.date).format('YYYY-MM-DD')}
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>Priority</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        {todo.priority}
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
                                                        {todo.start_time}
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>End Time</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        {todo.end_time}
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            
                                        </Row>

                                        <Row>
                                            <Col sm={12} className='d-flex flex-row-reverse gap-2'>
                                                <Button variant="primary" onClick={()=>{changeStatus(todo.id,1,2,todos.indexOf(todo))}}>Move to in-progress</Button>{' '}

                                                <Button variant="success" onClick={()=>{changeStatus(todo.id,1,3,todos.indexOf(todo))}}>Mark as completed</Button>{' '}
                                            </Col>
                                        </Row>
                                            

                                    </Accordion.Body>
                                </Accordion.Item>
                                ))}
                            </Accordion>

                        </Container>
                    </Col>
                {/* To do list ends */}

                {/* In progress list starts */}

                    <Col lg={4}>
                        <Container className='middle-container  shadow-lg p-3 mb-5 bg-body rounded'>
                                <div><h4>In Progress</h4></div>
                                
                                <Accordion defaultActiveKey={['0']} alwaysOpen>

                                {inProgess.length==0?<p>No todo to show</p>:inProgess.map((todo)=>(
                                <Accordion.Item eventKey={inProgess.indexOf(todo)} className='mb-2 accordian-info'>
                                <Accordion.Header>{todo.activity}</Accordion.Header>
                                <Accordion.Body>
                                        <Row>
                                            <Col lg={12} className='d-flex flex-row-reverse'>
                                                <Button variant="danger" onClick={()=>{deleteToDo(2,todo.id)}}><BiTrash className='icon'/></Button>
                                            </Col>
                                        </Row>
                                        <p>
                                        {todo.description}
                                        </p>
                                    <Row className='mb-2'>

                                        <Col sm={6}>
                                            <Card>
                                                <Card.Header>Date</Card.Header>
                                                <Card.Body>
                                                    <p>
                                                    {moment(todo.date).format('YYYY-MM-DD')}
                                                    </p>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col sm={6}>
                                            <Card>
                                                <Card.Header>Priority</Card.Header>
                                                <Card.Body>
                                                    <p>
                                                    {todo.priority}
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
                                                    {todo.start_time}
                                                    </p>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col sm={6}>
                                            <Card>
                                                <Card.Header>End Time</Card.Header>
                                                <Card.Body>
                                                    <p>
                                                    {todo.end_time}
                                                    </p>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        
                                    </Row>

                                    <Row>
                                        <Col sm={12} className='d-flex flex-row-reverse gap-2'>
                                            <Button variant="success" onClick={()=>{changeStatus(todo.id,2,3,inProgess.indexOf(todo))}}>Mark as completed</Button>{' '}
                                        </Col>
                                    </Row>
                                        

                                </Accordion.Body>
                            </Accordion.Item>
                            ))}

                                </Accordion>

                        </Container>
                    </Col>

                {/* In progress list ends */}

                {/* Complete list starts */}

                    <Col lg={4}>
                        <Container className='middle-container  shadow-lg p-3 mb-5 bg-body rounded'>
                            <div><h4>Completed</h4></div>
                                
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    {completed.length==0?<p>No completed todos to show</p>:completed.map((todo)=>(
                                    <Accordion.Item eventKey={completed.indexOf(todo)} className='mb-2 accordian-info'>
                                    <Accordion.Header>{todo.activity}</Accordion.Header>
                                    <Accordion.Body>
                                            <Row>
                                                <Col lg={12} className='d-flex flex-row-reverse'>
                                                    <Button variant="danger" onClick={()=>{deleteToDo(3,todo.id)}}><BiTrash className='icon'/></Button>
                                                </Col>
                                            </Row>
                                            <p>
                                            {todo.description}
                                            </p>
                                        <Row className='mb-2'>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>Date</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        {moment(todo.date).format('YYYY-MM-DD')}
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>Priority</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        {todo.priority}
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
                                                        {todo.start_time}
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <Card.Header>End Time</Card.Header>
                                                    <Card.Body>
                                                        <p>
                                                        {todo.end_time}
                                                        </p>

                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            
                                        </Row>
                                            
                                    </Accordion.Body>
                                </Accordion.Item>
                                ))}
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