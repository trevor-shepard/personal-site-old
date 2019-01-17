


// Jane - A Personal Portfolio Template.
// Below code is used for changing the CSS property of Loader section.
// All codes rights reserved by Jane - A Personal Portfolio Template.


$(window).on('load',function(){
  $("#loader").delay(300).animate({
    'opacity' : '0'
	}, 300, function() {
	$("#loader").css("display","none");
  });  
});
