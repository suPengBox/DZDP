
var mySwiper = new Swiper ('.slide1', {
    pagination: '.swiper-pagination',

})

 var myDianping=new Swiper('.slide2',{
     paginationClickable: true,
     direction: 'vertical',
     loop:true,
     autoplay:3000,
    spaceBetween: 90,
     autoplayDisableOnInteraction : false,
 })

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
});

//输入框拉伸
$(window).scroll(function() {
    if($(window).scrollTop()>0){
       $(".header-l").css({"display":"none"});
       $(".header-R").css({"display":"none"});
    }else{
       $(".header-l").css({"display":"block"});
       $(".header-R").css({"display":"block"});
    }
});


