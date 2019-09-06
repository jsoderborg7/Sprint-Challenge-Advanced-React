import React from 'react';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';

const PlayerList = (props) =>{
  return(
    <StyledPlayerList>
      <div>
        <List className="listContainer">
          <List.Item>
            <List.Content>
              <List.Header className="playerName">{props.name}</List.Header>
              <List.Description className="playerCountry">Country: {props.country}</List.Description>
              <List.Description className="playerSearches">Number of Searches: {props.searches}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    </StyledPlayerList>
  )
}

const StyledPlayerList = styled.div `
  .listContainer{
    width: 45%;
    margin: auto;
    background-color: #edf2ee;
    opacity: .8;
    border-radius: 10px;
    padding: 3%;
    text-align: center;
    margin-top: 5%;
    


    .playerName{
      font-size: 2.5rem;
      font-weight: bold;
    }

    .playerCountry{
      font-size: 1.2rem;
      padding: 5%;
    }

    .playerSearches{
      font-size: 1rem;
    }
  }
`;

export default PlayerList;