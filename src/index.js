import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/app'
import './library/flexible.js';

import axios from './utils/axios'
import {BrowserRouter,Route} from 'react-router-dom'


ReactDOM.render( 
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>
  ,
    document.getElementById('root')
);

