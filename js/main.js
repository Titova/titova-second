$(function(){
	$('.testimonials-slider').slick({
		arrows: false,
		dots:true,
		autoplay: true,
		autoplaySpeed: 2000,
	})
	$(".menu-toggle").click(function(){
		$(this).toggleClass('active');
		$(".menu").slideToggle(400);
	});
	$work_list_slider = $(".work-list");
	settings = {
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 1800,
		infinite:false,
		appendArrows: '.work-slider-buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" "></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		
	}
	$(window).on("resize load", function(){
		if($(window).width() > 767){
			if($work_list_slider.hasClass('slick-initialized')){
				$work_list_slider.slick("unslick")
			}
			return
		}if(!$work_list_slider.hasClass('slick-initialized')){
			return $work_list_slider.slick(settings);
		}
	});
});