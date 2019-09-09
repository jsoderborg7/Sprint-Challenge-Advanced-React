import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import styled from 'styled-components';
import NavBar from './components/NavBar';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      playerData: []
    }
  }

  componentDidMount(){
    this.getPlayer();
  }

  getPlayer = () =>{
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res =>{
        console.log(res.data);
        const playerData = res.data;
        this.setState({playerData})
      })
      .catch(err =>{
        console.log(err);
      })
  }

  render(){
    return(
      <StyledApp>
        <div className="App">
          <NavBar />
          <div className="middleContent">
              {this.state.playerData.map(player =>{
                return <PlayerList
                  name={player.name}
                  country={player.country}
                  searches={player.searches}
                  key={player.id}
                />
              })}
          </div>
        </div>
      </StyledApp>
    )
  }
}

const StyledApp = styled.div `
  .App{


  }
`;