import React, { useState, useEffect } from "react";
import { Container, Grid } from 'semantic-ui-react'
import { Mandlebrot, MandlebrotStruct, MandlebrotInterface } from "../Mandlebrot";
import { ColumnDebugTable } from "./ColumnDebugTable";
import { ColumnMenu } from "./ColumnMenu";
import { ColumnInfo } from "./ColumnInfo";
import { ColumnImage } from "./ColumnImage";
import { RowHeader } from "./RowHeader";
import './Fractal.css';

export interface Props {
    size: number;
    initMagnification: number;
    initR: number;
    initJ: number;
    initIterations: number;
    initDpi: number;
}

export const Fractal: React.FC<Props> = (props): JSX.Element => {
    const mandlebrot: MandlebrotInterface = Mandlebrot();
    const [mandlebrotStruct, setMandlebrotStruct] = useState<MandlebrotStruct>(mandlebrot.init(
        props.size,
        props.initR,
        props.initJ,
        props.initMagnification,
        props.initIterations,
        props.initDpi
    ));
    const [url, setUrl] = useState<string>('');
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [mouseX, setMouseX] = useState<number|null>(null);
    const [mouseY, setMouseY] = useState<number|null>(null);
    const [newR, setNewR] = useState<number|null>(null);
    const [newJ, setNewJ] = useState<number|null>(null);

    /** REACT HOOKS */
    useEffect((): void => {
        const server = process.env.REACT_APP_API_URI;
        const url = `${server}/render?xmin=${mandlebrotStruct.xmin}&xmax=${mandlebrotStruct.xmax}` +
                `&ymin=${mandlebrotStruct.ymin}&ymax=${mandlebrotStruct.ymax}` +
                `&rmin=${mandlebrotStruct.rmin}&rmax=${mandlebrotStruct.rmax}` +
                `&jmin=${mandlebrotStruct.jmin}&jmax=${mandlebrotStruct.jmax}` +
                `&iterations=${mandlebrotStruct.iterations}&dpi=${mandlebrotStruct.dpi}`;
        setUrl(url);
        setImageLoaded(false);
    }, [mandlebrotStruct]);

    /** EVENTS */
    function onZoomInClicked(event: React.MouseEvent<HTMLButtonElement>): void {
        setMandlebrotStruct(mandlebrot.zoom(mandlebrotStruct, 0.5));
    };

    function onZoomOutClicked(event: React.MouseEvent<HTMLButtonElement>): void {
        setMandlebrotStruct(mandlebrot.zoom(mandlebrotStruct, 2.0));
    };

    function onMouseMove(event: React.MouseEvent): void {
        const mouseX = event.nativeEvent.offsetX;
        const mouseY = event.nativeEvent.offsetY;
        setMouseX(mouseX);
        setMouseY(mouseY);
        setNewR(mandlebrot.getNewR(mandlebrotStruct, mouseY));
        setNewJ(mandlebrot.getNewJ(mandlebrotStruct, mouseX));
    };

    function onImageLoad(event: React.SyntheticEvent): void {
        setImageLoaded(true);
    };

    function onImageClicked(event:  React.MouseEvent<HTMLImageElement>): void {
        if (mouseX && mouseY) {
            setMandlebrotStruct(mandlebrot.imageClicked(mandlebrotStruct, mouseX, mouseY));
        }
    };

    function onResetClicked(event: React.MouseEvent<HTMLElement>): void {
        setMandlebrotStruct(mandlebrot.init(
            props.size,
            props.initR,
            props.initJ,
            props.initMagnification,
            props.initIterations,
            props.initDpi
        ));
    }

    return (
        <Container className="fractal" fluid textAlign="center">
            <Grid>
                <RowHeader />
                <Grid.Row>
                    <ColumnInfo />          
                    <ColumnMenu
                        onResetClicked={onResetClicked}
                        onZoomInClicked={onZoomInClicked}
                        onZoomOutClicked={onZoomOutClicked} 
                    />
                </Grid.Row>
                <Grid.Row>
                    <ColumnImage 
                        size={props.size}
                        url={url}
                        imageLoaded={imageLoaded}
                        onImageLoad={onImageLoad}
                        onMouseMove={onMouseMove}
                        onImageClicked={onImageClicked}
                    />
                    <ColumnDebugTable
                        mandlebrotStruct={mandlebrotStruct}
                        url={url}
                        imageLoaded={imageLoaded}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        newR={newR}
                        newJ={newJ}
                        size={props.size}
                    />
                </Grid.Row>
            </Grid>
        </Container>
    );
}
