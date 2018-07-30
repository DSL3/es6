const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 8080);

//console.log('process.env.NODE_ENV |', process.env.NODE_ENV, '|');

if (process && process.emit.env && process.env.NODE_ENV && process.env.NODE_ENV.indexOf('development') > -1 ) {
    const webpackConfig = require('./webpack.config');
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');

    app.use(webpackMiddleware(webpack(webpackConfig)));

    console.log('NODE_ENV >  webpackMiddleware');

} else {
    app.use(express.static('dist'));
    console.log('NODE_ENV > dist');
}   

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname , 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
});