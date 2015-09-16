var changePasswordViewModelModule = require("../../view-models/changepassword-view-model");
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
        //frameModule.topmost().ios.controller.setNavigationBarHiddenAnimated(false, true);
    }
    else if (page.android)
    {
    	//frameModule.topmost().android.actionBar.hide();
	}
    
    //Set the binding context on the page.
    viewModel = new changePasswordViewModelModule.ChangePasswordViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    var changePasswordButton = viewModule.getViewById(page, "changePassword");
    changePasswordButton.isEnabled=false;
};
exports.pageLoaded = pageLoaded;

function pageUnloaded(args) {

}
exports.pageUnloaded = pageUnloaded;


function changePasswordButtonPressed(args) {
    viewModel.changePasswordButtonPressed();
}
exports.changePasswordButtonPressed = changePasswordButtonPressed;

function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;