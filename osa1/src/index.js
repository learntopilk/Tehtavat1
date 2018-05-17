import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello Borld and {props.name}!</p>
            <p>You are {props.age} years old.</p>
        </div>
    )
}

const App = () => {
    const now = new Date()
    const a = 10
    const b = 20

    return (
        <div>
            <p>{a} + {b} is {a + b}, mofo!</p>
            <p>Hello world! It's {now.toString()}.</p>
            <Hello name="Peksi" age="34"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
