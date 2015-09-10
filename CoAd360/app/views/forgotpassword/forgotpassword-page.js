var forgotPasswordViewModelModule = require("../../view-models/forgotpassword-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var viewModel;

function pageLoaded(args) {
    
    var page = args.object;
    page = args.object;
    /*
    if (!loaded)
        {
            //check for platform
            
            if (platformModule.device.manufacturer.toUpperCase()==="APPLE")
    		{
        		frameModule.topmost().ios.controller.setNavigationBarHiddenAnimated(false, true);
    		}*/
    if (page.ios)
    {
        //frameModule.topmost().ios.navBarVisibility = "always"; 
        frameModule.topmost().ios.controller.setNavigationBarHiddenAnimated(false, true);
    }
    else if (page.android)
    {
    	//frameModule.topmost().android.actionBar.hide();
	}
    
    //Set the binding context on the page.
	//page.bindingContext = _viewData;
    viewModel = new forgotPasswordViewModelModule.ForgotPasswordViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    /*
    var loginButton = viewModule.getViewById(page, "login");
    loginButton.style.opacity="0.5";
    loginButton.isEnabled=false;
    */
};
exports.pageLoaded = pageLoaded;

function pageUnloaded(args) {
    if (page.ios)
    {
        alert("Unloaded");
        //frameModule.topmost().ios.navBarVisibility = "always";
        frameModule.topmost().ios.navBarVisibility = "never"; 
        frameModule.topmost().ios.controller.setNavigationBarHiddenAnimated(true, true);
    }
    else if (page.android)
    {
    	//frameModule.topmost().android.actionBar.hide();
	}
}

exports.pageUnloaded = pageUnloaded;

function emailButtonPressed(args) {
    viewModel.requestPasswordUsing(true);
}
exports.emailButtonPressed = emailButtonPressed;

function passwordButtonPressed(args) {
    viewModel.requestPasswordUsing(false);
}
exports.passwordButtonPressed = passwordButtonPressed;
/*
function rememberMeButtonTap(args) {
    viewModel.rememberMe();
}
exports.rememberMeButtonTap = rememberMeButtonTap;*/