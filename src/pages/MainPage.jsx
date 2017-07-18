import React from "react";
import "../static/js/jquery.js";
import "../static/pcss/discuss.css";

import MainHeader from  "../components/Mine/MainHeader.jsx";
import MainBanner from  "../components/Mine/MainBanner.jsx";
import MineDiscuss from "../components/public/MineDiscuss.jsx";
import MineNewPerson from "../components/Mine/MineNewP.jsx";
import MineLikeMore from "../components/Mine/MineYouLike.jsx"

export default class MainPage extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        //header加号
        $(".header-R").toggle(function(){
            $(this).children().css({"animation":"plus 0.3s 0s linear"})
            $(this).next().slideDown();
        },function(){
            $(this).children().css({"animation":"sub 0.3s 0s linear"});
            $(this).next().css({"display":"none"})
        })
        document.getElementsByTagName("body")[0].addEventListener("touchstart",function(){
            document.getElementsByClassName("nextNav")[0].style.display="none";
            document.getElementsByClassName("header-R")[0].childNodes[0].style.cssText="animation:sub 0.3s 0s linear;";
        });
        //$("body").on("touchstart",function(){
        //    console.log(1111)
        //    $(".nextNav").css({"diaplay":"none"});
        //    $(".header-R").children().css({"animation":"sub 0.3s 0s linear"});
        //})
        //输入框拉伸
        $(window).scroll(function() {
            if($(window).scrollTop()>0){
                $("#Mine .header-l").css({"display":"none"});
                $("#Mine .header-R").css({"display":"none"});
            }else{
                $("#Mine .header-l").css({"display":"block"});
                $("#Mine .header-R").css({"display":"block"});
            }
        });
    }
;p
    render(){
        return(
            <div id="Mine">
                <MainHeader></MainHeader>
                <MainBanner></MainBanner>
                <MineDiscuss></MineDiscuss>
                <MineNewPerson></MineNewPerson>
                <MineLikeMore></MineLikeMore>
            </div>
        )
    }
}

