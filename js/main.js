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
