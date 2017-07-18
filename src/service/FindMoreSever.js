
"use strict"
import callApi from "../utils/fetchApi";
import DzCommon from "../constants/dzCommon";


module.exports = {
    getFindMoreRec:function(cb){
        let url = DzCommon.FINDMORE;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.imgs);
            })
        })
    }
}

