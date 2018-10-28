<?php 

	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = 'udaysingh@convertguy.com';
	$email_subject = "New Form Submission at ";	

	date_default_timezone_set('Asia/Kolkata');

	$email_subject .= date('Y-m-d H:i:s');

	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email.\n".
						"User Message: $message.\n";

	$to  = "udaysingh236@gmail.com";

	$headers = "From: $email_from \r\n";
	$headers .= "Reply to: $visitor_email \r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: contactform.html");


 ?>