<?php
      $receip = "chrisviviers1@gmail.com";
      if (isset($_POST['subject'])) {
            $subj = "You have a message sent from your site: ".$_POST['subject'];
        } else {
            $subj = "You have a message sent from your site.";
        }
    
      if(isset($_POST['name']) && isset($_POST['email'])&& isset($_POST['msg']))
      {
          
          $bodymsg = "Name: ".$_POST['name']."\n"
                       ."Email: ".$_POST['email']."\n"
                       ."Message: ".$_POST['msg']."\n";
            $email = $_POST['email'];
            if(mail($receip, $subj, $bodymsg, 'From: Contact <'.$email.'>')){
                 echo "<h1 notification has-text-success has-text-centered>Email sent successfully!</h1>";
      }
          } else {
            echo "<h1 notification has-text-danger has-text-centered>Error sending e-mail!</h1>";
                 exit;
          }
      
    ?>