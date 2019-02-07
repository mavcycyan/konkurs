var varDelay = 0;
var varCnt = 0;
var varDuration = 0;
var varTo;
var varColor;

$(window).load(function(){
    $('.animate').each(function(id, el){
        varCnt = $(el).attr('data-anim_cnt');
        varDuration = $(el).attr('data-anim_dur');
        if(!varDuration){
            varDuration = 1;
        }
        var durHelper;
        if(varCnt) {
            varColor = $(el).attr('data-anim_color');
            if(!varColor){
                varColor = '#240ac3';
            }            
            
            varTo = $(el).attr('data-anim_to');
            
            durHelper = varDuration / varCnt;
            
            if(!varTo){
                varTo = 'totop';
            }
            
            var cntRows = '';
            if(varTo == 'totop'){
                for(var i = 0; i < varCnt; i++) {
                    cntRows = cntRows+'<span style="height:'+(100/varCnt)+'%;"><span style="background:'+varColor+';transition:'+varDuration+'s;"></span> </span>';
                    varDuration = varDuration - durHelper;
                }
            }
            if(varTo == 'tobottom'){
                varDuration = durHelper;
                for(var i = 0; i < varCnt; i++) {
                    cntRows = cntRows+'<span style="height:'+(100/varCnt)+'%;"><span style="background:'+varColor+';transition:'+varDuration+'s;"></span> </span>';
                    varDuration = varDuration + durHelper;
                }
            }
            $(el).append('<span class="animate-hover">'+
                cntRows+
                '</span>'
            );
        }
        else {
            $(el).append('<span class="animate-hover">'+
                '<span style="height:100%;transition:'+varDuration+'"> </span>'+
                '</span>'
            );
        }
    });
});
$(window).on('scroll load', function(){
    classAnimate(); 
});

function classAnimate(){
    $('.animate').each(function(id, el){
        if($(window).scrollTop() < $(el).offset().top && $(window).scrollTop()+$(window).height() > $(el).offset().top){
            varDelay = $(el).attr('data-anim_delay');
            setTimeout(function(){$(el).addClass('on')},varDelay); 
        }
    });
}
