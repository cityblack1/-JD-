$(function() {
    /*categorys侧边栏显示隐藏*/
    (function() {
        $('.dd-inner .item').each(function(index, element) {
            $(this).mouseover(function() {
                $(this).addClass('itemhover');
                $('.categorys .dorpdown-layer').eq(0).show();
                $('.categorys .dorpdown-layer .item-sub').eq(index).show();
            }).mouseout(function() {
                $(this).removeClass('itemhover');
                $('.categorys .dorpdown-layer').eq(0).hide();
                $('.categorys .dorpdown-layer .item-sub').hide();
            });
        });
        $('.categorys .dorpdown-layer .item-sub').each(function(index, element) {
            $(this).mouseover(function() {
                $('.categorys .dorpdown-layer').eq(0).show();
                $(this).show();
                $('.dd-inner .item').eq(index).addClass('itemhover');
            }).mouseout(function() {
                $('.categorys .dorpdown-layer').eq(0).hide();
                $(this).hide();
                $('.dd-inner .item').eq(index).removeClass('itemhover');
            });
        });
    })();


    /*focus轮播图*/
    (function() {
        var icur = 0;
        var now = 0;
        var otimer = null;
        $('#focus .slider-panel').eq(0).css({
            'opacity': 1,
            'zIndex': 1
        });
        var timer = setInterval(function() {
            $('#focus .slider-next').click();
        }, 3000);
        //自动
        $('#focus .slider').mouseover(function() {
            $('#focus .slider-next').show();
            $('#focus .slider-prev').show();
            clearInterval(timer);
        }).mouseout(function() {
            $('#focus .slider-next').hide();
            $('#focus .slider-prev').hide();
            timer = setInterval(function() {
                $('#focus .slider-next').click();
            }, 3000);
        });
        //手动
        $('#focus .slider-prev').click(function() {
            now = icur - 1;
            if (now < 0) {
                now = 5;
            }
            clearInterval(otimer);
            fadein(now);
        });
        $('#focus .slider-next').click(function() {
            now = icur + 1;
            now %= 6;
            clearInterval(otimer);
            fadein(now);
        });
        $('#focus .slider-extra .slider-item').mouseover(function() {
            clearInterval(otimer);
            fadein($(this).index());
        });

        function fadein(inow) {
            if (icur == inow) {
                return;
            }
            otimer = setTimeout(function() {
                $('#focus .slider-panel').eq(icur).animate({
                    'opacity': 0,
                    'zIndex': 0
                }, 400, 'swing');
                $('#focus .slider-item').eq(icur).removeClass('slider-selected');
                icur = inow;
                $('#focus .slider-panel').eq(icur).animate({
                    'opacity': 1,
                    'zIndex': 1
                }, 400, 'swing');
                $('#focus .slider-item').eq(icur).addClass('slider-selected');
            }, 300);
        }
    })();

    /*今日推荐滚动图片*/
    (function() {
        var icur = 1;
        var flag = true;
        $('#todays .slider-next').click(function() {
            if (flag) {
                flag = false;
                icur++;
                $('#todays .slider-main').animate({
                    'left': -1000 * icur
                }, 1000, 'swing', function() {
                    if (icur >= 5) {
                        icur = 1;
                        $('#todays .slider-main').css('left', '-1000px');
                    }
                    flag = true;
                });
            }

        });
        $('#todays .slider-prev').click(function() {
            if (flag) {
                flag = false;
                icur--;
                $('#todays .slider-main').animate({
                    'left': -1000 * icur
                }, 1000, 'swing', function() {
                    if (icur <= 0) {
                        icur = 4;
                        $('#todays .slider-main').css('left', '-4000px');
                    }
                    flag = true;
                });
            }

        });
    })();

    /*clothes选项卡*/
    (function() {
        $('#clothes .tab-item').mouseover(function(index, element) {
            $('#clothes .tab-selected').removeClass('tab-selected');
            $(this).addClass('tab-selected');
        })
    })();

    /*clothes轮播图*/
    (function() {
        var icur = 0;
        var flag = true;
        var timer = setInterval(function() {
            $('#clothes .slider-next').click();
        }, 2000);
        $('#clothes .slider-main').mouseover(function() {
            clearInterval(timer);
        }).mouseout(function() {
            clearInterval(timer);
            timer = setInterval(function() {
                $('#clothes .slider-next').click();
            }, 2000);
        });
        $('#clothes .slider-item').mouseover(function() {
            clearInterval(timer);
            icur = $(this).index();
            $('#clothes .slider-item').removeClass('slider-selected');
            $('#clothes .slider-item').eq(icur).addClass('slider-selected');
            $('#clothes .slider-main').animate({
                'left': -439 * (icur + 1)
            }, 500, 'swing');
        });
        $('#clothes .slider-next').click(function() {
            if (flag) {
                icur++;
                flag = false;
                $('#clothes .slider-item').removeClass('slider-selected');
                if (icur >= 4) {
                    $('#clothes .slider-item').eq(0).addClass('slider-selected');
                } else {
                    $('#clothes .slider-item').eq(icur).addClass('slider-selected');
                }
                $('#clothes .slider-main').animate({
                    'left': -439 * (icur + 1)
                }, 500, 'swing', function() {
                    if (icur >= 4) {
                        icur = 0;
                        $('#clothes .slider-main').css('left', '-439px');
                    }
                    flag = true;
                });
            }
        });
        $('#clothes .slider-prev').click(function() {
            if (flag) {
                icur--;
                flag = false;
                $('#clothes .slider-item').removeClass('slider-selected');
                if (icur < 0) {
                    $('#clothes .slider-item').eq(3).addClass('slider-selected');
                } else {
                    $('#clothes .slider-item').eq(icur).addClass('slider-selected');
                }
                $('#clothes .slider-main').animate({
                    'left': -439 * (icur + 1)
                }, 500, 'swing', function() {
                    if (icur < 0) {
                        icur = 3;
                        $('#clothes .slider-main').css('left', '-1756px');
                    }
                    flag = true;
                });
            }
        });
    })();

    /*share滚动图片*/
    (function() {
        var icur = 6;
        $('#share ul').css({
            'position': 'absolute',
            'top': '-720px'
        });
        var timer = setInterval(function() {
            move();
        }, 2000);
        $('#share').mouseover(function() {
            clearInterval(timer);
        }).mouseout(function() {
            timer = setInterval(function() {
                move();
            }, 2000);
        });

        function move() {
            icur--;
            $('#share ul').animate({
                'top': -120 * icur
            }, 1000, 'swing', function() {
                if (icur <= 2) {
                    icur = 6;
                    $('#share ul').css({
                        'top': '-720px'
                    });
                }
            });
        }
    })();
});

function search_click(){
    var keywords = $('#search_keywords').val().replace(' ', '_'),
        request_url = '';

    if(keywords == ""){
        return
    }

    else{
        request_url = "/search/"+keywords
    }
    window.location.href = request_url
}
