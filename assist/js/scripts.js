jQuery(document).ready(function(){


	$('body').jpreLoader({

	  // default CSS classes for the preloader
	  preMainSection:     '#main-preloader',
	  prePerText:         '.preloader-percentage-text',
	  preBar:             '.preloader-bar',

	  // show percentage value
	  showPercentage:     true,

	  // enable debug mode
	  debugMode:          false,

	  // function
	  splashFunction:     function() {}
	  
	});
















	// side navbar toggler js start hare

	jQuery(".toggle-btn").click(function(){
		jQuery(".main-navbar").slideToggle()
		jQuery(".menuText").toggleClass("close-on").css("opacity","1");
	})

	//side navbar js end hare
	// main navbar
	jQuery(".nav-link").click(function(){
		jQuery(".nav-link").removeClass("active");
		jQuery(this).addClass("active")
	})


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
	
	jQuery(window).scroll(function(){

		var utd = jQuery(window).scrollTop();

		if ( utd > 500) {
			$(".progress-bar").loading();	
		} else {
		}


	})
	
		jQuery(".percent").percentageLoader({
			   valElement: 'p',
			   strokeWidth: 25,
			   bgColor: '#d9d9d9',
			   ringColor: '#d53f3f',
			   textColor: '#9a9a9a',
			   fontSize: '12px',
			   fontWeight: 'normal',
			   window: 500,
			 });











	








})