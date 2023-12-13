jQuery(document).ready(function(){

	jQuery(".toggle-btn").click(function(){
		jQuery(".main-navbar").slideToggle()
		jQuery(".menuText").text("Close").css("opacity","1");
	})

	$.backstretch(
		[
			"fixed_bg.jpg",
			"fixed_bg1.jpg",
			"fixed_bg2.jpg"
		], 
		{
			duration: 1500, 
			fade: 700
	});





















})