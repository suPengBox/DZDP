

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



