var changePasswordViewModelModule = require("../../view-models/changepassword-view-model");
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
    
    //Set the binding context on the page.
    viewModel = new changePasswordViewModelModule.ChangePasswordViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    if (page.android)
    {
    	var heading = viewModule.getViewById(page, "heading");
		heading.android.setGravity(17);
	}
};
exports.pageLoaded = pageLoaded;

function navigatedTo(args) {
    page = args.object;
    var changePasswordButton = viewModule.getViewById(page, "changePassword");
    changePasswordButton.isEnabled=false;
    changePasswordButton.cssClass="change-password-button primaryButtonUnselected";
}
exports.navigatedTo = navigatedTo;


function changePasswordButtonPressed(args) {
    var connectivity = require("connectivity");
    if (connectivity.getConnectionType()==connectivity.connectionType.none)
        {
            alert("Internet connection not available. Please try again later!");
        }
    else
        {
    		viewModel.changePasswordButtonPressed();
        }
}
exports.changePasswordButtonPressed = changePasswordButtonPressed;

function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;

function tapOnView(args) {
    var userField = viewModule.getViewById(page, "tnewpassword");
    userField.dismissSoftInput()
    var lastName = viewModule.getViewById(page, "tconfirmpassword");
    lastName.dismissSoftInput()
    var password = viewModule.getViewById(page, "tsecurityCode");
    password.dismissSoftInput()
}
exports.tapOnView = tapOnView;
