cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device-motion.Acceleration",
        "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "id": "cordova-plugin-device-motion.accelerometer",
        "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
        "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "id": "cordova-plugin-device-sensor-fusion.FusionResult",
        "file": "plugins/cordova-plugin-device-sensor-fusion/www/FusionResult.js",
        "pluginId": "cordova-plugin-device-sensor-fusion",
        "clobbers": [
            "FusionResult"
        ]
    },
    {
        "id": "cordova-plugin-device-sensor-fusion.FusionError",
        "file": "plugins/cordova-plugin-device-sensor-fusion/www/FusionError.js",
        "pluginId": "cordova-plugin-device-sensor-fusion",
        "clobbers": [
            "FusionError"
        ]
    },
    {
        "id": "cordova-plugin-device-sensor-fusion.fusion",
        "file": "plugins/cordova-plugin-device-sensor-fusion/www/fusion.js",
        "pluginId": "cordova-plugin-device-sensor-fusion",
        "clobbers": [
            "navigator.fusion"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassError",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.compass",
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "id": "cordova-plugin-ping.ping",
        "file": "plugins/cordova-plugin-ping/www/ping.js",
        "pluginId": "cordova-plugin-ping",
        "clobbers": [
            "Ping"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cz.blocshop.socketsforcordova.Socket",
        "file": "plugins/cz.blocshop.socketsforcordova/socket.js",
        "pluginId": "cz.blocshop.socketsforcordova",
        "clobbers": [
            "window.Socket"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-device-motion": "1.2.5",
    "cordova-plugin-device-sensor-fusion": "0.0.3",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-vibration": "2.1.5",
    "es6-promise-plugin": "4.1.0",
    "cordova-plugin-screen-orientation": "2.0.1",
    "cordova-plugin-device-orientation": "1.0.7",
    "cordova-plugin-ping": "0.3.1",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cz.blocshop.socketsforcordova": "1.1.0"
};
// BOTTOM OF METADATA
});