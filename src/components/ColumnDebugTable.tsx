import * as React from "react";
import { Grid, Table } from 'semantic-ui-react'
import { MandlebrotStruct } from "../Mandlebrot";

interface Props {
    mandlebrotStruct: MandlebrotStruct;
    url: string;
    imageLoaded: boolean;
    mouseX: number | null;
    mouseY: number | null;
    newR: number | null;
    newJ: number | null;
    size: number;
}

export const ColumnDebugTable: React.FC<Props> =
    (props: Props): JSX.Element => (
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
                        <Table.Cell id="mouseX">{props.mouseX}px</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Mouse Y</Table.Cell>
                        <Table.Cell id="mouseY">{props.mouseY}px</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>New R</Table.Cell>
                        <Table.Cell id="newR">{props.newR}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>New J</Table.Cell>
                        <Table.Cell id="newJ">{props.newJ}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Zoom</Table.Cell>
                        <Table.Cell id="magnification">
                            {props.mandlebrotStruct.magnification}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Size</Table.Cell>
                        <Table.Cell id="size">{props.size}px</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Real (R)</Table.Cell>
                        <Table.Cell id="r">{props.mandlebrotStruct.r}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>R Min</Table.Cell>
                        <Table.Cell id="rmin">{props.mandlebrotStruct.rmin}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>R Max</Table.Cell>
                        <Table.Cell id="rmax">{props.mandlebrotStruct.rmax}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Imaginary (J)</Table.Cell>
                        <Table.Cell id="j">{props.mandlebrotStruct.j}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>J Min</Table.Cell>
                        <Table.Cell id="jmin">{props.mandlebrotStruct.jmin}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>J Max</Table.Cell>
                        <Table.Cell id="jmax">{props.mandlebrotStruct.jmax}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Iterations</Table.Cell>
                        <Table.Cell id="iterations">{props.mandlebrotStruct.iterations}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>DPI</Table.Cell>
                        <Table.Cell id="dpi">{props.mandlebrotStruct.dpi}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Grid.Column>
    )