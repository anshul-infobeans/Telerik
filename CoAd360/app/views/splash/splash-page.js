var observableModule = require("data/observable");
var applicationModule = require("application");
var view = require("ui/core/view");
var frameModule = require("ui/frame");
var appSettingsModule = require("application-settings");
var dialogs = require("ui/dialogs");
var uiaction_bar = require("ui/action-bar");

var _viewData = new observableModule.Observable();
var page;
var loaded=false;
function pageLoaded(args) {
    page = args.object;
    
    if (!loaded)
        {
    		//Set the binding context on the page.
			page.bindingContext = _viewData;
    
    		//set login background image and version number of the app
			_viewData.set( "imageSource", "~/resources/login/LoginBackground.png" );	
    		_viewData.set( "versionNumber", "Version: "+global.appVersion );
            
    		//after 2 sec move to screen
			setTimeout(function () {
				frameModule.topmost().navigate({
					moduleName: "./views/login/login-page",
					animated: true
				});
        
        		/*
        		check with android developer
        		backstackVisibleValue false: It will be available in latest version of Nativescript
        		var activity = applicationModule.android.foregroundActivity();
    			activity.finishActivity();
        		*/
			}, 500);
        }
    
    loaded=true;
};

exports.pageLoaded = pageLoaded;
