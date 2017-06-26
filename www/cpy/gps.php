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


 $con = mysqli_connect('fawj.myd.infomaniak.com','fawj_rapi','Toto123-','fawj_rapi');
 if (!$con) {
     die('Could not connect: ' . mysqli_error($con));
	 echo "connection db problem";
 }

 mysqli_select_db($con,"gps");
 $sql="INSERT INTO gps(`ip`,`gps`) VALUES('$strip','$strgps')";
 $result = mysqli_query($con,$sql);

 mysqli_close($con);
 

 
 ?>
</body>
</html>