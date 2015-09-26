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
    
    //Set up the date picker
    var datePicker = viewModule.getViewById(page, "datePicker");
    datePicker.year = 2015;
 	datePicker.month = 1;
	datePicker.day = 5;
	datePicker.minDate = new Date(2000, 1, 1);
	datePicker.maxDate = new Date();
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
    
    var datePicker = viewModule.getViewById(page, "datePicker");
    if (datePicker.style.visibility === "visible") {
        var selectedDateItem = datePicker.day + "/" + datePicker.month + "/" + datePicker.year;
		var dateLabel = viewModule.getViewById(page, "tdatepicker");
		dateLabel.text = selectedDateItem;
        
        datePicker.style.visibility="collapsed";
    }
}
exports.tapOnView = tapOnView;

function datePickerPressed(args) {
    
    var datePicker = viewModule.getViewById(page, "datePicker");
    datePicker.style.visibility="visible";
    
}
exports.datePickerPressed = datePickerPressed;