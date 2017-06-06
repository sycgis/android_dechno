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
$strmobile = $_GET['istrmobile'];

 $con = mysqli_connect('fawj.myd.infomaniak.com','fawj_rapi','Toto123-','fawj_rapi');
 if (!$con) {
     die('Could not connect: ' . mysqli_error($con));
	 echo "connection db problem";
 }

 mysqli_select_db($con,"rapi");
 $sql="SELECT * from `rapi` WHERE `device` LIKE '$strmobile'";
 $result = mysqli_query($con,$sql);
 $row = $result->fetch_assoc(); 

 echo  $row['date']."<br>Position > ".strval($row['gps']);
 mysqli_close($con);
 ?>
</body>
</html>