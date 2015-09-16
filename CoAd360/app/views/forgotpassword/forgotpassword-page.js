var forgotPasswordViewModelModule = require("../../view-models/forgotpassword-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var viewModel;

function pageLoaded(args) {
    
    var page = args.object;
    page = args.object;
    
    var navigationBar = viewModule.getViewById(page, "navigationBar");
    var tapableArea = viewModule.getViewById(page, "tapableArea");
    navigationBar.style.height=44;
    tapableArea.style.height=44;
    
    if (page.ios)
    {
        
    }
    else if (page.android)
    {
    	
	}
    
    //Set the binding context on the page.
    viewModel = new forgotPasswordViewModelModule.ForgotPasswordViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    var getPasswordButton = viewModule.getViewById(page, "getPassword");
    getPasswordButton.isEnabled=false;
};
exports.pageLoaded = pageLoaded;

function pageUnloaded(args) {

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

function getPasswordButtonPressed(args) {
    viewModel.getPasswordButtonPressed();
}
exports.getPasswordButtonPressed = getPasswordButtonPressed;

function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;