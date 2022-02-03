var express = require('express');
var router = express.Router();
var log = require("../../logs/log");
var middleware = require('../../middleware/middleWare');
var createContent = require('../../createContent');
var {API_URL,AUTH_API,LANGUAGE} = require('../../static');
var axios = require('axios');

router.post('/:cat_id', function(req, res, next) {
    let reqQuery = {
        cat_id : req.params.cat_id
    }
    validParams(reqQuery,req.cookies)
        .then(function (resultParams) {
            if (resultParams.redirect) {
                log.insertLog(JSON.stringify({error:resultParams.msg,route:"/all",requestType:"POST",function:"validParams",date:new Date()}),"./server/logs/logs.txt");
                res.redirect("/404")
            } else {
                // console.log('resultParams',resultParams)
                getCatalog(resultParams,req.cookies)
                    .then(function (result) {
                        console.log('result',result)
                        res.json({error: false, msg: "1000", data: result.data.data});
                        res.end();
                    })
                    .catch(function (error) {
                        log.insertLog(JSON.stringify({error:error,route:"/catalog",requestType:"POST",function:"getCatalog",date:new Date()}),"./server/logs/logs.txt");
                        res.json({error: true, msg: "786543864648"});
                        res.end();
                    })
            }
        })
})

router.get('/:cat_id',middleware.staticStore,  function(req, res, next) {
    let reqQuery = {
        cat_id : req.params.cat_id
    }
    validParams(reqQuery,req.cookies)
        .then(function (resultParams) {
            if (resultParams.redirect) {
                log.insertLog(JSON.stringify({
                    error: resultParams.msg,
                    route: "/all",
                    requestType: "POST",
                    function: "validParams",
                    date: new Date()
                }), "./server/logs/logs.txt");
                res.redirect("/404")
            } else {
                getCatalog(resultParams, req.cookies)
                    .then(function (result) {
                        createContent.store.dispatch({type: 'ADD_CATALOG', payload: result.data.data});
                        createContent.sendContent(req, res);
                    })
                    .catch(function (error) {
                        log.insertLog(JSON.stringify({
                            error: error,
                            route: "/catalog",
                            requestType: "POST",
                            function: "getCatalog",
                            date: new Date()
                        }), "./server/logs/logs.txt");
                        createContent.store.dispatch({type: 'ADD_CATALOG', payload:[]});
                        createContent.sendContent(req, res);
                    })
            }
        })
        .catch(function () {
            createContent.store.dispatch({type: 'ADD_CATALOG', payload:[]});
            createContent.sendContent(req, res);
        })
})
module.exports = router;

function validParams(reqQuery,reqCookie) {
    return new Promise(function (resolve, reject) {
        var queryInfo = {
            cat_id:null
        };
        if (typeof reqQuery.cat_id != "undefined") {
            queryInfo.cat_id = reqQuery.cat_id
        }else{
            resolve({redirect: true, msg:"cat_id"});
        }
        resolve({
            redirect: false,
            queryInfo:queryInfo
        });
    })
}
function getCatalog(resultParams,reqCookie){
    let token = ""
    if(typeof reqCookie.gvach != "undefined"){
        token = reqCookie.gvach;
    }

    let header = {
        "authorization": AUTH_API,
        "guest":token
    };

    let url = `${API_URL}/api/v1/catalog`;
    var sendrequest = {
        method: 'POST',
        headers: header,
        url:url,
        data:resultParams.queryInfo
    }
    // console.log('sendrequest',sendrequest)
    return axios(sendrequest);
}