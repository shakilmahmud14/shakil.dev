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

	$('.parallax-bgarea').parallax({
				imageSrc: '../../images/bg-1.jpg'
			});



		// for smooth scolling

	// var Scrollbar = window.Scrollbar;

  	// Scrollbar.init(document.querySelector('#my-scrollbar'), {
  	// 	damping: 0.5,
  	// });








})