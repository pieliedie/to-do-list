import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    constructor(props){
        super(props);
    this.done = "Done";
    this.remove = "Remove";
    }

    handleComplete = () => {
        this.props.handleCompleteCallback(this.props.id, true);
    }

    handleDelete = () => {
        this.props.handleDeleteCallback(this.props.id);
    }

    render() {
        if (this.props.completed){
            return (<li className = "completed">
                {this.props.value}
                <div className = "buttons">
                    <button className = "complete" onClick = {this.handleComplete}>{this.done}</button>
                    <button className = "remove" onClick = {this.handleDelete}>{this.remove}</button>
                </div>
            </li>);
        }
        
        return (<li>
            {this.props.value}
            <div className = "buttons">
                    <button className = "complete" onClick = {this.handleComplete}>{this.done}</button>
                    <button className = "remove" onClick = {this.handleDelete}>{this.remove}</button>
                </div>
        </li>);
    }

}

ToDoItem.propsType = {
    completed: PropTypes.bool,
    value: PropTypes.string
}

ToDoItem.defaultProps = {
    completed: false,
    value: ''
}