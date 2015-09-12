var dashboardViewModelModule = require("../../view-models/dashboard-view-model");
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
    viewModel = new dashboardViewModelModule.DashboardViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    /*
    var loginButton = viewModule.getViewById(page, "login");
    loginButton.style.opacity="0.5";
    loginButton.isEnabled=false;
    */
};
exports.pageLoaded = pageLoaded;

function logoutButtonTap(args) {
    viewModel.logout();
}
exports.logoutButtonTap = logoutButtonTap;