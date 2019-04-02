$(function(){
	$("#menu-trigger").on("click",function(){
		$(".spmenu ul").slideToggle();
		$(this).toggleClass("active");
	});
});
//-----------------------------------------------------------------------------------
jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.fadein').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 100){
                jQuery(this).addClass('scrollin');
            }
        });
    });
    jQuery(window).scroll();
  });
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
$(function(){
    $(".deepblue").css({'left':'-100vw'});
    setTimeout(function(){
        $(".deepblue").stop().animate({'left':'0px'},2100);
    },400);
});
$(function(){
    $(".catch").css({opacity:'0'});
    setTimeout(function(){
        $(".catch").stop().animate({opacity:'1'},1500);
    },1800);
});
$(function(){
    $("h1").css({opacity:'0'});
    setTimeout(function(){
        $("h1").stop().animate({opacity:'1'},800);
    },400);
});
$(function(){
    $(".mainimage ul").css({opacity:'0'});
    setTimeout(function(){
        $(".mainimage ul").stop().animate({opacity:'1'},800);
    },400);
});
$(function(){
    $(".rightmenu").css({opacity:'0'});
    setTimeout(function(){
        $(".rightmenu").stop().animate({opacity:'1'},800);
    },400);
});
$(function(){
    $(".spmenu-btn").css({opacity:'0'});
    setTimeout(function(){
        $(".spmenu-btn").stop().animate({opacity:'1'},800);
    },400);
});
//-----------------------------------------------------------------------------------
$(window).on("scroll", function() {
	if ($(this).scrollTop() > 500) {
		$(".gotop").fadeIn(800);
	} else {
		$(".gotop").fadeOut();
	}
});
$(window).on("scroll", function() {
	if ($(this).scrollTop() > 500) {
		$(".smallmenu").fadeIn(800);
	} else {
		$(".smallmenu").fadeOut();
	}
});
//-----------------------------------------------------------------------------------