<?
	$dbname            ='dechnoch10'; //Name of the database
	$dbuser            ='appsql'; //Username for the db
	$dbpass            ='Mikado32'; //Password for the db
	$dbserver          ='mysql.dechno.ch'; //Name of the mysql server
	
	$dbcnx = mysql_connect ("$dbserver", "$dbuser", "$dbpass");
	mysql_select_db("$dbname") or die(mysql_error());
?>

<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<title>Yeahaaaaaa</title>
<style type="text/css">
body { font: normal 10pt Helvetica, Arial; }
#map { width: 350px; height: 300px; border: 0px; padding: 0px; }
</style>
<script src="http://maps.google.com/maps/api/js?v=3&sensor=false" type="text/javascript"></script>
<script type="text/javascript">

//Start The Code
var icon = new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/micons/blue.png", new google.maps.Size(32, 32), new google.maps.Point(0, 0), new google.maps.Point(16, 32));

var center = null;
var map = null;
var currentPopup;
var bounds = new google.maps.LatLngBounds();

function addMarker(lat, lng, info) {
	var pt = new google.maps.LatLng(lat, lng);
	bounds.extend(pt);
	var marker = new google.maps.Marker({
	position: pt,
	icon: icon,
	map: map
});

var popup = new google.maps.InfoWindow({
	content: info,
	maxWidth: 300
});

google.maps.event.addListener(marker, "click", function() {
	if (currentPopup != null) {
		currentPopup.close();
		currentPopup = null;
}

popup.open(map, marker);
currentPopup = popup;
});

google.maps.event.addListener(popup, "closeclick", function() {
map.panTo(center);
currentPopup = null;
});
}

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
	center: new google.maps.LatLng(46.72179,7.065691),
	zoom: 3,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControl: false,
	mapTypeControlOptions: {
		style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
		},
		navigationControl: true,
		navigationControlOptions: {
		style: google.maps.NavigationControlStyle.SMALL
		}
});

<?
$query = mysql_query("SELECT DISTINCT * FROM rapicar");
while ($row = mysql_fetch_array($query)){
	$lat=$row['lat'];
	$lon=$row['lon'];
	$desc=$row['id'];
	echo ("addMarker($lat, $lon,'<b>Rapi</b><br/>$desc');\n");
}
?>

center = bounds.getCenter();
map.fitBounds(bounds);
}

</script>
</head>
<body onload="initMap()" style="margin:0px; border:0px; padding:0px;">
<div id="map" style="width: 100%; height: 100%"></div>
</html>
