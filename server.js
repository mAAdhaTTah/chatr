import express from 'express';
import exphbs from 'express-handlebars';
import http from 'http';
import socketio from 'socket.io';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';

const app = express();

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const state = {};

    res.render('index', {
        app: ReactDOMServer.renderToString(<App {...state} />),
        state: JSON.stringify(state)
    });
});

const server = http.createServer(app);
server.listen(3000);

const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('toserver', function(msg) {
        console.log(msg);
    });
});
