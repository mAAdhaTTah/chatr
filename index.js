const express = require('express');
const exphbs  = require('express-handlebars');
const browserify = require('browserify');
const sass = require('node-sass');
const cssnano = require('cssnano');

const app = express();

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
      app: '<h1>Hello World!</h1>',
      state: '{}'
    })
});

app.get('/client.js', (req, res) => {
    res.set('Content-Type', 'application/javascript');

    browserify({
        debug: true,
        entries: './client.js'
    })
        .transform('babelify', { presets: ['es2015', 'react']})
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
