<?php

$device = $_GET['device'];

$con = mysqli_connect('fawj.myd.infomaniak.com','fawj_rapi','Toto123-','fawj_rapi');
if (!$con) {
     die('Could not connect: ' . mysqli_error($con));
	 echo "connection db problem";
}

// check if device exist  
mysqli_select_db($con,"rapi");
$sql="SELECT * FROM rapi WHERE device = '".$device."'";
$result = mysqli_query($con,$sql);



while($row = mysqli_fetch_array($result)) {
	
     echo $row['audio'].",".$row['audio_status'];
	 
};
  
mysqli_close($con);
 
?>
