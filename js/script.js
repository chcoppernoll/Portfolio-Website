$(document).ready(function(){
	$(".about-me").css({'height': ($(".img-cont").height() + 'px')});
	
	$(window).resize(function(){
		$(".about-me").css({'height': ($(".img-cont").height() + 'px')});
	});
});
