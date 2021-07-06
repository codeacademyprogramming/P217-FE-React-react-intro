import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const Counter = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);
    }

    const handleDecrement = function () {
        if (count !== 0) {
            const updatedCount = count - 1;
            setCount(updatedCount);
        }
    }
    return (
        <>
            <h1>Welcome to our Counter app, you are {props.userAge}</h1>
            <Button onClick={props.handleReset}>Reset my Data</Button>
            <div className="flexbox">
                <h2>Current count: {count}</h2>
                <Button onClick={handleIncrement}>Increment</Button>
                <Button variant="danger" onClick={handleDecrement}>Decrement</Button>
            </div>
        </>
    )
}