$(document).ready(function(){
    //더보기
    $('.more').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.more_txt').slideDown(300);
           }else{
               $('.more_txt').slideUp(300);
           }
    });
    
    //팝업
    $('.btn_play').click(function(){
        $('.pop_play').bPopup({
            closeClass: "btn_close"   
        });
    });
    
    //예고편
    //video slide
    $('.video_wrap').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          arrows: true,
    });

    //스틸컷
    $(".center").slick({
        centerMode: true,
        slidesToShow: 1,
        arrows:false,
        adaptiveHeight: true
    });
    
    $('#stillcut .like').click(function(){
       $(this).toggleClass('on'); 
    });
    
    //wow
    new WOW().init();
    
    //인터뷰
    $('#interview .q_ing').click(function(){
        $(this).css('display','none')
        $(this).next('.q_off').removeClass('q_off');
        $(this).removeClass('q_ing');
        $(this).parent().nextAll('.answer').addClass('on');
        
    })
    
    //탭
    tabAnchor();
    
})

//탭
function tabAnchor() {
	var tabTop = $('.tab').offset().top;
	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		if( tabTop <= scrollTop ){
			$('.tab').addClass('fixed');
		}else{
			$('.tab').removeClass('fixed');
		};
	});
}



