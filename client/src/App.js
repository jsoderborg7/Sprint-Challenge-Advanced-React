import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import styled from 'styled-components';
import Logo from './images/World-Cup-Logo.png';

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
          <div className="title">
            <h1>Women's World Cup Players</h1>
            <h2>Ranked by Search Interest June-July 2019</h2>
          </div>
          <div className="middleContent">
            <img src={Logo} alt="Women's World Cup Logo 2019"/>
            <div>
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
        </div>
      </StyledApp>
    )
  }
}

const StyledApp = styled.div `
  .App{

    .title{
      background-color: #edf2ee
      opacity: .8;
      padding: 3%;
    }
    
    h1{
      font-size: 3rem;
      text-align: center;
    }

    h2{
      font-size: 1.5rem;
      text-align: center;
    }

    .middleContent{
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;

      img{
        height: 100%;
        padding: 5%;
        margin: 1%;
        background-color: #edf2ee;
        opacity: .8;
        border-radius: 10px;
        box-shadow: 5px 5px 5px 0:
      }

    }
  }
`;