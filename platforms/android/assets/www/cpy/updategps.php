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
$strip = $_GET['istrip'];
$strmobile = $_GET['istrmobile'];
$strgps = $_GET['istrgps'];


 $con = mysqli_connect('fawj.myd.infomaniak.com','fawj_rapi','Toto123-','fawj_rapi');
 if (!$con) {
     die('Could not connect: ' . mysqli_error($con));
	 echo "connection db problem";
 }

 mysqli_select_db($con,"rapi");
 $sql="UPDATE `rapi` SET `gps`='$strgps',`date`=Now(), `ip`='$strip' WHERE `device` LIKE '$strmobile'";
 $result = mysqli_query($con,$sql);

 mysqli_close($con);
 
echo "ok";

 
 ?>
</body>
</html>