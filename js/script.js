
$(document).ready(function(){
	
	var width = $(window).width();
	//$(".portfolio_links").css({'width': ($("#portfolio_links_cont").width() - 60)/3 +'px'});
	if($(".activeTab").width() < 500){
			//$(".Jackson_Img").css({'width': ($(".activeTab").width() - 10) + 'px'});
	}
	else{
		//$(".Jackson_Img").css({'width': '600px'});			
	}
	
	if(width < 768){
		$(".img-cont").css({'border-right': 'none'});
	}
	else{
		$(".img-cont").css({'border-right': 'medium solid black'});
	}
	
	$("li").click(function(event){
		var tab = $(".active").html();
		$(".active").removeClass("active");
		$(event.target).addClass("active");
		$("#" + tab).removeClass("activeTab");
		$("#" + tab).addClass("inactiveTab");
		tab = event.target.innerText;
		$("#" + tab).removeClass("inactiveTab");
		$("#" + tab).addClass("activeTab");
	});
	
	$(window).resize(function(){
		$(".about-me").css({'height': ($(".img-cont").height() + 'px')});
		var width = $(window).width();
		if($(".activeTab").width() < 600){
			//$(".Jackson_Img").css({'width': ($(".activeTab").width() - 10) + 'px'});
		}
		else{
			//$(".Jackson_Img").css({'width': '600px'});			
		}
		
		//$(".portfolio_links").css({'width': ($("#portfolio_links_cont").width() - 60)/3 +'px'});
		if(width < 768){
			$(".img-cont").css({'border-right': 'none'});
		}
		else{
			$(".img-cont").css({'border-right': 'medium solid black'});
		}
	});
	
	$(".portfolio_links").click(function(event){
		$(".activeTab").addClass("inactiveTab");
		$(".activeTab").removeClass("activeTab");
		$("#" + event.target.name).addClass("activeTab");
		$("#" + event.target.name).removeClass("inactiveTab");
	});
});
