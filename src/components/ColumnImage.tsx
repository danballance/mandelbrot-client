import * as React from "react";
import { Grid, Dimmer, Loader } from 'semantic-ui-react'

interface Props {
  size: number,
  url: string,
  imageLoaded: boolean
  onImageLoad: (event: React.SyntheticEvent) => void
  onMouseMove: (event: React.MouseEvent) => void
  onImageClicked: (event: React.MouseEvent<HTMLImageElement>) => void
}

export const ColumnImage: React.FC<Props> = (props: Props) => {
  const imageStyles = {
    width: props.size + 'px',
    height: props.size + 'px'
  };
  const loadingStyles = {
    display: (props.imageLoaded) ? "none" : "block"
  };
  const hiddenStyles = {
    display: (props.imageLoaded) ? "block" : "none"
  };
  return (
    <Grid.Column mobile={16} computer={8} textAlign="right">
      <div className="imageWrapper" style={imageStyles}>
        <div className="loading" style={loadingStyles}>
          <Dimmer active>
            <Loader inverted size='massive'>Loading</Loader>
          </Dimmer>
        </div>
        <img src={props.url}  
             onLoad={props.onImageLoad}  
             style={hiddenStyles} 
             onMouseMove={props.onMouseMove} 
             onClick={props.onImageClicked} />
      </div>
    </Grid.Column>
  );
}
