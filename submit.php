<?php 
if(isset($_POST['submit'])){
    $to = 'james.waller@independent.co.uk';
    $from = 'LOYAL_SUBSCRIBER_FORM'; // this is your Email address
    $subject = 'Form submission from The Independent';
    $message .= 'First name: ' . $_POST['first_name'] . "\r\n";
    $message .= 'Surname: ' . $_POST['last_name'] . "\r\n\r\n";
    $message .= 'Email Address: ' . $_POST['email'] . "\r\n";
    $message .= 'Phone No: ' . $_POST['phone'] . "\r\n\r\n";
    $message .= 'Address: ' . "\r\n" . $_POST['house_name_number'] . "\r\n";
    $message .= $_POST['street'] . "\r\n";
    $message .= $_POST['town_city'] . "\r\n";
    $message .= $_POST['postcode'] . "\r\n\r\n";
    $message .= 'Interested in Event?: ' . $_POST['interested_event'] . "\r\n\r\n";
    $message .= 'Gift: ' . $_POST['Gift'] . "\r\n\r\n";
    $headers .= 'From: LOYAL SUBSCRIBER FORM';
    // $success = echo "Hello World";
    // print $message;
    $success = mail($to, $subject, $message, $headers);
    header( 'Location: confirmation.html' ) ;
    }
?>