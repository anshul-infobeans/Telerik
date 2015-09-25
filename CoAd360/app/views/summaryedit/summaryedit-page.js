var editSummaryPasswordViewModelModule = require("../../view-models/editsummary-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var viewModel;
var page;

function pageLoaded(args) {
    
    page = args.object;
    
    var navigationBar = viewModule.getViewById(page, "navigationBar");
    var tapableArea = viewModule.getViewById(page, "tapableArea");
    navigationBar.style.height=44;
    tapableArea.style.height=44;
    
    //Set the binding context on the page.
    viewModel = new editSummaryPasswordViewModelModule.EditSummaryViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
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

function tapOnView(args) {
    var address1Field = viewModule.getViewById(page, "address1");
    var address2Field = viewModule.getViewById(page, "address1");
    
    if (page.android)
        {
            address1Field.android.clearFocus();
            address2Field.android.clearFocus();
        }
    
    if (page.ios)
        {
            address1Field.ios.resignFirstResponder();
            address2Field.ios.resignFirstResponder();
        }
}
exports.tapOnView = tapOnView;