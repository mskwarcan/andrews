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
		'width': 590,
		'height': 610,
		'autoDimensions' :false,
		'overlayColor':'#0F2348'
	});
	
	$("a.fancy").fancybox({
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade',
		'overlayColor':'#0F2348'
	});
	
	$('body.whats_new_stories a#fancybox-close').append("BACK TO WHATS NEW");
	$('body.management--2 a#fancybox-close').append("BACK TO MANAGEMENT");
	
	///////////// AJAX FORM SUBMITS //////////////////////
	
	$("#new_donation_request").validate();
	$("#new_inquiry").validate();
	
	// jQuery Form Plugin options
	var myFormOptions = {
	  target:        '#new_inquiry',
	  beforeSubmit:  formBeforeSubmit,
	  success:       formAfterSubmit
	};
	
	var myFormOptions2 = {
	  target:        '#new_donation_request',
	  beforeSubmit:  formBeforeSubmit2,
	  success:       formAfterSubmit2
	};

	function formBeforeSubmit() {
	  // PERFORM ACTIONS BEFORE FORM SUBMIT HERE
	  	$("#new_inquiry")[0].reset();
		$('.sent').show();
	  return true;
	}

	function formAfterSubmit()  {
	  // PERFORM ACTIONS AFTER FORM SUBMIT HERE
		$.post("/contact", $("#new_inquiry").serialize());
	}
	
	function formBeforeSubmit2() {
	  // PERFORM ACTIONS BEFORE FORM SUBMIT HERE
	  	$("#new_donation_request")[0].reset();
		$('.sent').show();
	  return true;
	}

	function formAfterSubmit2()  {
	  // PERFORM ACTIONS AFTER FORM SUBMIT HERE
		$.post("/donation_requests", $("#new_donation_request").serialize());
	}
	
	// Make form use jQuery Form Plugin
	$('#new_donation_request').ajaxForm(myFormOptions2);
	$('#new_inquiry').ajaxForm(myFormOptions);
	
	////////////////For Brewers/Retailers//////////////
	
	jQuery("a.for_retailers").modalBox({
		getStaticContentFrom : "#for_retailers"
	});
	
	jQuery("a.for_brewers").modalBox({
		getStaticContentFrom : "#for_brewers"
	});
	
	
	/////////////Beer Brands toggle//////////
	$('a.show').toggle(function() {
	  $(this).html('collaspe section');
	}, function() {
	  $(this).html('expand section');
	});
	
	$('a#domestics').click(function() {
	  $('div.domestics').animate({
	    height: 'toggle'
	  }, 500);
	  return false;
	});
	
	$('a#imports').click(function() {
	  $('div.imports').animate({
	    height: 'toggle'
	  }, 500);
	  return false;
	});
	
	$('a#specialty').click(function() {
	  $('div.specialty').animate({
	    height: 'toggle'
	  }, 500);
	  return false;
	});
	
	$('a#non-alcoholic').click(function() {
	  $('div.non-alcoholic').animate({
	    height: 'toggle'
	  }, 500);
	  return false;
	});
	
	
	
	/////////// CORE VALUES /////////////
	
	$(".core-values #core .integrity").mouseover(
	  function () {
	    $("#integrity_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#integrity_hover").removeClass("active_hover");
	  });
  
	$('.core-values #core .integrity').click(function() {
	  $(".value").removeClass("active");
	  $("#integrity").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #integrity_hover").addClass("active");
	});
	
	$(".core-values #core .family").mouseover(
	  function () {
	    $("#family_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#family_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .family').click(function() {
	  $(".value").removeClass("active");
	  $("#family").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #family_hover").addClass("active");
	});
	
	$(".core-values #core .trust").mouseover(
	  function () {
	    $("#trust_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#trust_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .trust').click(function() {
	  $(".value").removeClass("active");
	  $("#trust").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #trust_hover").addClass("active");
	});
	
	$(".core-values #core .team").mouseover(
	  function () {
	    $("#team_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#team_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .team').click(function() {
	  $(".value").removeClass("active");
	  $("#team").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #team_hover").addClass("active");
	});
	
	$(".core-values #core .open_door").mouseover(
	  function () {
	    $("#open_door_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#open_door_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .open_door').click(function() {
	  $(".value").removeClass("active");
	  $("#open_door").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #open_door_hover").addClass("active");
	});
	
	$(".core-values #core .dedication").mouseover(
	  function () {
	    $("#dedication_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#dedication_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .dedication').click(function() {
	  $(".value").removeClass("active");
	  $("#dedication").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #dedication_hover").addClass("active");
	});
	
	$(".core-values #core .attitude").mouseover(
	  function () {
	    $("#attitude_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#attitude_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .attitude').click(function() {
	  $(".value").removeClass("active");
	  $("#attitude").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #attitude_hover").addClass("active");
	});
	
	$(".core-values #core .image").mouseover(
	  function () {
	    $("#image_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#image_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .image').click(function() {
	  $(".value").removeClass("active");
	  $("#image").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #image_hover").addClass("active");
	});
	
	$(".core-values #core .accountability").mouseover(
	  function () {
	    $("#accountability_hover").addClass("active_hover");
	  }).mouseout( 
	  function () {
		$("#accountability_hover").removeClass("active_hover");
	  }
	);
	
	$('.core-values #core .accountability').click(function() {
	  $(".value").removeClass("active");
	  $("#accountability").addClass("active");
	  $('.core-values .hover').removeClass('active');
	  $(".core-values #accountability_hover").addClass("active");
	});
	
});