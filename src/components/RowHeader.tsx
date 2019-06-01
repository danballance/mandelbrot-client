import * as React from "react";
import { Grid, Header, Icon } from 'semantic-ui-react'

export const RowHeader: React.FC = () => {
  return (
    <Grid.Row textAlign="right">
      <Grid.Column only='computer' computer={8} ></Grid.Column>
      <Grid.Column computer={8} mobile={16} > 
        <Header as="h1" color="yellow">
          <Icon name="chart line" />
          <Header.Content>Mandlebrot API Client</Header.Content>
        </Header>
      </Grid.Column>          
    </Grid.Row>
  );
}
