import React from 'react';
import { List } from 'semantic-ui-react';

const PlayerList = (props) =>{
  return(
    <div>
      <List className="listContainer">
        <List.Item>
          <List.Content>
            <List.Header>{props.name}</List.Header>
            <List.Description>From: {props.country}</List.Description>
            <List.Description>Number of Searches: {props.searches}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
  )
}

export default PlayerList;