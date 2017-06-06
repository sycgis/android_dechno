<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

 table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
 <body>

<?php
$strip = $_POST['istrip'];
$strgps = $_POST['istrgps'];
$strdevice = $_POST['istrdevice'];
$straudiostatus = $_POST['istraudiostatus'];

$DeviceExist = 0;

$con = mysqli_connect('fawj.myd.infomaniak.com','fawj_rapi','Toto123-','fawj_rapi');
if (!$con) {
     die('Could not connect: ' . mysqli_error($con));
	 echo "connection db problem";
}

// check if device exist  
mysqli_select_db($con,"rapi");
$sql="SELECT `device` FROM rapi WHERE `device` LIKE '$device')";
$result = mysqli_query($con,$sql);
 
If ($result <> ""){
	$DeviceExist = 1; 
};

If ($DeviceExist = 1){ 
	 // update existing device
	 mysqli_select_db($con,"rapi");
	 $sql="UPDATE `rapi` SET `ip`='$strip',`gps`='$strgps',`date`=Now() WHERE `device` LIKE '$strdevice'";
	 $result = mysqli_query($con,$sql);
};
if ($DeviceExist = 0){
	 // insert new log
	 mysqli_select_db($con,"rapi");
	 $sql="INSERT INTO rapi(`device`,`ip`,`audio_status`,`gps`) VALUES('$strdevice','$strip','$straudiostatus','$strgps')";
	 $result = mysqli_query($con,$sql);
};
 
mysqli_close($con);
 
?>
</body>
</html>