<?php
include 'conn.php';

$sql = "SELECT marks.stdid, marks.marks,user_data.f_name FROM marks LEFT JOIN user_data ON marks.stdid=user_data.id";
$mysqli=mysqli_query($conn,$sql);
$json_data=array();

while($row=mysqli_fetch_assoc($mysqli)){
    $json_data[]=$row;
}

echo json_encode(['dbresult'=>$json_data]);





?>