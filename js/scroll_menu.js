


// Jane - A Personal Portfolio Template.
// Below codes adds and remove the class from a tag on scrolling to certain section. 
// All codes rights reserved by Jane - A Personal Portfolio Template.


$(document).ready(function(){
  $(window).on("scroll",function(){
    
	var window_scroll = $(window).scrollTop();
    var portfolio = $("#portfolio").offset().top - 80; 
    var about = $("#about").offset().top - 80; 
    var service = $("#service").offset().top - 80; 
    var blog = $("#blog").offset().top - 80; 
    var contact = $("#contact").offset().top - 80; 
	if(window_scroll >= 0){
	  $("#header > .wrapper > .menu > ul > li > a").filter(".active").removeClass("active");
	  $("#header > .wrapper > .menu > ul > li:nth-child(1) > a").addClass("active");
	}
	if(window_scroll >= portfolio){
	  $("#header > .wrapper > .menu > ul > li > a").filter(".active").removeClass("active");
	  $("#header > .wrapper > .menu > ul > li:nth-child(2) > a").addClass("active");
	}
	if(window_scroll >= about){
	  $("#header > .wrapper > .menu > ul > li > a").filter(".active").removeClass("active");
	  $("#header > .wrapper > .menu > ul > li:nth-child(3) > a").addClass("active");
	}
	if(window_scroll >= service){
	  $("#header > .wrapper > .menu > ul > li > a").filter(".active").removeClass("active");
	  $("#header > .wrapper > .menu > ul > li:nth-child(4) > a").addClass("active");
	}
	if(window_scroll >= blog){
	  $("#header > .wrapper > .menu > ul > li > a").filter(".active").removeClass("active");
	  $("#header > .wrapper > .menu > ul > li:nth-child(5) > a").addClass("active");
	}
	if(window_scroll >= contact){
	  $("#header > .wrapper > .menu > ul > li > a").filter(".active").removeClass("active");
	  $("#header > .wrapper > .menu > ul > li:nth-child(6) > a").addClass("active");
	}
  });
});

