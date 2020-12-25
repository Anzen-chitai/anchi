jQuery(function($){
    var navFlg = false;
    $('.menu').on('click',function(){
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
        if(!navFlg){
            $('.gnav__menu__item').each(function(i){
                $(this).delay(i*300).animate({
                    'margin-left' : 0,
                    'opacity' : 1,
                },800,'easeOutBack');
            });
            navFlg = true;
        }
        else{
            $('.gnav__menu__item').css({
                'margin-left' : 100,
                'opacity' : 0,
            });
            navFlg = false;
        }
    });
});
