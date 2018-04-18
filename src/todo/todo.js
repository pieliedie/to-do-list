import React, { Component } from 'react';
import { ToDoItem } from './todo-item';
export class ToDoList extends Component {
  render() {
    const rows = [];
    this.props.rows.forEach(item => {
      rows.push(
        <ToDoItem
          key={this.props.rows.indexOf(item)}
          id={this.props.rows.indexOf(item)}
          completed={item.completed}
          value={item.value}
          handleCompleteCallback={this.props.handleCompleteCallback}
          handleDeleteCallback={this.props.handleDeleteCallback}
        />
      );
    });
    return (
      <div>
        <ul className="todo">{rows}</ul>
      </div>
    );
  }
}
