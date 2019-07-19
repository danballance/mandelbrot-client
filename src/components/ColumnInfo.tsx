import * as React from "react";
import { Grid } from 'semantic-ui-react'

export const ColumnInfo: React.FC = (): JSX.Element => (
    <Grid.Column only='computer' computer={8} textAlign="right">
        <div id="intro">
            <p>
        Click anywhere on the image below to re-centre on that locaton.<br/>
        Zoom in and out with the magnifying glass buttons to the right. 
            </p>
        </div>
    </Grid.Column>
)
