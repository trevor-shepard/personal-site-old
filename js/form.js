


// Jane - A Personal Portfolio Template.
// Below codes check the user entered values for Form Validation.
// If all values are valid then form proceed using AJAX. 
// All codes rights reserved by Jane - A Personal Portfolio Template.



$(document).ready(function(){

// Restricting the use of ENTER key on form.
$(document).on("keypress","form", function(e){
  if(e.which == 13){
    e.preventDefault();
  }
});

// Setting default behaviours of submit to disabled.
$("input.submit").prop("disabled",true);
$("input.submit").css("cursor","default");

//Form Validation
$(".name, .email, .message").on("blur",function(){
  var input_name = $("input.name").val();
  var input_email = $("input.email").val();
  var email_valid = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((  25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);    
  var tocheckemail = email_valid.test(input_email);
  var input_message = $("textarea.message").val();
  if(!(input_name == "" || input_email == "" || input_message == "") && (tocheckemail !== false)){
    $("input.submit").prop("disabled",false);  
	$("input.submit").css("cursor","pointer");
	$("input.submit").css("opacity",1);
    $("span.error").css("opacity",0);
  }
  else{
    $("input.submit").prop("disabled",true);  
 	$("input.submit").css("cursor","default");
	$("input.submit").css("opacity",0.5);
    $("span.error").css("opacity",1);
  }
});

// End of form validation.

// Form submission using AJAX.
$("input.submit").on('click',function(e){
  var name = $("input.name").val();
  var email = $("input.email").val();
  var message = $("textarea.message").val(); 
  //Calling AJAX 
  $.ajax({
    type:'POST',
    url:'php/contactform.php',
    data : {
    name : name,
    email : email,
    message : message                      
    },
    success:function(){
    $("input.submit").prop("disabled",true);
	$("input.submit").css("cursor","default");
	$("input.submit").css("opacity",0.5);
    $("span.success").css("opacity","0");
    console.log("success");
    }
 });
 //End of AJAX call 
 $("span.success").css("opacity","1");
 e.preventDefault();
 $("form")[0].reset();
});   
 //End of Form Submission.
});
