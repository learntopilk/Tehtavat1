import React from 'react';
import ReactDOM from 'react-dom';


/*
const ClickButton = (props) => {
    return (
        <button onClick={this.handleClick(props.label)}>{props.buttonText}</button>
    )
}*/
const Button = ({ handleClick, label }) => {
    return (
        <button onClick={handleClick}>{label}</button>
    )
}

const Statistics = (props) => {

    return (
        <div className="statistics">
            <h5>Statistiikkaa Statistics-komponentista!</h5>
            <Statistic label="Tykänneitä" value={props.props.good} />
            <Statistic label="Semityytyväisiä" value={props.props.ok} />
            <Statistic label="Ei-tykänneitä" value={props.props.bad} />
            <Statistic label="Keskiarvo" value={props.props.ka} />
            <Statistic label="Positiivisia" value={props.props.pos} />
        </div>
    )
}

const Statistic = ({ label, value }) => {
    if (label === "Positiivisia") {
        return (
            <div>
                <span>{label}: </span><span>{value}%</span>
            </div>
        )
    } else {
        return (
            <div>
                <span>{label}: </span><span>{value}</span>
            </div>
        )
    }
}

class Unicafe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            votes: 0,
            good: 0,
            bad: 0,
            ok: 0,
            ka: 0.00,
            pos: 0.00
        }
    }
    updateStats = () => {
        this.setState({
            ka: ((this.state.good + (this.state.bad * (-1))) / this.state.votes).toFixed(2),
            pos: ((this.state.good / (this.state.votes)) * 100).toFixed(2)
        })
    }

    handleClickGood = () => {
        this.setState({
            votes: this.state.votes + 1,
            good: this.state.good + 1,
        }, this.updateStats)
    }

    handleClickOK = () => {
        this.setState({
            votes: this.state.votes + 1,
            ok: this.state.ok + 1,
        }, this.updateStats)
    }

    handleClickBad = () => {
        this.setState({
            votes: this.state.votes + 1,
            bad: this.state.bad + 1,
        }, this.updateStats)
    }

    render() {
        if (this.state.votes === 0) {
            return (
                <div>
                    <div>
                        <h5>Miltä maistui?</h5>
                        <Button handleClick={this.handleClickGood} label="Hyvältä" />
                        <Button handleClick={this.handleClickOK} label="Iha jees oli" />
                        <Button handleClick={this.handleClickBad} label="Kauheeta huonoo" />
                    </div>
                    <div>
                        <h4>Äänestä nähdäksesi tilastoja</h4>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div>
                    <h5>Miltä maistui?</h5>
                    <Button handleClick={this.handleClickGood} label="Hyvältä" />
                    <Button handleClick={this.handleClickOK} label="Iha jees oli" />
                    <Button handleClick={this.handleClickBad} label="Kauheeta huonoo" />
                </div>
                <div>
                    <Statistics props={this.state} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Unicafe />, document.getElementById('root'));

