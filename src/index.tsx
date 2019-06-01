import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Fractal } from './components/Fractal';
import './index.css';

ReactDOM.render(
    <Fractal size={400.0} 
             initMagnification={2.5}
             initR={-0.5} 
             initJ={0.0} 
             initIterations={100} 
             initDpi={200}/>, 
    document.getElementById('root')
);
