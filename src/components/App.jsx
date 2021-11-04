import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"Reggie", 
            lastName: "White",
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            popup: alert("devCodeCamp")
        };
    }

  

render() {
    return (
        <div className="container-fluid">
            <TitleBar />
            <DisplayName name={this.state} />        
            <NameList arrayOfNames={this.state.names} />   
            <AlertUser message={this.popup} />   
        </div>
        )
    }
}

export default App;
