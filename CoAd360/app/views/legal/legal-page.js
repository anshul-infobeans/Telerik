var observable = require("data/observable");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var viewModel;

function pageLoaded(args) {
    
    var page = args.object;
    
    var param1Value = page.navigationContext.title;
    
    var heading = viewModule.getViewById(page, "heading");
    heading.text = param1Value;
    
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
    //viewModel = new dashboardViewModelModule.DashboardViewModel();
    
    //Set the binding context on the page.
	//page.bindingContext = observable;
    
    /*
    var loginButton = viewModule.getViewById(page, "login");
    loginButton.style.opacity="0.5";
    loginButton.isEnabled=false;
    */
};



exports.pageLoaded = pageLoaded;


function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;