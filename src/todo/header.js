import React, {Component} from 'react';
import add from '../add.svg';

export class InputBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: this.refs.inputRef.value
        });
    }

    handleClick = (event) => {
        this.state.value === '' ? alert(`Please write something.`) : this.props.handleDataFromInput(this.state.value);
        this.setState({
            value: '',
        });
    }

    render() {
        return (
                <header>
                <input type="text" placeholder="Enter an activity.." className="itemInput" 
                    value={this.state.value} onChange={this.handleChange} ref = "inputRef"/>
                <button className = "addButton" onClick = {this.handleClick}>
                    <img src={add} alt="Add" />
                </button>
            </header>
        )
    }
}