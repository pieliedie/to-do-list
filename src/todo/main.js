import React, {Component} from 'react';
import {ToDoList} from './todo';
import {InputBar} from './header';

export class App extends Component {
    constructor(props){
        super(props);
        this.itemList = [];
        this.state = {
            itemList: this.itemList,
        }
        }

    handleDataFromInput = (dataFromInput) => {
        let data = {
            completed: false,
            value: dataFromInput
        };
        
        this.itemList.push(data);

        this.setState({
            itemList: this.itemList
        });
    }

    handleDeleteCallback = (dataFromListItem) => {
        this.itemList.splice(dataFromListItem,1);
        this.setState({
            itemList: this.itemList
        });
    }

    handleCompleteCallback = (itemIndex, itemStatus)=> {
        this.itemList[itemIndex].completed = itemStatus;
        this.setState({
            itemList: this.itemList
        });
    }

    render(){
        return (
            <div>
                <InputBar handleDataFromInput = {this.handleDataFromInput}/>
                <ToDoList rows = {this.state.itemList} handleCompleteCallback = {this.handleCompleteCallback} handleDeleteCallback = {this.handleDeleteCallback} />
            </div>
        );
    }
}