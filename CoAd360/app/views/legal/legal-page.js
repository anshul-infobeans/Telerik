var observable = require("data/observable");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var viewModel;

function pageLoaded(args) {
    
    var page = args.object;
    
    var param1Value = page.navigationContext.title;
    
    var heading = viewModule.getViewById(page, "heading");
    heading.text = param1Value;
    
    if (page.android)
    {
    	var heading = viewModule.getViewById(page, "heading");
		heading.android.setGravity(17);
	}
};



exports.pageLoaded = pageLoaded;


function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;