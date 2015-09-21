var forgotPasswordViewModelModule = require("../../view-models/forgotpassword-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var connectivity = require("connectivity");
var viewModel;
var page;
function pageLoaded(args) {
    
    page = args.object;
    
    var navigationBar = viewModule.getViewById(page, "navigationBar");
    var tapableArea = viewModule.getViewById(page, "tapableArea");
    navigationBar.style.height=44;
    tapableArea.style.height=44;
    
    if (page.android)
    {
    	var heading = viewModule.getViewById(page, "heading");
		heading.android.setGravity(17);
            
		var optionButtonEmail = viewModule.getViewById(page, "optionButtonEmail");
		optionButtonEmail.android.setGravity(17);
        
        var optionButtonLegalName = viewModule.getViewById(page, "optionButtonLegalName");
		optionButtonLegalName.android.setGravity(17);
	}
    
    //Set the binding context on the page.
    viewModel = new forgotPasswordViewModelModule.ForgotPasswordViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
};
exports.pageLoaded = pageLoaded;

function navigatedTo(args) {
    page = args.object;
    var getPasswordButton = viewModule.getViewById(page, "getPassword");
    getPasswordButton.isEnabled=false;
    getPasswordButton.cssClass="get-password-button primaryButtonUnselected";
}
exports.navigatedTo = navigatedTo;

function emailButtonPressed(args) {
    viewModel.requestPasswordUsing(true);
}
exports.emailButtonPressed = emailButtonPressed;

function passwordButtonPressed(args) {
    viewModel.requestPasswordUsing(false);
}
exports.passwordButtonPressed = passwordButtonPressed;

function getPasswordButtonPressed(args) {
    var connectivity = require("connectivity");
    if (connectivity.getConnectionType()==connectivity.connectionType.none)
        {
            alert("Internet connection not available. Please try again later!");
        }
    else
        {
    		viewModel.getPasswordButtonPressed();
        }
}
exports.getPasswordButtonPressed = getPasswordButtonPressed;

function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;

function tapOnView(args) {
    var userField = viewModule.getViewById(page, "tusername");
    userField.dismissSoftInput()
    var lastName = viewModule.getViewById(page, "tlastname");
    lastName.dismissSoftInput()
    var password = viewModule.getViewById(page, "tpassword");
    password.dismissSoftInput()
}
exports.tapOnView = tapOnView;