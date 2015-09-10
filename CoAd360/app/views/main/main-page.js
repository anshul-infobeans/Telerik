var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {    
    //frameModule.topmost().navigate("views/login/login-page");
    frameModule.topmost().ios.navBarVisibility = "never";
}

function navigateLogin(args) {
    //frameModule.topmost().navigate("views/login/login-page");
    frameModule.topmost().navigate("views/dashboard_root/root");
    frameModule.topmost().ios.navBarVisibility = "never";
}

exports.pageLoaded = pageLoaded;
exports.navigateLogin = navigateLogin;