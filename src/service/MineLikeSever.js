
"use strict"
import callApi from "../utils/fetchApi";
import DzCommon from "../constants/dzCommon";


module.exports = {
    getDiscussRec:function(cb){
        let url = DzCommon.MYLIKE;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.items);
            })
        })
    }
}
