<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: *');

ini_set("SMTP", "localhost");
ini_set("smtp_port", "1025");

function sanitize($data) {
  return filter_var($data, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
}

  if (isset($_POST)) {
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    
    $error = [];
    $success = [];
    $fname = (isset($data['firstName']) ? sanitize($data['firstName']) : "");
    $lname = (isset($data['lastName']) ? sanitize($data['lastName']) : "");
    $full_name = $fname . " " . $lname;
    $email = (isset($data['email']) ? sanitize($data['email']) : "");
    $message = (isset($data['message']) ? sanitize($data['message']) : "");
    
    if ($fname === '') {
      $error['fnEmpty'] = "Please enter your first name.";
    }
    if ($lname === '') {
      $error['lnEmpty'] = "Please enter your last name.";
    }
    if ($email === '') {
      $error['emailEmpty'] = "Please enter your email.";
      $email = filter_var($email, FILTER_VALIDATE_EMAIL);
      if ($email === true) {
        $error['emailInvalid'] = "please write a valid email.";
      }
    }
    if ($message === '') {
      $error['messageEmpty'] = "Please write a short message.";
    }
    
  
  
    // there is not error send email
    if (empty($error)) {
  
      $to      = "sarkhan.naqib@gmail.com";
      $subject = 'Sardar.dev Message from ' . $full_name;
      $message = wordwrap($message, 70);
      $headers = 'From: '. $email . "\r\n" .
          'Reply-To: ' . $email . "\r\n" .
          'X-Mailer: PHP/' . phpversion();
  
          // return;
      if(mail($to, $subject, $message, $headers)) {
        $success['emailSended'] = "Your message is send with success. I will get back to very soon!";
      }else {
        $error['messageFailed'] = "Failed to send message. Please try later";
      }
    }
    if (!empty($error)) {
      echo json_encode($error);
      return;
    } else {
      echo json_encode($success);
    }
  }