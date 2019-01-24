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

