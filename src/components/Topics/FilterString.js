import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor () {
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterText(val) {
        const names = this.state.names;
        let filtered = [];

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(this.state.userInput)) {
                filtered.push(names[i]);
            }
        }

        this.setState({ filteredArray: filtered })
    }


    render () {
        return (
            <div className='puzzleBox filterStringPB'>
            <h4> Filter String </h4>
                <span className='puzzleText'> Names: { JSON.stringify(this.state.names, null, 10) }</span>
                <input onChange={(e) => this.handleChange(e.target.value )} className='inputLine' type="text"/>
                <button onClick={() => this.filterText(this.state.userInput)} className='confirmationButton'> Filter Text </button>
                <span className='resultsBox filterStringRB'>{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}