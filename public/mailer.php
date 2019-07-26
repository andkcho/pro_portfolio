<?php
	echo "<pre>";
	print_r($_POST['name']);
echo "</pre>";
die;
if ( ( isset( $_POST['name'] ) && $_POST['name'] != "" ) && ( isset( $_POST['phone'] ) && $_POST['phone'] != "" ) && ( isset( $_POST['email'] ) && $_POST['email'] != "" ) ) {
	echo "<pre>";
		print_r($_POST['name']);
	echo "</pre>";
	die;
	$to      = 'jnteerlink8@gmail.com';
	$subject = 'Website Email from ' . $_POST['name'] . "!";
	$message = '
			                <html>
			      			              <head>
			                        <title>' . $subject . '</title>
			                    </head>
			                    <body>
			                        <p>Name: ' . $_POST['name'] . '</p>
			                        <p>Phone: ' . $_POST['phone'] . '</p>                        
			                        <p>Email: ' . $_POST['email'] . '</p>                      
			                        <p>Message: ' . $_POST['message'] . '</p>                        
			                    </body>
			                </html>';
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: ".$_POST['email']."\r\n";
	mail( $to, $subject, $message, $headers );
}











