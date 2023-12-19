jQuery(document).ready(function(){

	// navbar toggler js start hare

	jQuery(".toggle-btn").click(function(){
		jQuery(".main-navbar").slideToggle()
		jQuery(".menuText").text("Close").css("opacity","1");
	})

	// navbar js end hare
	// parallax bg js start hare

	$('.parallax-bgarea').parallax({
				imageSrc: '../../images/bg-1.jpg'
			});









})