import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Todo.css";

export const Todo = () => {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <h1>To do app</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Form.Control type="text" placeholder="enter a todo" className="custom-input" />
                <Button style={{ flex: 1, whiteSpace: 'nowrap', marginLeft: '16px' }}>Add todo</Button>
            </div>
        </>
    )
}