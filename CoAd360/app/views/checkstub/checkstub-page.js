
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var listPickerModule = require("ui/list-picker");
var page;

function pageLoaded(args) {
    page = args.object;
    
    var navigationBar = viewModule.getViewById(page, "navigationBar");
    var tapableArea = viewModule.getViewById(page, "tapableArea");
    navigationBar.style.height=44;
    tapableArea.style.height=44;
    
    if (page.android)
    {
    	var heading = viewModule.getViewById(page, "heading");
		heading.android.setGravity(17);
	}
    setListPicker();
};
exports.pageLoaded = pageLoaded;

function setListPicker() {
    var listPicker = viewModule.getViewById(page, "listPicker");
    listPicker.items = ["3/5/2015", "16/7/2015", "1/9/2015"];
}

function backButtonPressed(args) {
    frameModule.topmost().goBack()
}
exports.backButtonPressed = backButtonPressed;

function tapOnView(args) {
    var searchBar = viewModule.getViewById(page, "search");
    if (searchBar.android) {
        searchBar.android.clearFocus();
    }
    if (searchBar.ios) {
        searchBar.ios.resignFirstResponder();
    }
    
    var listPicker = viewModule.getViewById(page, "listPicker");
    if (listPicker.style.visibility === "visible") {
        var selectedDateItem = listPicker.items[listPicker.selectedIndex];
		var dateLabel = viewModule.getViewById(page, "dateLabel");
		dateLabel.text = "  " + selectedDateItem;
        
        listPicker.style.visibility="collapsed";
    }
    
    
}
exports.tapOnView = tapOnView;

function tapOnDateLabel(args) {
    var listPicker = viewModule.getViewById(page, "listPicker");
    listPicker.style.visibility="visible";
//    var searchBar = viewModule.getViewById(page, "search");
//    if (searchBar.android) {
//        searchBar.android.clearFocus();
//    }
//    if (searchBar.ios) {
//        searchBar.ios.resignFirstResponder();
//    }
}
exports.tapOnDateLabel = tapOnDateLabel;