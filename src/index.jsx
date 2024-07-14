import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';

const node =  document.getElementById('app');
const root = ReactDOM.createRoot(node);


root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);






