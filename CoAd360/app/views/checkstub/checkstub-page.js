var checkStubViewModelModule = require("../../view-models/checkstub-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var page;

function pageLoaded(args) {
    page = args.object;
    
    //Set the binding context on the page.
    viewModel = new checkStubViewModelModule.CheckStubViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    if (page.android)
    {
    	var heading = viewModule.getViewById(page, "heading");
		heading.android.setGravity(17);
	}
    var listPicker = page.getViewById("listPicker");
    listPicker.items = ["1/9/2015", "1/8/2015", "1/7/2015"];
    listPicker.selectedIndex = 0;
    
    var dateLabel = viewModule.getViewById(page, "tdatepicker");
	dateLabel.text = listPicker.items[0];
    
    hideSearchKeyboard();
};
exports.pageLoaded = pageLoaded;

function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;

function tapOnView(args) {
    
    hideSearchKeyboard();
    
    var listPicker = viewModule.getViewById(page, "listPicker");
    if (listPicker.style.visibility === "visible") {
        var selectedDateItem = listPicker.items[listPicker.selectedIndex];
		var dateLabel = viewModule.getViewById(page, "tdatepicker");
		dateLabel.text = selectedDateItem;
        
        listPicker.style.visibility="collapsed";
    }
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

function listPickerPressed(args) {
    
    var listPicker = viewModule.getViewById(page, "listPicker");
    listPicker.style.visibility="visible";
    
}
exports.listPickerPressed = listPickerPressed;