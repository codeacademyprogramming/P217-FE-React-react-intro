import { Counter } from './Counter';
import { Todo } from './Todo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
            {isSubmitted ? (
                <Row>
                    <Col xl={6}>
                        <Counter userName={userName} userAge={age} handleReset={handleReset} setAge={setAge} setUsername={setUsername} />
                    </Col>
                    <Col xl={6}>
                        <Todo />
                    </Col>
                </Row>
            ) : (
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
            )}
        </Container>
    );
}

export default App;
