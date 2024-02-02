jQuery(document).ready(function(){

// scrollit js start hare

$.scrollIt({
upKey: 38,             // key code to navigate to the next section
downKey: 40,           // key code to navigate to the previous section
easing: 'linear',      // the easing function for animation
scrollTime: 500,       // how long (in ms) the animation takes
activeClass: 'active', // class given to the active nav element
onPageChange: null,    // function(pageIndex) that is called when page is changed
}); 

// scroll it js end hare
// side navbar toggler js start hare

jQuery(".toggle-btn").click(function(){
jQuery(".main-navbar").slideToggle()
jQuery(".menuText").toggleClass("close-on").css("opacity","1");
jQuery(this).toggleClass("menu-btn-active");
})

//side navbar js end hare
// main navbar

jQuery(".nav-link").click(function(){
jQuery(".nav-link").removeClass("active");
jQuery(this).addClass("active")
})

// LineProgressbar js start hare

$('#html').LineProgressbar({
percentage:90,
radius: '2px',
height: '10px',
backgroundColor: '#292929',
fillBackgroundColor: '#FBCA14',
});
$('#css').LineProgressbar({
percentage:80,
radius: '2px',
height: '10px',
backgroundColor: '#292929',
fillBackgroundColor: '#FBCA14'
});
$('#jq').LineProgressbar({
percentage:70,
radius: '2px',
height: '10px',
backgroundColor: '#292929',
fillBackgroundColor: '#FBCA14'
});
$('#jv').LineProgressbar({
percentage:75,
radius: '2px',
height: '10px',
backgroundColor: '#292929',
fillBackgroundColor: '#FBCA14'
});	
// LineProgressbar js end hare

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
// Communication circle progress js

jQuery(".percent-one").percentageLoader({
valElement: 'p',
strokeWidth: 25,
bgColor: '#d9d9d9',
ringColor: '#FBCA14',
textColor: '#9a9a9a',
fontSize: '12px',
fontWeight: 'normal',
});
// Creativity circle progress js
jQuery(".percent-two").percentageLoader({
valElement: 'p',
strokeWidth: 25,
bgColor: '#d9d9d9',
ringColor: '#FBCA14',
textColor: '#9a9a9a',
fontSize: '12px',
fontWeight: 'normal',
});
// Project Management circle progress js
jQuery(".percent-three").percentageLoader({
valElement: 'p',
strokeWidth: 25,
bgColor: '#d9d9d9',
ringColor: '#FBCA14',
textColor: '#9a9a9a',
fontSize: '12px',
fontWeight: 'normal',
});
// Project Management circle progress js end
// project carousel js start hare
function detect_active(){
// get active
var get_active = $("#dp-slider .dp_item:first-child").data("class");
$("#dp-dots li").removeClass("active");
$("#dp-dots li[data-class="+ get_active +"]").addClass("active");
}
$("#dp-next").click(function(){
var total = $(".dp_item").length;
$("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
$.each($('.dp_item'), function (index, dp_item) {
$(dp_item).attr('data-position', index + 1);
});
detect_active();
});
$("#dp-prev").click(function(){
var total = $(".dp_item").length;
$("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
$.each($('.dp_item'), function (index, dp_item) {
$(dp_item).attr('data-position', index + 1);
});
detect_active();
});
$("#dp-dots li").click(function(){
$("#dp-dots li").removeClass("active");
$(this).addClass("active");
var get_slide = $(this).attr('data-class');
console.log(get_slide);
$("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
$.each($('.dp_item'), function (index, dp_item) {
$(dp_item).attr('data-position', index + 1);
});
});
$("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
var get_slide = $(this).attr('data-class');
console.log(get_slide);
$("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
$.each($('.dp_item'), function (index, dp_item) {
$(dp_item).attr('data-position', index + 1);
});
detect_active();
});
// project js end hare
// cllint owl carousel js start hare
$(".clint-carousel").owlCarousel({
autoplay:true,
loop:true,
items: 3,
nav:false,
dots:true,
responsive : {
0 : {
items: 1,
},
768 : {
items: 3,
}
}
});
new WOW().init();
})