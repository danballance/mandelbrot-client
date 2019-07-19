import * as React from "react";
import { Container, Grid, Button } from 'semantic-ui-react'

interface Props {
    onZoomInClicked: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onZoomOutClicked: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onResetClicked: (event: React.MouseEvent<HTMLElement>) => void;
}

export const ColumnMenu: React.FC<Props> = (props: Props): JSX.Element => (
    <Grid.Column mobile={16} computer={8} textAlign="left">
        <Container className="controls">
            <Button.Group>
                <Button 
                    id="zoom-in" 
                    inverted 
                    circular 
                    icon="zoom-in" 
                    onClick={props.onZoomInClicked} />
                <Button 
                    id="zoom-out" 
                    inverted 
                    circular 
                    icon="zoom-out" 
                    onClick={props.onZoomOutClicked} />
            </Button.Group>
            <Button
                id="zoom-reset" 
                inverted 
                icon="fast backward"
                content="Reset" 
                onClick={props.onResetClicked} />    
        </Container>
    </Grid.Column>
)
