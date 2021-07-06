import { Counter } from './Counter';
import { Todo } from './Todo';
import { CountrySearch } from './CountrySearch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import { useState } from 'react';

function App() {
    const [userName, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    const handleReset = () => {
        setAge('');
        setUsername('');
    }

    return (
        <Container>
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <span style={{ marginRight: '1rem' }}>
                                    <Link to="/todo-app">Todo</Link>
                                </span>
                                <span style={{ marginRight: '1rem' }}>
                                    <Link to="/counter-app">Counter</Link>
                                </span>
                                <span style={{ marginRight: '1rem' }}>
                                    <Link to="/country-search">Country search</Link>
                                </span>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route path="/counter-app">
                            <Row>
                                <Col xl={6}>
                                    <Counter userName={userName} userAge={age} handleReset={handleReset} setAge={setAge} setUsername={setUsername} />
                                </Col>
                            </Row>
                        </Route>
                        <Route path="/todo-app">
                            <Row>
                                <Col xl={6}>
                                    <Todo />
                                </Col>
                            </Row>
                        </Route>
                        <Route path="/country-search">
                            <Row>
                                <Col xl={6}>
                                    <CountrySearch />
                                </Col>
                            </Row>
                        </Route>
                        <Route path="/">
                            <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '16px' }}>
                                <Row>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Please enter your name" className="custom-input" onChange={(e) => setUsername(e.target.value)} value={userName} />
                                    </Col>
                                    <Col sm={12} style={{ marginTop: '16px' }}>
                                        <Form.Control type="text" placeholder="Please enter your age" className="custom-input" onChange={(e) => setAge(e.target.value)} value={age} />
                                    </Col>
                                    <Col sm={12}>
                                        <Button style={{ marginTop: '16px' }} type="submit" disabled={!userName}>Submit</Button>
                                    </Col>
                                </Row>
                            </form>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

export default App;
