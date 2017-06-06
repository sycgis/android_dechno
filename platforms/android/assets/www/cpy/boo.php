<?php

// Configure connection settings

$db = 'dechnoch10';
$db_admin = 'appsql';
$db_password = 'Mikado32';
$tablename = 'rapicar';

// Title

// Connect to DB

$sql = mysql_connect("mysql.dechno.ch", $db_admin, $db_password)
or die(mysql_error());

mysql_select_db("$db", $sql);

// Fetch the data

$query = "SELECT DISTINCT * FROM $tablename";
		
	$result = mysql_query($query);
	
	// Return the results, loop through them and echo
	
	while($row = mysql_fetch_array($result, MYSQL_ASSOC))
	{
		$lat = $row['lat'];
		$lon = $row['lon'];
		}

?>
<script>
	var latlng = new google.maps.LatLng("<? echo $lat; ?>","<? echo $lon; ?>");
    marker.setPosition(latlng);
    windows.alert("sdf");

</script>