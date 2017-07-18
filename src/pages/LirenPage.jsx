import React from "react";
import "../static/js/jquery.js";
import "../static/pcss/discuss.css";

import LiRenHeader from  "../components/LiRen/LiRenHeader.jsx";
import TopLiner from  "../components/public/TopLiner.jsx";
import LiRenBanner from  "../components/LiRen/LiRenBanner.jsx";
import MineDiscuss from  "../components/public/MineDiscuss.jsx";
import LiRenDetails from "../components/LiRen/LiRenDetails.jsx";
import LiRenNav from "../components/LiRen/LiRenNav.jsx";
import LiRenProduct from "../components/LiRen/LiRenProduct.jsx";


export default class LirenPage extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        var liRen=new Swiper('.liSlide-R',{
            direction: 'vertical',
            loop:true,
            autoplay:3000,
            spaceBetween: 90,
            autoplayDisableOnInteraction : false,
        })
        var Select = new Swiper ('.select', {
            freeMode : true,
            slidesPerView : 3.5,
        })

//导航条高度
        $(window).scroll( function() {
            //console.log("scrollTop："+$(window).scrollTop())
            var lamp=1;
            var crrH=document.documentElement.clientHeight || document.body.clientHeight;
            var crrW=document.documentElement.clientWidth || document.body.clientWidth;
            var fontSize=100 * (crrW / 750);
            var navH=fontSize*7.4*2;//
            if($(window).scrollTop()> navH){//7.4初始scrollTop高度，6.67为当前屏幕高度，单位rem
                if(lamp){
                    lamp=0;
                    $(".select").addClass("fixer")
                }
            }else{
                if(lamp==1){
                    $(".select").removeClass("fixer")
                }
            }
        });

//
        $(function(){
            $(".product").children().eq(0).css({"display":"block"}).siblings().css({"display":"none"})
        })

        $(".nav ul").on("touchstart","li",function(){
            $(this).addClass("active").siblings().removeClass("active");
            var index=$(this).index();
            $(".product").children().eq(index).css({"display":"block"}).siblings().css({"display":"none"});
        })
    }

    render(){
        return(
            <div id="Liren">
               <LiRenHeader></LiRenHeader>
               <TopLiner></TopLiner>
               <LiRenBanner></LiRenBanner>
               <MineDiscuss></MineDiscuss>
               <LiRenDetails></LiRenDetails>
               <LiRenNav></LiRenNav>
               <LiRenProduct></LiRenProduct>
            </div>
        )
    }
}