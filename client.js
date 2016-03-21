import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const state = window.__INITIAL_STATE__ || {};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App {...state}/>,
        document.getElementById('app')
    );
});
