$(window).on('load', function(){
    var slPager = '';
    $('#strange-slider').find('.strange-slider-bl').each(function(id, el){
        
        slPager = slPager + '<li><a href="#" id="pg'+Number(id+1)+'">'+Number(id+1)+'</a></li>'
    });
    $('#strange-slider').append('<ul class="strange-slider-pager">'+slPager+'</ul>');
});
