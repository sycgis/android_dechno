var RapiMove = 0;
var RapiSpeed = 0;
var RapiDirection = 0;
var RapiMove = 0;

function getData() {
    $.ajax({
        url: "http://192.168.1.111/rapi.cgi?viterre=23",
        type: "post",
        success: function (data) {
            alert("success");
        }
    });
}


function exitFromApp() {
    navigator.app.exitApp();
}

function StartClick(status) {

    var bStart = document.getElementById('start');

    var status = $("#start").val();


    if ($("#start").val() == "start") {
        $("#start").val("stop");
        // BUTTON START PRESSED
        alert("Enable RapiMove");
        RapiMove = 1;
        UpdateMysql(0, 0, RapiMove);

       // alert("RapiMove Enabled");

    } else {

        if ($("#start").val() == "stop") {
            $("#start").val("start");
            // BUTTON STOP PRESSED
            alert("Disable RapiMove");
            RapiMove = 0;
            UpdateMysql(0, 0, RapiMove);

         //   alert("RapiMove Disabled");

        };
    };
    $("#start").button("refresh");
};
function RapiInfo() {
    
    // var ref = cordova.InAppBrowser.open('http://www.google.com', '_blank', 'location=yes');


    var ref = cordova.InAppBrowser.open('http://192.168.0.1/rapiinfo.php?id=1', '_blank', 'hidden=no');
    
};

function RapiMove(speed,direction) {

    var ref = cordova.InAppBrowser.open('http://www.google.com' ,'_blank', 'hidden=no');
};


// SEND MOVE TO RAPI
function sverti(sverti) {
    if (RapiMove) {
        RapiSpeed = sverti;
        $("#RapiView").val(RapiSpeed+":"+RapiDirection);
        UpdateMysql(RapiSpeed, RapiDirection, 1);
        $("#RapiView").button("refresh");
    };
};
function dverti(dverti) {
    if (RapiMove) {
        RapiDirection = dverti;
        $("#RapiView").val(RapiSpeed+":"+RapiDirection);
        $("#RapiView").button("refresh");
        UpdateMysql(RapiSpeed, RapiDirection, 1);
    };
};

// UpdateMysql
function UpdateMysql(RapiSpeed, RapiDirection, RapiMove) {


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // alert(RapiSpeed + ":" + RapiDirection);
            //alert(this.responseText);
            // this.responseText;

        }
    };
    xhttp.open("GET", "http://192.168.0.1/rapimove.php?speed=" + RapiSpeed + "&direction=" + RapiDirection + "&move=" + RapiMove, true);
    xhttp.send();
};
