


//切换选项卡
$(".price2").on("touchstart","li",function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index=$(this).index();
    $(".content").children().eq(index).addClass("show").siblings().removeClass("show");
})


//查看更多
$(".more").toggle(function(){
    $(this).children().html("收起").addClass("bottom")
    $(this).prev().css("display","block");
},function(){
    $(this).children().html("更多").removeClass("bottom");
    $(this).prev().css("display","none")
})


