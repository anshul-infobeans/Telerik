var dashboardViewModelModule = require("../../view-models/dashboard-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var connectivity = require("connectivity");
var viewModel;

function pageLoaded(args) {
    
    var page = args.object;
    
    var navigationBar = viewModule.getViewById(page, "navigationBar");
    var tapableArea = viewModule.getViewById(page, "tapableArea");
    navigationBar.style.height=44;
    
    //Set the binding context on the page.
    viewModel = new dashboardViewModelModule.DashboardViewModel();
    
    //Set the binding context on the page.
	page.bindingContext = viewModel;
    
    if (page.android)
    {
    	var heading = viewModule.getViewById(page, "heading");
		heading.android.setGravity(17);
        
        var tsearch = viewModule.getViewById(page, "tsearch");
		tsearch.android.setGravity(17);
        
        var mysummary1 = viewModule.getViewById(page, "mysummary");
		mysummary1.android.setGravity(17);
        var mysummaryV2 = viewModule.getViewById(page, "mysummaryV2");
		mysummaryV2.android.setGravity(17);
        var mysummaryV3 = viewModule.getViewById(page, "mysummaryV3");
		mysummaryV3.android.setGravity(17);
        var checkstub = viewModule.getViewById(page, "checkstub");
		checkstub.android.setGravity(17);
        var mysummarytwocolumn = viewModule.getViewById(page, "mysummarytwocolumn");
		mysummarytwocolumn.android.setGravity(17);
        
        var help = viewModule.getViewById(page, "help");
		help.android.setGravity(17);
	}
};
exports.pageLoaded = pageLoaded;

function logoutButtonTap(args) {
    viewModel.logout();
}
exports.logoutButtonTap = logoutButtonTap;

function menuButtonPressed(args) {
    //frameModule.topmost().goBack()
}
exports.menuButtonPressed = menuButtonPressed;

function changePasswordButtonTap(args) {
    frameModule.topmost().navigate({
			moduleName: "./views/changepassword/changepassword-page",
			animated: true
		});
}
exports.changePasswordButtonTap = changePasswordButtonTap;

function mySummayPage(args) {
    frameModule.topmost().navigate({
			moduleName: "./views/mysummary/mysummary-page",
			animated: true
		});
}
exports.mySummayPage = mySummayPage;

function checkStubPage(args) {
    frameModule.topmost().navigate({
			moduleName: "./views/checkstub/checkstub-page",
			animated: true
		});
}
exports.checkStubPage = checkStubPage;

function mySummayPage2(args) {
    frameModule.topmost().navigate({
			moduleName: "./views/mysummaryV2/mysummary-page",
			animated: true
		});
}
exports.mySummayPage2 = mySummayPage2;

function mySummayPage3(args) {
    frameModule.topmost().navigate({
			moduleName: "./views/mysummaryV3/mysummary-page",
			animated: true
		});
}
exports.mySummayPage3 = mySummayPage3;

function mySummayPageTwoColumn(args) {
    frameModule.topmost().navigate({
			moduleName: "./views/mysummary-two-column/mysummary-page",
			animated: true
		});
}
exports.mySummayPageTwoColumn = mySummayPageTwoColumn;

function helpPage(args) {
    frameModule.topmost().navigate({
			moduleName: "./views/help/help-page",
			animated: true
		});
}
exports.helpPage = helpPage;