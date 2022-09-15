import React from 'react';
import './style.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Counter:1
        }
    }
    handleIncrement = () => {this.setState({Counter: this.state.Counter+1,})}
    handleDecrement = () => {this.setState({Counter: this.state.Counter-1,})}
    handleReset = () => {this.setState({Counter: 0})}
    render(){
    return(
        <>
    <center>
        <h1>Counter App</h1>
        <h1>{this.state.Counter}</h1>
        <button className="btn" onClick={this.handleIncrement}>Increment</button>
        <button className="btn" onClick={this.handleDecrement}>Decrement</button>
        <button className="btn" onClick={this.handleReset}>Reset</button>
    </center>
        </>
    )
    }
}


export default Counter;