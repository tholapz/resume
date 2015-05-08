<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
<!-- 	<link rel="stylesheet" type="text/css" href="css/bootstrap.css"> -->
<!-- 	<link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css"> -->
	<link rel="stylesheet" type="text/css" href="css/main.css">
   <link rel="shortcut icon" href="img/favicon.png">
<link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:700' rel='stylesheet' type='text/css'>
    <title>Kamol Treewatchararat</title>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">

      <div class="page">
        <h1 class="myname"><a href="http://www.tholapz.com"><span>Kamol Treewatchararat</span></a></h1>
       <hr/>
       <div class="nav-bar">
       <ul>
       <li><a href="../index.html">Home</a></li>
       <li><a href="../experience.html">Resume</a></li>
       <li><a href="../projects.html">Projects</a></li>
       <li><a href="https://github.com/tholapz" target="_blank">Github</a></li>
      <li><a href="http://blog.tholapz.com">Blog</a></li>
	   <li><strong>Contact</strong></li>
       </ul>
       </div>
       <hr/>
       
       <div class="content">
		   <div class="intro">
	
			<form role="form" action="contact.php" method="post" accept-charset="utf-8">
			<div class="form-group">
				<label for="txt_email">Email Address</label>
				<input id="txt_email" class="form-control" type="textfield" name="txt_email" value="" placeholder="example@company.com">				
			</div>
			<div class="form-group">
			<label for="txt_message">Message</label>
			<textarea class="form-control" id="txt_message" name="txt_message" value="" placeholder="write a message.."></textarea>
			</div>
			<button id="btn_submit" class="btn btn-default" type="submit" name="btn_submit">Submit</button>
			</form>
			</div>
       </div>
       </div>
      </div>
    </div>
<script type="text/javascript" src="http://codeorigin.jquery.com/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
  </body>
</html>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	
	if ($_POST['txt_email'] != '' && $_POST['txt_message'] != ''){
		$to      = 'kamol@tholapz.com';
		$subject = 'from contact tholapz.com';
		$message = $_POST['txt_message'];
		$headers = 'From: kamol@tholapz.com' . "\r\n" .
				    'Reply-To: kamol@tholapz.com' . "\r\n" .
				    'X-Mailer: PHP/' . phpversion();

		mail($to, $subject, $message, $headers);
	}
}