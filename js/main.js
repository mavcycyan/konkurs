$('.h-mob-btn button').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.h-mob-menu').addClass('hidden');
    }
    else {
        $(this).addClass('active');
        $('.h-mob-menu').removeClass('hidden');
    }
});   

/***/

$('.h-srch-btn').click(function(){
    if($('.h-srch-cont').hasClass('active')){
        $('.h-srch-cont').removeClass('active');
    }
    else {
        $('.h-srch-cont').addClass('active');
    }
}); 


/***/

$('.h-mob-srch-btn').click(function(){
    if($('.h-mob-srch-cont').hasClass('active')){
        $('.h-mob-srch-cont').removeClass('active');
    }
    else {
        $('.h-mob-srch-cont').addClass('active');
    }
}); 

/***/
$('.h-right-links a').click(function(e){
    e.preventDefault();
    var lnksTxt = $(this).html();
    switch(lnksTxt){
        case "Вход":
            $('.h-right').addClass('clicked');
            $('.h-right-reg').addClass('hidden');
            if($(this).hasClass('active')){
                $('.h-right-links a').removeClass('active');
                $('.h-right-login').addClass('hidden');
                $(this).removeClass('active');
                $('.h-right').removeClass('clicked');
            }
            else {
                $('.h-right-links a').removeClass('active');
                $('.h-right-login').removeClass('hidden');
                $(this).addClass('active');
            }            
            break;
            
        case "Регистрация":
            $('.h-right').addClass('clicked');
            $('.h-right-login').addClass('hidden');
            if($(this).hasClass('active')){
                $('.h-right-links a').removeClass('active');
                $('.h-right-reg').addClass('hidden');
                $(this).removeClass('active');
                $('.h-right').removeClass('clicked');
            }
            else {
                $('.h-right-links a').removeClass('active');
                $('.h-right-reg').removeClass('hidden');
                $(this).addClass('active');
            }            
            break;
    }
});
