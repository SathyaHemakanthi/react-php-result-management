<?php


include 'conn.php';

$data = json_decode(file_get_contents("php://input"));

$jrole=$data->jrole;
$fname=$data->fname;
$lname=$data->lname;
$address=$data->address;
$mobile=$data->mobile;
$email=$data->email;
$pass=$data->pass;


$sql = "INSERT INTO user_data (f_name, l_name,address,job_role,mobile,email,password)
VALUES ('$fname', '$lname', '$address','$jrole','$mobile','$email','$pass')";

if (mysqli_query($conn,$sql) === TRUE) {
    
    echo ("New record created successfully");
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
?>