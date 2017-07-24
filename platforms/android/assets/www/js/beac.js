function CheckBeacon(strphone, strbeac) {
    var xhttp = new XMLHttpRequest();
	var beacdata = "phoneid="+strphone +"&beac="+strbeac;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "VALID") {
					window.location="cars.html";
			} else {	
					window.location="index.html";
			};
        }
		
    };
	xhttp.open("POST", "http://www.dechno.ch/beacon/beacon.php", true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send(beacdata);
};

console.log("---------- CHECKING FOR BEACON --------------");
var mybeac = prompt("Beacon number : ", "");

if (mybeac == null) {window.location="index.html";};
if (mybeac == "") {window.location="index.html";};

CheckBeacon("8D43409487A76054",mybeac);
 

console.log("---------- END CHECKING BEACON --------------");