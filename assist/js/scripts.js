jQuery(document).ready(function(){

	// navbar toggler js start hare

	jQuery(".toggle-btn").click(function(){
		jQuery(".main-navbar").slideToggle()
		// jQuery(".menuText").text("Close").css("opacity","1");
		jQuery(".menuText").toggleClass("close-on").css("opacity","1");
	})

	// navbar js end hare
	$(window).scroll(function(){
		var htd = $(window).scrollTop();

		if ( htd = 3100) {
			$('#html').LineProgressbar({
				percentage:90,
				radius: '3px',
				height: '10px',
				});
			$('#css').LineProgressbar({
				percentage:80,
				radius: '3px',
				height: '10px',
				fillBackgroundColor: '#DA4453'
				});
						
			$('#jq').LineProgressbar({
				percentage:70,
				radius: '3px',
				height: '10px',
				fillBackgroundColor: '#E0C341'
				});
			$('#jv').LineProgressbar({
				percentage:75,
				radius: '3px',
				height: '10px',
				fillBackgroundColor: '#008140'
				});
		} else {

		}
	})
	
				



// top button js hare

	jQuery(".top-button").click(function(){
		jQuery("html").animate({scrollTop: "0px"}, "fast");
	})

	jQuery(window).scroll(function(){

		var utd = jQuery(window).scrollTop();

		if ( utd > 500) {
			jQuery(".top-button").show()
		} else {
			jQuery(".top-button").hide()
		}


	})
	
	








})