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


var {checkGuest,createGuest,checkUser} = require('./routes/auth/check');
app.use(function (req, res, next) {
    req.userAuth = false;
    let {vvach,gvach} = req.cookies;
    console.log("vvach",vvach)
    console.log("gvach",gvach)
    if (typeof vvach == "undefined") {
        if(typeof gvach == "undefined"){
            createGuest(function (guestToken) {
                if(typeof guestToken.data != "undefined"){
                    if(typeof guestToken.data.token != "undefined"){
                        res.cookie("gvach",guestToken.data.token,{maxAge:3600000*24*365});
                        next();
                    }
                }else{
                    next();
                }
            })
        }else{
            checkGuest(gvach,function (guestToken) {
                if(typeof guestToken.data != "undefined"){
                    if(typeof guestToken.data.token != "undefined"){
                        res.cookie("gvach",guestToken.data.token,{maxAge:3600000*24*365});
                        next();
                    }else{
                        next();
                    }
                }else{
                    next();
                }
            })
        }
    }else{
        next();
    }
})

app.use(function (req, res, next) {
    // var ip = req.connection.remoteAddress;
    // console.log('ip',ip)
    //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    //res.setHeader("Access-Control-Allow-Origin", "http://10.10.31.1");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // OPTIONS, PATCH,
    // res.setHeader('Cache-Control', 'no-cache'); // OPTIONS, PATCH,
    res.setHeader('X-Frame-Options', 'deny'); // OPTIONS, PATCH,
    res.removeHeader('Server');
    res.removeHeader('X-Powered-By');
    // console.log("..............")
    // console.log("cookies",req.cookies)
    // console.log("cookies",req.cookies.product)
    next()
})

var allRoutes = [
    {
        route:require('./routes/Home'),
        name:"Home"
    },
    {
        route:require('./routes/NotFound'),
        name:"Notfound"
    }
];

// app.use('/', require('./routes/Home'));
// app.use('/sign-in', require('./routes/SignUp'));
// app.use('/search', require('./routes/Search'));
// app.use('/product', require('./routes/Product'));
// app.use('/catalog', require('./routes/Catalog'));
// app.use('/categories', require('./routes/Categories'));

var useRoute = [];
for(var i=0;i<Routes.length;i++) {
    for(var j=0;j<allRoutes.length;j++) {
        if(allRoutes[j]['name'] == Routes[i]['sname']){
            if(useRoute.indexOf(allRoutes[j]['name']) == -1) {
                useRoute.push(allRoutes[j]['name'])
                app.use(Routes[i]['spath'], allRoutes[j]['route']);
                // app.use(Routes[i]['spath'], allRoutes[j]['route']);
            }
        }
    }
}
app.use('/auth', require('./routes/auth/auth'));
app.use('/product', require('./routes/public/Product'));
app.use('/catalog', require('./routes/public/Catalog'));
app.use('/sign-up', require('./routes/Signup'));
app.use('/sign-in', require('./routes/SignIn'));
app.use('/cart', require('./routes/Cart'));
app.use('/profile/orders', require('./routes/Profile'));
app.use('/profile/user', require('./routes/Profile'));
app.use('/Profile', require('./routes/Profile'));
app.use('/faq', require('./routes/FAQ'));
app.use('/contact-us', require('./routes/ContactUs'));
app.use('/about-us', require('./routes/AboutUs'));
app.use('/guide', require('./routes/Guide'));
app.use('/complaint', require('./routes/Complaint'));

//
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


// app.get('*', async (req, res) => {
// // console.log("store",store.getState('language'))
//     const context = {};
//     const content = render(req.path, store, context);
//     res.send(content);
//
//     // requireMiddleWare(req.path,store,function (middleData) {
//     //     if(!middleData.error){
//     //
//     //         if(middleData.msg == "1"){
//     //             const context = {};
//     //             const content = render(req.path, store, context);
//     //             res.send(content);
//     //         }else{
//     //             res.redirect('/');
//     //         }
//     //
//     //     }else{
//     //       console.log("errorrrrrrrrrrrrrrrrrrrrrr");
//     //         const context = {};
//     //         const content = render(req.path, store, context);
//     //
//     //         res.send(content);
//     //     }
//     // })
//
// });
Loadable.preloadAll().then(() => {
    app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
});
// app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));

