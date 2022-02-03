var request = require('request');
var {API_URL,AUTH_API} = require('../../static');

function checkGuest(guestToken,cb) {
    var options = {
        uri: API_URL+"/api/v1/guest/check",
        method: 'POST',
        headers: {
            authorization: AUTH_API
        },
        json:{
            guest:guestToken
        }
    };
    request(options, function (error, response, body) {
        if(typeof body == "object"){
            cb(body)
        }else {
            var ret = "";
            try {
                ret = JSON.parse(body)
            } catch (e) { console.log("checkGuest Error",e) }
            cb(ret)
        }
    })
}

function createGuest(cb) {
    var options = {
        uri: API_URL+"/api/v1/guest",
        method: 'POST',
        headers: {
            authorization: AUTH_API
        }
    };
    request(options, function (error, response, body) {
        if(typeof body == "object"){
            cb(body)
        }else {
            var ret = "";
            try {
                ret = JSON.parse(body)
            }
            catch (e) {
                console.log("createGuest Error",e)
            }
            cb(ret)
        }
    })
}

function checkUser(userToken,cb) {
    var options = {
        uri: API_URL+"/api/v1/check-user",
        method: 'POST',
        headers: {
            authorization: AUTH_API,
            void:userToken
        }
    };
    request(options, function (error, response, body) {
        if(typeof body == "object"){
            cb(body)
        }else {
            var ret = "";
            try {
                ret = JSON.parse(body)
            } catch (e) { console.log("checkGuest Error",e) }
            cb(ret)
        }
    })
}

module.exports.checkUser = checkUser;
module.exports.checkGuest = checkGuest;
module.exports.createGuest = createGuest;