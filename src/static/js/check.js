"use strict";
var nearbL = new Swiper ('.wai', {
    direction: 'vertical',
    freeMode : true,
    height: 85,
    slidesPerView : 7,
})

//切换附近
var show=true;
$(".nav").on("touchstart","li",function(){
    var h= document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    //if(show){
    //    var divm=document.createElement("div");
    //    divm.style="height:"+h+"px;width:"+w+"px;background-color:black;opacity:0.3;z-index:-1;position:absolute;top:0;";
    //    divm.className="meng";
    //    document.querySelector("body").appendChild(divm);
    //    show=false;
    //}
    if(show){
        var meng1="<div class='meng' style='height:"+h+"px;width:"+w+"px;background-color:black;opacity:0.3;z-index:1;position:fixed;top:0;'></div>"
        $("body").append(meng1);
        show=false;
    }
    $(this).children().addClass("bottom");
    $(this).siblings().children().removeClass("bottom");
    var index=$(this).index();
    $("dl").children().eq(index).slideDown().siblings().css({"display":"none"});
})
$("body").on("touchstart",".meng",function(){
    if(!show){
        $(this).css({"display":"none"});
        $("nav dl dd").css({"display":"none"});
        $(".nav li").children().removeClass("bottom") ;
        show=true;
    }
})

//切换商区
$(".nearb-l").on("touchstart","li",function(){
    $(this).addClass(".active1").siblings().removeClass(".active1");
})


//添加表格
var screenW=document.documentElement.clientWidth || document.body.clientWidth;
var echart=document.getElementById("echart");
console.log(screenW);
echart.style.width=0.92*screenW+"px";
echart.style.height=0.58*screenW+"px";
var myChart = echarts.init(document.getElementById('echart'));
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [15, 20, 36, 10, 10, 20]
    }]
};
myChart.setOption(option);
