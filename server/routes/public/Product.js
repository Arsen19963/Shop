var express = require('express');
var router = express.Router();
var log = require("../../logs/log");


var {API_URL,AUTH_API,LANGUAGE} = require('../../static');
var axios = require('axios');

router.post('/:prodId', function(req, res, next) {
    let reqQuery = {
        prodId : req.params.prodId
    }
    validParams(reqQuery,req.cookies)
        .then(function (resultParams) {
            if (resultParams.redirect) {
                log.insertLog(JSON.stringify({error:resultParams.msg,route:"/all",requestType:"POST",function:"validParams",date:new Date()}),"./server/logs/logs.txt");
                res.redirect("/404")
            } else {
                getProduct(resultParams,req.cookies)
                    .then(function (result) {
                        res.json({error: false, msg: "1000", data: result.data.data});
                        res.end();
                    })
                    .catch(function (error) {
                        log.insertLog(JSON.stringify({error:error,route:"/orders",requestType:"POST",function:"getOrders",date:new Date()}),"./server/logs/logs.txt");
                        res.json({error: true, msg: "147411"});
                        res.end();
                    })
            }
        })
})

module.exports = router;

function validParams(reqQuery,reqCookie) {
    return new Promise(function (resolve, reject) {
        var queryInfo = {
            prodId:null
        };
        if (typeof reqQuery.prodId != "undefined" && reqQuery.prodId.length > 0) {
            queryInfo.prodId = reqQuery.prodId
        }else{
            resolve({redirect: true, msg:"prodId"});
        }
        resolve({
            redirect: false,
            queryInfo:queryInfo
        });
    })
}
function getProduct(resultParams,reqCookie){
    let token = ""
    if(typeof reqCookie.gvach != "undefined"){
        token = reqCookie.gvach;
    }

    let header = {
        "authorization": AUTH_API,
        "guest":token
    };

    let url = `${API_URL}/api/v1/product/single`;
    var sendrequest = {
        method: 'POST',
        headers: header,
        url:url,
        data:resultParams.queryInfo
    }
    return axios(sendrequest);
}