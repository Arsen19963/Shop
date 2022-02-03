import {normalRequests,axiosNormalRequest} from './requestMiddleWare';

const routers = [
    {
        path:"/",
        type:"normal"
    },
    {
        path:"/sign-in",
        type:"normal"
    },
    {
        path:"/profile",
        type:"auth"
    }
];

function requireMiddleWare(path,store,callback) {
    var routeType = "";

    // normalMiddleWare(axiosNormalRequest,store,callback)

    // for(var i=0;i<routers.length;i++){
    //     if(path == routers[i]['path']){
    //         routeType = routers[i]['type'];
    //         break;
    //     }
    // }
    //
    // if(routeType == "normal"){
    //     normalMiddleWare(axiosNormalRequest,store,callback)
    // }else if(routeType == "auth"){
    //     authMiddleWare(axiosNormalRequest,store,callback)
    // }
}

module.exports.requireMiddleWare = requireMiddleWare;

function authMiddleWare() {

}

function normalMiddleWare(allrequest,store,callback) {
    // Promise.all(allrequest)
    //     .then(function ([currency, language]){

            // if(typeof currency.data.error != "undefined") {
            //     if(!currency.data.error) {
            //         store.dispatch({type: 'ADD_CURRENCY', payload: currency.data.data});
            //     }
            // }
            //
            // if(typeof language.data.error != "undefined") {
            //     if(!language.data.error) {
            //         store.dispatch({type: 'ADD_LANGUAGE', payload: language.data.data});
            //     }
            // }

        //     callback({error:false,msg:"1"})
        // })
        // .catch(function (error) {
        //     console.log("normalMiddleWare error", error)
        //     callback({error:true})
        // })
}

function authMiddleWare(allrequest,store,callback) {
//     Promise.all(allrequest)
//         .then(function ([currency, language]){

            // if(typeof currency.data.error != "undefined") {
            //     if(!currency.data.error) {
            //         store.dispatch({type: 'ADD_CURRENCY', payload: currency.data.data});
            //     }
            // }
            //
            // if(typeof language.data.error != "undefined") {
            //     if(!language.data.error) {
            //         store.dispatch({type: 'ADD_LANGUAGE', payload: language.data.data});
            //     }
            // }

            // callback({error:false,msg:"0"})
        // })
        // .catch(function (error) {
        //     console.log("authMiddleWare error", error)
        //     callback({error:true})
        // })
}