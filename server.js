import 'babel-polyfill';

import express from 'express';
import exphbs from 'express-handlebars';
import browserify from 'browserify';
import sass from 'node-sass';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app';

const app = express();

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    const state = { headline: 'Hello world!' };

    res.render('index', {
        app: ReactDOMServer.renderToString(<App {...state} />),
        state: JSON.stringify(state)
    });
});

app.get('/client.js', (req, res) => {
    res.set('Content-Type', 'application/javascript');

    browserify({
        debug: true,
        entries: './client.js'
    })
        .transform('babelify')
        .bundle()
        .pipe(res);
});

app.get('/styles.css', (req, res) => {
    sass.render({
        file: './styles.scss',
        sourceMapEmbed: true
    }, (err,result) => {
        if (err) {
            console.log(err.stack);
        }

        res.set('Content-Type', 'text/css');
        res.send(result.css.toString());
    });
});

app.listen(3000);
