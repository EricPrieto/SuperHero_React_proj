import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import DisplayName from './DisplayName/DisplayName';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"Reggie", 
            lastName: "White",
        };
    }


render() {
    return (
        <div className="container-fluid">
            <TitleBar />
            <DisplayName name={this.state} />           
        </div>
        )
    }
}

export default App;
