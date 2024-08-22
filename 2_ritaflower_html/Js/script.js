// document ready 寫一次即可
$(function(){
    // 移除背景影片
    if($(window).width() < 821){
    $("#about video").remove();
    }

    // 交替漢堡按鈕
    $('.hamburger').click(function(){
    // hamburger 切換
        $(this).toggleClass('is-active');
    // navigation 切換
    $('.navigation').toggleClass('show');
    });

    // 滑動至指定位置
    $('.menu a').click(function(){
        let btn = $(this).attr('href'); // 返回取得屬性與值
        let pos = $(btn).offset(); //抓取相對的座標位置
        $('html,body').animate({scrollTop:pos.top},1000); //變數posistion
    });

});

