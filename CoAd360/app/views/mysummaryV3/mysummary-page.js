var mySummaryViewModelModule = require("../../view-models/mysummary-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var labelModule = require("ui/label");
var viewModel;
var page;

function pageLoaded(args) {
    
    page = args.object;
    
    //Set the binding context on the page.
    viewModel = new mySummaryViewModelModule.MySummaryViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    if (page.android)
    {
    	var heading = viewModule.getViewById(page, "heading");
		heading.android.setGravity(17);
        
        var termsofuse = viewModule.getViewById(page, "termsofuse");
		termsofuse.android.setGravity(17);
        
        var privacypolicy = viewModule.getViewById(page, "privacypolicy");
		privacypolicy.android.setGravity(17);
        
        var contactus = viewModule.getViewById(page, "contactus");
		contactus.android.setGravity(17);


        var gap = viewModule.getViewById(page, "android-gap");
		gap.style.visibility="visible";
        gap.height=50;
	}
    else
        {
            var gap = viewModule.getViewById(page, "android-gap");
			gap.style.visibility="collapsed";
        }

    hideSearchKeyboard();
};
exports.pageLoaded = pageLoaded;

function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;

function tapOnView(args) {
    hideSearchKeyboard();
}
exports.tapOnView = tapOnView;

function hideSearchKeyboard() {
    var searchBar = viewModule.getViewById(page, "searchField");
    if (searchBar.android) {
        searchBar.android.clearFocus();
    }
    else if (searchBar.ios) {
        searchBar.ios.resignFirstResponder();
    }
}

function editButtonTap(args) {
    frameModule.topmost().navigate({
					moduleName: "./views/summaryedit/summaryedit-page",
					animated: true
          		});
}
exports.editButtonTap = editButtonTap;