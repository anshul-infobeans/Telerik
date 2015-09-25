var mySummaryViewModelModule = require("../../view-models/mysummary-view-model");
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
    viewModel = new mySummaryViewModelModule.MySummaryViewModel();
    
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
    var searchBar = viewModule.getViewById(page, "searchField");
    if (searchBar.android) {
        searchBar.android.clearFocus();
    }
    if (searchBar.ios) {
        searchBar.ios.resignFirstResponder();
    }
}
exports.tapOnView = tapOnView;

function editButtonTap(args) {
    frameModule.topmost().navigate({
					moduleName: "./views/summaryedit/summaryedit-page",
					animated: true
          		});
}
exports.editButtonTap = editButtonTap;