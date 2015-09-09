<?php
if(isset($_POST["submit"])) {
    if ($_POST['name'] == "") {
        echo '<script>alert("Please enter your name.")
                     window.history.go(-1);
;</script>';
    } elseif ($_POST['email'] == "") {
        echo '<script>alert("Please enter your email address")
                     window.history.go(-1);
;</script>';
    } elseif ($_POST['subject'] == "" || $_POST['message'] == "") {
        echo '<script>alert("What? So you gonna send me nothing? LOL");
                     window.history.go(-1);
</script>';
    } else {
        $name = $_POST['name'];
        $senderEmail=$_POST["email"];
        $message = $_POST['message'];
        $mailBody = "Name: $name\nEmail: $senderEmail\n\n$message";
        $to = "lovinghist@gmail.com, chewong@uwaterloo.ca";
        $subject = $_POST['subject'];
        mail($to,$subject,$mailBody,"");
        mail($senderEmail,"Confirmation on saying hello to Ernest (◕‿◕✿)","Thanks for reaching out $name! Ernest will reply your message within 24 hours!\n\nYour Message:\n$message","");
        echo '<script>alert("Message sent. A confirmation email has been sent to you.");
                     window.history.go(-1);
</script>';
    }
    exit;
}   
?>