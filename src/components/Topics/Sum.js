import React, { Component } from 'react';

export default class Sum extends Component {
    constructor () {
        super();

        this.state = {
            number1: '',
            number2: '',
            sum: null
        }
    }
    
    handleChange(val) {
        this.setState({ number1: parseInt(val, 10) })
    }
    
    handleChangeTwo(val) {
        this.setState({ number2: parseInt(val, 10) })
    }

    findSum (num1, num2) {
        let sum = num1 + num2;

        this.setState({ sum: sum })
    }
    
    render () {
        return (
            <div className='puzzleBox sumPB'>
                <h4> Sum </h4>
                <input onChange={ (e) => this.handleChange( e.target.value ) } className='inputLine' type="number"/>
                <input onChange={ (e) => this.handleChangeTwo( e.target.value ) } className='inputLine' type="number"/>
                <button className='confirmationButton' onClick={ () => this.findSum(this.state.number1, this.state.number2)}> Add </button>
                <span className='resultsBox' > Sum: { this.state.sum } </span>

            </div>

        )
    }
}