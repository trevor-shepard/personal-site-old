


// Jane - A Personal Portfolio Template.
// Below codes includes mobile header transition, burger menu transition and scrolling to certain section when clicked on links.
// All codes rights reserved by Jane - A Personal Portfolio Template.


// Fade-in and Fade-out Header when scrolling.
$(document).ready(function(){
   $(window).on("scroll",function(){
    var mobile_header = $(window).scrollTop();						   
    var hero = $("#hero").height()-200;
    if(mobile_header >= hero){
      $("#mobile_menu").css("top", 0); 
    }
    else{
    $("#mobile_menu").css("top", -100+"px");
	  $("#mobile_menu > .head_wrap > .mobile_header > .menu > span").filter(".border_fade").removeClass("border_fade");
	  $("#mobile_menu > .link_wrap").filter(".menu_fade").removeClass("menu_fade");
    } 
  }); 
});

// Burger Menu Transition.
$("#mobile_menu > .head_wrap > .mobile_header > .menu").on("click",function(){
  $("#mobile_menu > .head_wrap > .mobile_header > .menu > span").toggleClass("border_fade");
  $("#mobile_menu > .link_wrap").toggleClass("menu_fade");
});

// Scrolling back to top when clicking on Logo.
$("#mobile_menu > .head_wrap > .mobile_header > .logo > a").on("click",function(event){
  event.preventDefault();
  $("html,body").stop().animate({
    scrollTop : 0
  },300);
});

// Scroll to certain sections when clicking on Menu links.
$("#mobile_menu > .link_wrap > .mobile_links > ul > li").on("click",function(e){
  $("#mobile_menu > .head_wrap > .mobile_header > .menu > span").filter(".border_fade").removeClass("border_fade");
  $("#mobile_menu > .link_wrap").filter(".menu_fade").removeClass("menu_fade");
  e.preventDefault();
  var get_attr = $(this).find("a").attr("href");
  var target_value = $(get_attr).offset().top - 40;
  $("html,body").stop().animate({
    scrollTop :  target_value
  },300);
});


