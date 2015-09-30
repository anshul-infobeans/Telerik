var loginViewModelModule = require("../../view-models/login-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var connectivity = require("connectivity");
var viewModel;
var page;

function pageLoaded(args) {
    
    page = args.object;
    
    viewModel = new loginViewModelModule.LoginViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    if (page.android)
    {
    	var forgotPasswordLabel = viewModule.getViewById(page, "lforgotPassword");
		forgotPasswordLabel.android.setGravity(200|101);
            
		var rememberMeLabel = viewModule.getViewById(page, "lrememberMe");
		rememberMeLabel.android.setGravity(200);
        
        var privacyPolicy = viewModule.getViewById(page, "privacyPolicy");
		privacyPolicy.android.setGravity(17);
            
		var termsOfUser = viewModule.getViewById(page, "termsOfUser");
		termsOfUser.android.setGravity(17);
	}
    
    /*
    var usernameField = viewModule.getViewById(page, "tusername");
    usernameField._onTextPropertyChanged(function(){
        alert("Change");
    });*/
    /*
    testButton.on(buttonModule.Button.tapEvent, function () {
  source.set("testProperty", "change" + counter);
  });*/
};
exports.pageLoaded = pageLoaded;

function navigatedTo(args) {
    page = args.object;
    
    var loginButton = viewModule.getViewById(page, "login");
    loginButton.isEnabled=false;
    loginButton.cssClass="login-button primaryButtonUnselected";
}
exports.navigatedTo = navigatedTo;

function loginButtonTap(args) {
    //args.object.animate({translate: {x:100 y:0}}, 'fast');
    
    if (connectivity.getConnectionType()==connectivity.connectionType.none)
        {
            alert("Internet connection not available. Please try again later!");
        }
    else
        {
            viewModel.login();
        }
}
exports.loginButtonTap = loginButtonTap;

function forgotPasswordButtonTap(args) {
    viewModel.forgotPassword();
}
exports.forgotPasswordButtonTap = forgotPasswordButtonTap;

function rememberMeButtonTap(args) {
    viewModel.rememberMe();
}
exports.rememberMeButtonTap = rememberMeButtonTap;

function userFieldPressed(args) {
    var userField = viewModule.getViewById(page, "tusername");
    userField.focus();
}
exports.userFieldPressed = userFieldPressed;

function passwordFieldPressed(args) {
    var passwordField = viewModule.getViewById(page, "tpassword");
    passwordField.focus();
}
exports.passwordFieldPressed = passwordFieldPressed;

function privacyPolicyButtonPressed(args) {
    viewModel.privacyPolicyPressed();
}
exports.privacyPolicyButtonPressed = privacyPolicyButtonPressed;

function tapOnView(args) {
    var userField = viewModule.getViewById(page, "tusername");
    userField.dismissSoftInput()
    var password = viewModule.getViewById(page, "tpassword");
    password.dismissSoftInput()
}
exports.tapOnView = tapOnView;


function termsOfUseButtonPressed(args) {
    viewModel.termsOfUsePressed();
}
exports.termsOfUseButtonPressed = termsOfUseButtonPressed;