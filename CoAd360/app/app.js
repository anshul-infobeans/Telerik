var application = require("application");
application.cssFile = "./app.css";
application.mainModule = "./views/splash/splash-page";
//application.mainModule = "./views/mysummary/mysummary-page";

var fontModule = require("ui/styling/font");

// set app version number
global.appVersion = "0.1";

application.onLaunch = function (context) {
    // For Android applications, the context is an android.content.Intent class.
    // For iOS applications, the context is undefined.
    if (application.android) {
        console.log("Launched Android application with the following intent: " + context + ".");
    }
    else if (application.ios) {
        console.log("Launched iOS application.");
        
        //register fonts for ios
        fontModule.ios.registerFont("Roboto-Black.ttf");
		fontModule.ios.registerFont("Roboto-BlackItalic.ttf");
		fontModule.ios.registerFont("Roboto-Bold.ttf");
		fontModule.ios.registerFont("Roboto-BoldItalic.ttf");
		fontModule.ios.registerFont("Roboto-Italic.ttf");
		fontModule.ios.registerFont("Roboto-Light.ttf");
		fontModule.ios.registerFont("Roboto-LightItalic.ttf");
		fontModule.ios.registerFont("Roboto-Medium.ttf");
		fontModule.ios.registerFont("Roboto-MediumItalic.ttf");
		fontModule.ios.registerFont("Roboto-Regular.ttf");
		fontModule.ios.registerFont("Roboto-Thin.ttf");
		fontModule.ios.registerFont("Roboto-ThinItalic.ttf");
    }
};

application.onSuspend = function () {
    console.log("Application suspended.");
};

application.onResume = function () {
    console.log("Application resumed.");
};

application.onExit = function () {
    console.log("Application will exit.");
    if(MONITOR !== null){
        MONITOR.stop();
    }
};

application.onLowMemory = function () {
    console.log("Memory is low.");
};

application.onUncaughtError = function (error) {
    console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
};

if (application.android)
    {
        application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            //alert("Event: " + args.eventName + ", Activity: " + args.activity + "Object: " + args.object);
            //args.cancel = true;
            //
        // Set  to cancel back navigation and do something custom.
    });
    }


application.start();