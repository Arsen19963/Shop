var requestMiddleWare = require('../requestMiddleWare');
var createContent = require('../createContent');

function staticStore(req, res, next) {
    console.log("staticStore")

    var token = "";
    var tokenType = "";
    if(typeof req.cookies.gvach != "undefined"){
        token = req.cookies.gvach;
        tokenType = "guest";
    }

    if(typeof req.cookies.vvach != "undefined"){
        token = req.cookies.vvach;
        tokenType = "user";
    }


     Promise.all(requestMiddleWare.normalRequests(token,tokenType))
        .then(function ([categories,userAuth]){

            if(typeof categories.data.error != "undefined") {
                if(!categories.data.error) {
                    createContent.store.dispatch({type: 'ADD_CATEGORIES', payload: categories.data.data});
                }
            }

            // if(typeof cart.data.error != "undefined") {
            //     if(!cart.data.error) {
            //         createContent.store.dispatch({type: 'ADD_CART', payload: cart.data.data.cart});
            //     }
            // }
            if(typeof userAuth.data.error != "undefined") {
                if(!userAuth.data.error) {
                    if( userAuth.data.data.user.length>0){
                        req.userAuth = true;
                        userAuth.data.data.user[0]['isAuthenticated'] = true;
                        createContent.store.dispatch({type: 'ADD_USER_MAIN_INFO', payload: userAuth.data.data.user[0]});
                    }else{
                        createContent.store.dispatch({type: 'ADD_USER_MAIN_INFO', payload: {isAuthenticated:false}});
                    }
                }else{
                    createContent.store.dispatch({type: 'ADD_USER_MAIN_INFO', payload: {isAuthenticated:false}});
                }
            }else{
                createContent.store.dispatch({type: 'ADD_USER_MAIN_INFO', payload: {isAuthenticated:false}});
            }

            console.log("DONE REQUEST API")
            next()
        })
        .catch(function (error) {
            console.log("normalMiddleWare error", error)
            next()
        })
}

module.exports.staticStore = staticStore;