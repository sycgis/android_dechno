/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var watchID1 = null;
var watchID2 = null;
var watchID3 = null;



// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);
console.log("---------- WAITING FOR DEVICE --------------");

// PhoneGap is ready
//
function onDeviceReady() {
    console.log("---------------- DEVICE READY ------------------");
    startWatch();
    screen.orientation.lock('landscape').then(function success() {
        console.log("---------------- Successfully locked the orientation");
    }, function error(errMsg) {
        console.log("---------------- Error locking the orientation :: " + errMsg);
    });
    if (navigator.DeviceOrientationEvent) {
        console.log("--------------------- DeviceOrientation is supported");
    }
    console.log(navigator.compass);
    





}


// Start watching the acceleration
//
function startWatch() {

    // Update acceleration every 3 seconds
    var options = { frequency: 300 };
    if (navigator.accelerometer) {
        console.log("---------------- watchAcceleration ------------------");
        watchID1 = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
    if (navigator.fusion) {
        console.log("---------------- watchSensorFusion ------------------");
        //watchID2 = navigator.fusion.watchSensorFusion(onSuccess2, onError, options);
    }
    //if (navigator.compass.getCurrentHeading(onSuccess3, onError)) {
     //   console.log("---------------- watchmagneticHeading ------------------");
        //console.log(navigator.getCurrentHeading(onSuccess3, onError));
        
        
    //}
    console.log("---------------- startWatch OK ------------------");
}

// Stop watching the acceleration ID = WatchID
//
function stopWatch(ID) {
    if (ID) {
        navigator.accelerometer.clearWatch(ID);
        ID = null;
    }
}

function onSuccess3(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = '<font color="white">Heading: ' + heading.magneticHeading+ '</font>';
};


// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
    // console.log("---------------- watchAcceleration ok ------------------");
    var element = document.getElementById('debug');
    // element.innerHTML = '<font color="white">Acceleration X: ' + acceleration.x + '-' +
    //                    'Acceleration Y: ' + acceleration.y + '-' +
    //                    'Acceleration Z: ' + acceleration.z + '<br>' +
    //                    'Timestamp: ' + acceleration.timestamp + '</font>';
    
    var x = acceleration.x;
    var y = acceleration.y;
    var z = acceleration.z;

    var FILTERFACTOR = 0.3;
    // We keep previous values to use filter
    var previous_parameters = {
        x: 0,
        y: 0,
        z: 0
    };

    var valuex = (x * FILTERFACTOR) + (previous_parameters.x * (1.0 - FILTERFACTOR));

    

    previous_parameters.x = valuex;

    

    var valuey = (y * FILTERFACTOR) + (previous_parameters.y * (1.0 - FILTERFACTOR));
    previous_parameters.y = valuey;
    var valuez = (z * FILTERFACTOR) + (previous_parameters.z * (1.0 - FILTERFACTOR));
    previous_parameters.z = valuez;

    

    var direction = {
        x: valuex,
        y: valuey,
        z: valuez
    };
    setBubble(direction);
    
    /// navigator.compass.getCurrentHeading(onSuccess3, onError);


}

function setBubble(accelerometer) {

    var x = accelerometer.x;
    var y = accelerometer.y;
    var z = accelerometer.z;

    //spherical coordinates (r, theta, phi)
    var r = Math.sqrt(x * x + y * y + z * z);

    var theta = 0;
    var phi = 0;
    if (z === 0) {
        theta = x > 0 ? 90 : -90;
    }
    else {
        theta = parseInt(Math.atan(Math.sqrt(x * x + y * y) / z) * 180 / Math.PI);
    }
    if (x === 0) {
        phi = y > 0 ? 90 : -90;
    }
    else {
        phi = parseInt((Math.atan(y / x)) * 180 / Math.PI);
    }

    var angles = {
        r: r,
        theta: theta,
        phi: phi,
        x: x,
        y: y,
        z: z
    };

    


    // set skin at the beginning
    
    
    var element = document.getElementById('heading');
        
    if (angles.phi >= 46) { angles.phi = 46 };
    if (angles.phi <= -46) { angles.phi = -46 };
    
    dverti(angles.phi);

    var Group1 = 46;
    var i = 0;
    var text = "_";

    while (i < Group1 + angles.phi) {
        text = text + "_";
        i++;
    }

    var Group2 = 46;
    var j = 0;
    var text2 = "_";

    while (j < Group2 - angles.phi) {
        text2 = text2 + "_";
        j++;
    }


    
    // angles.phi

    element.innerHTML = '<font color="green">'+ text +'¦'+ text2 +'</font>';
                     //   'angles.theta: ' + angles.theta + '-' +
                     //   'angles.r: ' + angles.r + '</font>';

    
}


function onSuccess2(result) {
    console.log("---------------- watchSensorFusion ------------------ ok ");
    var element = document.getElementById('result');
    element.innerHTML = '<font color="white">Result.x: ' + result.eulerAngles.roll + '</font>';
   // alert("OK");
}

function onError(fusionError) {
    console.log("---------------- watchSensorFusion ------------------ ERROR ");
    alert('error: ' + fusionError.code);
}
