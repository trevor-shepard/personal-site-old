


// Jane - A Personal Portfolio Template.
// Below code includes two section of code 1st fades-in and hides header section. 
// 2nd when user click on links it scroll automatically to assigned section.
// All codes rights reserved by Jane - A Personal Portfolio Template.


$(document).ready(function(){
  $(window).on("scroll",function(){
    var header_fade = $(window).scrollTop();
    var hero = $("#hero").height()-200;
    if(header_fade >= hero){
      $("#header").css({
        "top" : 0+"px"
      });
    }
    else{
    $("#header").css({
      "top" : -100+"px"
    });
    }
  });
});

$(document).ready(function(){
//Scroll to hero image on click logo
  $("#header > .wrapper > .logo").on("click",function(event){
    event.preventDefault();
    $("html,body").stop().animate({
      scrollTop : 0
    },300);
  });

//Scroll to hero image
  $("#header > .wrapper > .menu > ul > li:nth-child(1)").on("click",function(event){
    event.preventDefault();
    $("html,body").stop().animate({
      scrollTop : 0
    },300);
  });

//Scroll to portfolio
  $("#header > .wrapper > .menu > ul > li:nth-child(2)").on("click",function(event){
    event.preventDefault();
    var portfolio = $("#portfolio").offset().top-40;
    $("html,body").stop().animate({
      scrollTop : portfolio
    },300);
  });

//Scroll to about
  $("#header > .wrapper > .menu > ul > li:nth-child(3)").on("click",function(event){
    event.preventDefault();
    var about = $("#about").offset().top-40;
    $("html,body").stop().animate({
      scrollTop : about
    },300);
  });

//Scroll to service
  $("#header > .wrapper > .menu > ul > li:nth-child(4)").on("click",function(event){
    event.preventDefault();
    var service = $("#service").offset().top-40;
    $("html,body").stop().animate({
      scrollTop : service
    },300);
  });

//Scroll to blog
  $("#header > .wrapper > .menu > ul > li:nth-child(5)").on("click",function(event){
    event.preventDefault();
    var blog = $("#blog").offset().top-40;
    $("html,body").stop().animate({
      scrollTop : blog
    },300);
  });

//Scroll to contact
  $("#header > .wrapper > .menu > ul > li:nth-child(6)").on("click",function(event){
    event.preventDefault();
    var contact = $("#contact").offset().top-40;
    $("html,body").stop().animate({
      scrollTop : contact
    },300);
  }); 
});
