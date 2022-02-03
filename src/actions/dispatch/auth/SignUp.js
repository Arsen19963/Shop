import axios from "axios";

export const onSignUp = (sendParams,cb) => {
    return dispatch => {

        let url = "/sign-up/";
        const options = {
            method: 'POST',
            url: url,
            data:sendParams,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        axios(options)
            .then((response) => {
                if (!response.data.error) {
                    cb({error:false,msg:'ok'})
                }else{
                    cb({error:true,msg:response.data.msg})
                }

            })
            .catch((error) => {
                console.warn("axios error", error)
                cb({error:true,msg:'1104'})
            });
    }
};


export const onSendPhoneCode = (code,cb) => {
    return dispatch => {

        let url = "/sign-up/code";
        const options = {
            method: 'POST',
            url: url,
            data:{code:code},
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        axios(options)
            .then((response) => {
                if (!response.data.error) {
                    var userInfo = {
                        f_name : response.data.data.data[0].f_name,
                        l_name : response.data.data.data[0].l_name,
                        email : response.data.data.data[0].email,
                        phone : response.data.data.data[0].phone,
                        status : response.data.data.data[0].status,
                        token : response.data.data.data[0].token,
                        isAuthenticated : true
                    }
                    dispatch({type: 'ADD_USER_MAIN_INFO', payload: response.data.data.data[0]});
                    cb({error:false,msg:'ok'})
                }else{
                    cb({error:true,msg:response.data.msg})
                }

            })
            .catch((error) => {
                console.warn("axios error", error)
                cb({error:true,msg:'1104'})
            });
    }
};
module.exports.onSignUp = onSignUp;
module.exports.onSendPhoneCode = onSendPhoneCode;