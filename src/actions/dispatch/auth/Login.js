import axios from "axios";

export const onLogin = (sendParams,cb) => {
    return dispatch => {

        let url = "/sign-in/";
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
                    dispatch({ type: 'ADD_USER_MAIN_INFO', payload:response.data.data.user });
                    cb({error:false})
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


module.exports.onLogin = onLogin;
