import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"Reggie", 
            lastName: "White",
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        };
    }


render() {
    return (
        <div className="container-fluid">
            <TitleBar />
            <DisplayName name={this.state} />        
            <NameList arrayOfNames={this.state.names} />       
        </div>
        )
    }
}

export default App;
