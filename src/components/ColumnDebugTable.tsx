import * as React from "react";
import { Grid, Table } from 'semantic-ui-react'
import { MandlebrotStruct } from "../Mandlebrot";

interface Props {
  mandlebrotStruct: MandlebrotStruct
  url: string
  imageLoaded: boolean
  mouseX: number | null
  mouseY: number | null
  newR: number | null
  newJ: number | null
  size: number
}

export const ColumnDebugTable: React.FC<Props> =
    (props: Props) => (
      <Grid.Column only="computer" computer={8} textAlign="left">
        <Table inverted fixed striped compact="very" className="debug">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Property</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        <Table.Row>
            <Table.Cell>Mouse X</Table.Cell>
            <Table.Cell>{props.mouseX}px</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mouse Y</Table.Cell>
            <Table.Cell>{props.mouseY}px</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>New R</Table.Cell>
            <Table.Cell>{props.newR}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>New J</Table.Cell>
            <Table.Cell>{props.newJ}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Zoom</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.magnification}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Size</Table.Cell>
            <Table.Cell>{props.size}px</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Real (R)</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.r}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>R Min</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.rmin}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>R Max</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.rmax}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Imaginary (J)</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.j}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>J Min</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.jmin}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>J Max</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.jmax}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Iterations</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.iterations}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>DPI</Table.Cell>
            <Table.Cell>{props.mandlebrotStruct.dpi}</Table.Cell>
          </Table.Row>
        </Table.Body>
        </Table>
      </Grid.Column>
    )