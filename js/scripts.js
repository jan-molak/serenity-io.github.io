$(document).ready(function() {

	//SHOW HIDE CONTENT ON SMALL SCREENS
	$('#hidden-immersion-button').click(function(){
	    var link = $(this);
	    $('#hidden-immersion').slideToggle('slow', function() {
	        if ($(this).is(':visible')) {
	             $('#hidden-immersion-button').hide();               
	        }    
	    });       
	});
	$('#hidden-flipped-button').click(function(){
	    var link = $(this);
	    $('#hidden-flipped').slideToggle('slow', function() {
	    	if ($(this).is(':visible')) {
	             $('#hidden-flipped-button').hide();               
	        }   
	        /*if ($(this).is(':visible')) {
	             link.text('Close');                
	        } else {
	             link.text('Learn More');                
	        }*/       
	    });       
	});
	$('#hidden-belt-button').click(function(){
	    var link = $(this);
	    $('#hidden-belt').slideToggle('slow', function() {
	        if ($(this).is(':visible')) {
	             $('#hidden-belt-button').hide();               
	        }   
	    });       
	});

	$('#header').stellar({
  		horizontalOffset: 40,
  		verticalOffset: 150
	});

	//HEADER
	$('#header .logo, #header a, #header p').addClass('animated fadeIn');

	//INTRO
	$('#intro h1, #intro .large, #intro .clearfix, #intro .clearfix span, #intro .clearfix h2, #intro .clearfix + p').addClass('animated fadeIn');

  	//THREE STREAMS
	$('#three-streams').waypoint(function() {
		$('#three-streams .clearfix, #three-streams .clearfix span, #three-streams .clearfix h2, #three-streams .clearfix + p, #three-streams ol, #three-streams ol li').addClass('animated fadeIn');
  	}, { offset: '80%' });

  	//HOW IT WORKS
	$('#how-it-works').waypoint(function() {
		$('#how-it-works .clearfix, #how-it-works .clearfix span, #how-it-works .clearfix h2, #how-it-works .clearfix + p, #how-it-works h4').addClass('animated fadeIn');
		$('#how-it-works .hiw-holder').addClass('animated fadeIn');
		$('#how-it-works .hiw-one, #how-it-works .hiw-one ul, #how-it-works .hiw-one li p').addClass('animated fadeIn');
		$('#how-it-works .hiw-two, #how-it-works .hiw-two ul, #how-it-works .hiw-two li p').addClass('animated fadeIn');
		$('#how-it-works .hiw-three, #how-it-works .hiw-three ul, #how-it-works .hiw-three li p').addClass('animated fadeIn');
		$('#how-it-works .hiw-one p, #how-it-works .hiw-two p, #how-it-works .hiw-three p').addClass('animated fadeIn');
  	}, { offset: '80%' });

  	//IMMERSION
	$('#immersion').waypoint(function() {
		$('#immersion .clearfix, #immersion .clearfix span, #immersion .clearfix h2, #immersion p').addClass('animated fadeIn');
  	}, { offset: '80%' });

  	//JOHN
	$('#section-break-john').waypoint(function() {
		$('#section-break-john p').addClass('animated fadeInUp');
  	}, { offset: '80%' });

  	//FLIPPED
	$('#flipped-classroom').waypoint(function() {
		$('#flipped-classroom .clearfix, #flipped-classroom .clearfix span, #flipped-classroom .clearfix h2, #flipped-classroom p').addClass('animated fadeIn');
  	}, { offset: '80%' });

  	//BELT
	$('#belt-system').waypoint(function() {
		$('#belt-system .clearfix, #belt-system .clearfix span, #belt-system .clearfix h2, #belt-system p, #belt-system table').addClass('animated fadeIn');
  	}, { offset: '80%' });

  	//MENTORING
	$('#mentoring').waypoint(function() {
		$('#mentoring .clearfix, #mentoring .clearfix span, #mentoring .clearfix h2, #mentoring p').addClass('animated fadeIn');
  	}, { offset: '80%' });

  	//CONTACT & FOOTER
	$('#contact').waypoint(function() {
		$('#contact .clearfix, #contact .clearfix span, #contact .clearfix img, #contact .clearfix p, .bordered-box, .bordered-box h2, .bordered-box h3, .bordered-box h4, .bordered-box + p').addClass('animated fadeIn');
		$('#footer ul, #footer li').addClass('animated fadeIn');
  	}, { offset: '80%' });

  	//SMOOTH SCROLL
	$("#header a").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {

	      event.preventDefault();

	      var hash = this.hash;

	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 1000, function(){

	      	window.location.hash = hash;
	      });
	    } // End if
	 });

});