import render from './render';
import { matchRoutes } from 'react-router-config';
import Routes from '../src/router/Routes';
/************* Create store *************/
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/reducers";
import reduxThunk from "redux-thunk";
const store =  createStore(rootReducer, {}, applyMiddleware(reduxThunk));
/************* Create store *************/

async function sendContent(req,res) {
    // console.log("sendContent")
    // console.log("req.pathname",req.originalUrl)

    const actionsTemp = matchRoutes(Routes, req.originalUrl).map(({ route }) => !route.component.preload ? route.component : route.component.preload().then(res => res.default));
    // console.log("actionsTemp",actionsTemp)
    const loadedActions = await Promise.all(actionsTemp);
    // console.log("loadedActions",loadedActions)
    // const actions = loadedActions
    //     .map(component => component.fetching ? component.fetching({...store, path: req.path }) : null)
    //     .map(async actions => await Promise.all(
    //         (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch()))
    //         )
    //     );


    const context = {};
    const content = render(req.originalUrl, store, context);
    if(req.originalUrl != "/404"){
        res.status(200);
    }else{
        res.status(404);
    }
    res.send(content);
}

module.exports.sendContent = sendContent;
module.exports.store = store;