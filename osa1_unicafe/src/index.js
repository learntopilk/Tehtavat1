import React from 'react';
import ReactDOM from 'react-dom';


/*
const ClickButton = (props) => {
    return (
        <button onClick={this.handleClick(props.label)}>{props.buttonText}</button>
    )
}*/

class Unicafe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            votes: 0,
            good: 0,
            bad: 0,
            ok: 0
        }
    }

    handleClickGood = () => {
        console.log("log");
        console.log(this);
        this.setState({ votes: this.state.votes + 1 });
        this.setState({ good: this.state.good + 1})
        return true;
    }

    handleClickOK = () => {
        console.log("log");
        console.log(this);
        this.setState({ votes: this.state.votes + 1 });
        this.setState({ ok: this.state.ok + 1})
        return true;
    }

    handleClickBad = () => {
        console.log("log");
        console.log(this);
        this.setState({ votes: this.state.votes + 1 });
        this.setState({ bad: this.state.bad + 1})
        return true;
    }


    render() {
        return (
            <div>
                <div>
                    <h5>Miltä maistui?</h5>
                    <button onClick={this.handleClickGood}>Hyvältä</button>
                    <button onClick={this.handleClickOK}>Iha jees oli</button>
                    <button onClick={this.handleClickBad}>Pahalta</button>
                </div>
                <div>
                    <h5>Statistiikkaaaa</h5>
                    <div>
                        <span>Tykänneitä: </span><span>{this.state.good}</span>
                    </div>
                    <div>
                        <span>Semityytyväisiä: </span>{this.state.ok}<span></span>
                    </div>
                    <div>
                        <span>Ei-tykänneitä: </span><span>{this.state.bad}</span>
                    </div>
                </div>
            </div>
        )
    }
}
/*                    <ClickButton label="good" buttonText="Hyvä" />
                                    <ClickButton label="ok" buttonText="Ok" />
                                    <ClickButton label="bad" buttonText="Huono" />*/

ReactDOM.render(<Unicafe />, document.getElementById('root'));

