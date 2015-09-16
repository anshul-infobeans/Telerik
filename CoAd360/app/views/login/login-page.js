var loginViewModelModule = require("../../view-models/login-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
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
    
    var loginButton = viewModule.getViewById(page, "login");
    loginButton.style.opacity="1";
    loginButton.isEnabled=false;
};
exports.pageLoaded = pageLoaded;

function loginButtonTap(args) {
    //args.object.animate({translate: {x:100 y:0}}, 'fast');
    viewModel.login();
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

function termsOfUseButtonPressed(args) {
    viewModel.termsOfUsePressed();
}
exports.termsOfUseButtonPressed = termsOfUseButtonPressed;