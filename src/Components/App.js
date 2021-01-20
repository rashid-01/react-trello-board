import React, { Component } from 'react';
import "../Styles/App.css";
import Board from './Board';

class App extends Component{
    render(){
        return(
            <div className="App">
                <div className="Header">React Trello Board</div>
                <Board/>
            </div>
        )
    }
}

export default App;