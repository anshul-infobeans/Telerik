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



/*
dismissSoftInput()


_viewData.set( "username", "How are you" );	
    var email = viewModule.getViewById(page, "tusername");
    alert(email.text)
    
var options = {
    title: "Race Selection",
    message: "Race Chosen: Elf",
    okButtonText: "OK"
};
dialogs.alert(options).then(function () {
    console.log("Race Chosen!");
});

$.ajax({
          type: "POST",
          url: "https://api.everlive.com/v1/" + apiKey + "/Users/resetpassword",
          contentType: "application/json",
          data: JSON.stringify({ Email: this.email }),
          success: function() {
              navigator.notification.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
              window.location.href = "#login";
          },
          error: function() {
              navigator.notification.alert("Unfortunately, an error occurred resetting your password.")
          }
      });
      
          if (page.ios)
    {
        frameModule.topmost().ios.navBarVisibility = "never";    
    }
    else if (page.android)
    {
    	frameModule.topmost().android.actionBar.hide();
	} 
*/