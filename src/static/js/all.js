



var crrH=document.documentElement.clientHeight || document.body.clientHeight;
var crrW=document.documentElement.clientWidth || document.body.clientWidth;
var aleftH=document.getElementsByClassName("aleft")[0];
var arightH=document.getElementsByClassName("aright")[0];
    aleftH.style.cssText="height:"+crrH+"px;overflow:auto;"
    arightH.style.cssText="height:"+crrH+"px;overflow:auto;"
$(".aleft").on("touchstart","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
})


