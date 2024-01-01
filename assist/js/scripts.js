jQuery(document).ready(function(){

	// navbar toggler js start hare

	jQuery(".toggle-btn").click(function(){
		jQuery(".main-navbar").slideToggle()
		// jQuery(".menuText").text("Close").css("opacity","1");
		jQuery(".menuText").toggleClass("close-on").css("opacity","1");
	})

	// navbar js end hare

	$('#html').LineProgressbar({
		percentage:90,
		radius: '3px',
		height: '12px',
	});
				
	$('#css').LineProgressbar({
		percentage:80,
		radius: '3px',
		height: '12px',
		fillBackgroundColor: '#DA4453'
		});
				
	$('#jq').LineProgressbar({
		percentage:70,
		radius: '3px',
		height: '12px',
		fillBackgroundColor: '#E0C341'
		});
	$('#jv').LineProgressbar({
		percentage:75,
		radius: '3px',
		height: '12px',
		fillBackgroundColor: '#008140'
		});






})