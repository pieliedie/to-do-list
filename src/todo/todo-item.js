import React, {Component} from 'react';
import PropTypes from 'prop-types';
import check from '../check.svg';
import trash from '../trash.svg';

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
                    <button className = "complete" onClick = {this.handleComplete}><img src = {check} alt = {this.done}/></button>
                    <button className = "remove" onClick = {this.handleDelete}><img src = {trash} alt = {this.remove}/></button>
                </div>
            </li>);
        }
        
        return (<li>
            {this.props.value}
            <div className = "buttons">
                    <button className = "complete" onClick = {this.handleComplete}><img src = {check} alt = {this.done}/></button>
                    <button className = "remove" onClick = {this.handleDelete}><img src = {trash} alt = {this.remove}/></button>
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