

<?php
include_once('conn.php');

$FName=$_POST['FName'];
$LName=$_POST['LName'];
$address=$_POST['address'];
$mobile=$_POST['mobile'];
$email=$_POST['email'];
$pass=$_POST['pass'];



$sql = "INSERT INTO user_data (FName, LName,address,mobile,email,pass)
VALUES ('$FName', '$LName', '$address','$mobile','$email','$pass')";

if (mysqli_query($conn,$sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>  