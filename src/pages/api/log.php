
<?php session_start(); ?>
<?php

include 'conn.php';



    $data = json_decode(file_get_contents("php://input"));

    $email=$data->email;
    $pass=$data->pass; 
 
  
    $sql = "select * from user_data where email = '$email' and password = '$pass'";  
    $result = mysqli_query($conn, $sql);  
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
    $count = mysqli_num_rows($result);  
      
    if($count == 1){  
        $_SESSION["email"] = $row['email'];
        $_SESSION["id"] = $row['id'];
        if(isset($_SESSION["email"]) and isset($_SESSION["fName"])){
            result("ok");
            echo "ok";
        }
    }  
    else{  
      result("error");
      echo "error";  
    } 


?>