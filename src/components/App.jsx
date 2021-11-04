import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:"Reggie", 
            lastName: "White",
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            popup: alert("devCodeCamp"),

            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
        };
    }

  

render() {
    return (
        <div className="container-fluid">
            <TitleBar />
            <DisplayName name={this.state} />        
            <NameList arrayOfNames={this.state.names} />   
            <AlertUser message={this.popup} />   
            <SuperHeroTable />
        </div>
        )
    }
}

export default App;
