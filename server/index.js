// var createError = require('http-errors');

import createError from 'http-errors';
import Loadable from 'react-loadable';
import express from 'express';
import Routes from '../src/router/Routes';
// import { renderToString } from 'react-dom/server';


// import {requireMiddleWare} from './requireMiddleWare';

/************* Create store *************/
// import render from './render';
// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "../src/reducers";
// import reduxThunk from "redux-thunk";
// const store =  createStore(rootReducer, {}, applyMiddleware(reduxThunk));
/************* Create store *************/
var cookieParser = require('cookie-parser');

// const PORT = process.env.PORT || 7072;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/dist', express.static('dist'));

app.use((req, res, next) => {
    if(/\.js|\.css/.test(req.path)) {
        res.redirect('/dist' + req.path);
    } else {
        next();
    }
});

app.use(/\.js$/, express.static('dist'));
// app.use('/dist', express.static('dist'));
app.use('/img', express.static('img'));

var logger = require('morgan');
app.use(logger('dev'));




app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // OPTIONS, PATCH,
    res.setHeader('X-Frame-Options', 'deny'); // OPTIONS, PATCH,
    res.removeHeader('Server');
    res.removeHeader('X-Powered-By');

    next()
})

var allRoutes = [
    {
        route:require('./routes/Home'),
        name:"Home"
    },
    {
        route:require('./routes/About'),
        name:"About"
    },
    {
        route:require('./routes/NotFound'),
        name:"Notfound"
    }
];


var useRoute = [];
for(var i=0;i<Routes.length;i++) {
    for(var j=0;j<allRoutes.length;j++) {
        if(allRoutes[j]['name'] == Routes[i]['sname']){
            if(useRoute.indexOf(allRoutes[j]['name']) == -1) {
                useRoute.push(allRoutes[j]['name'])
                app.use(Routes[i]['spath'], allRoutes[j]['route']);
            }
        }
    }
}
// app.use('/auth', require('./routes/auth/auth'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


Loadable.preloadAll().then(() => {
    app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
});


