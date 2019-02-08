$(window).on('load', function(){
    var slPager = '';
    $('#strange-slider').find('.strange-slider-bl').each(function(id, el){
        if(id == 0){
            $(el).addClass('active');
            slPager = slPager + '<li><a href="#'+Number(id+1)+'" class="active">'+Number(id+1)+'</a></li>';
        }
        else {
            slPager = slPager + '<li><a href="#'+Number(id+1)+'" >'+Number(id+1)+'</a></li>';
        }
    });
    $('#strange-slider').append('<ul class="strange-slider-pager">'+slPager+'</ul>');
});
var slBef;
var slHref;
var slThis;
$('#strange-slider').on('click', '.strange-slider-pager li a', function(e){
    e.preventDefault();
    slThis = $(this);
    slHref = $(this).attr('href').replace('#', '');
    slBef = $('.strange-slider-bl.active');
    slBef.removeClass('active');
    slBef.addClass('change');
    $('#strange-slider li a.active').removeClass('active');
    slThis.addClass('active'); 
    setTimeout(function(){
        slBef.removeClass('change');
        $('.strange-slider-bl:nth-child('+slHref+')').addClass('active');       
    }, 1000);
  

});
