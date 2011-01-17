$(document).ready(function(){
	$("#menu ul li").hover(
	  function () {
	    $(this).children('ul').addClass('active');
	  }, 
	  function () {
	    $(this).children('ul').removeClass('active');
	  }
	);
	
	$("a.fancy").fancybox({
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade',
		'width': 570,
		'autoDimensions' :false,
		'overlayColor':'#0F2348'
	});
	
});