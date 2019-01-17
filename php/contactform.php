

// Jane - A Personal Portfolio Template.
// All codes rights reserved by Jane - A Personal Portfolio Template. 


<?
$from = $_POST['email'];
$to = "connect@curioustheme.tk";

$header = $_POST['email'];
$subject = "Official";

$message = "Name = ".$_POST['name'] ."\nMessage = ".$_POST['message'];
mail($to,$subject,$header,$message);
?>