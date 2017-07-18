"use strict"
import callApi from "../utils/fetchApi";
import DzCommon from "../constants/dzCommon";


module.exports = {
    getMNavRec:function(cb){
        let url = DzCommon.MINENAV;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data);
            })
        })
    }
}
