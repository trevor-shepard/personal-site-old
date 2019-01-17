


// Jane - A Personal Portfolio Template.
// Below codes fades-in the button which is placed at bottom right corner and when clicked scrolls to top.
// All codes rights reserved by Jane - A Personal Portfolio Template.


$(document).ready(function(){
  $(window).on("scroll",function(){
    var window_scroll_top = $(window).scrollTop(); 
    var port_section = $("#portfolio").offset().top - 80; 
  	if(window_scroll_top >= port_section){
	  $("#scroll_top").css("display","block");  
    }
    else{
      $("#scroll_top").css("display","none");  
    }
  });
  $("#scroll_top").on("click",function(){
    $("html,body").stop().animate({
      scrollTop : 0
    },300);
 });
});