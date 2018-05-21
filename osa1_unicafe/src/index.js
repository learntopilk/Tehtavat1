import React from 'react';
import ReactDOM from 'react-dom';




class Unicafe extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            votes: 0
        }
    }

    handleClick = () => {
        console.log("log");
        console.log(this);
        this.setState({votes: this.state.votes + 1});
        return true;
    }

    ClickButton = (props) => {
        return (
            <button onClick={handleClick}>{props.buttonText}</button>
        )
    }

    render() {
        return (
            <div>
                <div>Miltä maistui?</div>
                <ClickButton buttonText="Hyvä" />
                <ClickButton buttonText="Ok" />
                <ClickButton buttonText="Huono" />
            </div>
        )
    }
}


ReactDOM.render(<Unicafe />, document.getElementById('root'));

