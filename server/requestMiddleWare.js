var {API_URL,AUTH_API} = require('./static');
var axios = require('axios');

function normalRequests(token,tokenType) {

    let header = {
        "authorization": AUTH_API
    };
    if(tokenType == 'user'){
        header['void'] = token;
    }else{
        header['guest'] = token;
    }

    var axiosNormalRequest = [];
    var  normalRequests = [
        {
            method: 'GET',
            headers: header,
            url:`${API_URL}/api/v1/categories`
        },
        {
            method: 'POST',
            headers: header,
            url:`${API_URL}/api/v1/check-user`
        }
    ];

    for(var i=0;i<normalRequests.length;i++){
        axiosNormalRequest.push(axios(normalRequests[i]))
    }

    return axiosNormalRequest;
}

module.exports.normalRequests = normalRequests;