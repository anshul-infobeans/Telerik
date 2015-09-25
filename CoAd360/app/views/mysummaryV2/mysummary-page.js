var mySummaryViewModelModule = require("../../view-models/mysummary-view-model");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var gridLayout = require("ui/layouts/grid-layout");
var labelModule = require("ui/label");
var platformModule = require("platform");
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
    
    var widthOfWidget = platformModule.screen.mainScreen.widthDIPs - 30;
    var infoWidth = widthOfWidget/2 +10;
    
    var personalInformation = [{key: "Address",
                                value: "123 Mulberry Street Apartment. 123"},
                               {key: "City",
                                value:"New York"},
                               {key: "State",
                                value:"NY"},
                               {key: "Zip",
                                value:"12345"},
                               {key: "Home Phone",
                                value:"123-456-7890"},
                               {key: "Mobile Phone",
                                value:"123-456-7890"},
                               {key: "Personal Email",
                                value:"lukehallem@gmail.com"},
                               {key: "Work Email",
                                value:"lukehallem@gmail.com"}
                              ];
    
    var stackLayoutInformation = viewModule.getViewById(page, "stackLayoutForInformation");
    
    for (var i=0; i<personalInformation.length;i++)
        {
            
            var gridLayoutInformation = new gridLayout.GridLayout();
            gridLayoutInformation.row = "*";
            stackLayoutInformation.addChild(gridLayoutInformation);
            
            
            var keylabel = new labelModule.Label();
            keylabel.text=personalInformation[i].key;
            keylabel.width= infoWidth;
            keylabel.cssClass= "leftLabel";
            
            gridLayoutInformation.addChild(keylabel);
            
            var valuelabel = new labelModule.Label();
            valuelabel.text=personalInformation[i].value;
            valuelabel.width= infoWidth;
            valuelabel.cssClass= "rightLabel";
            valuelabel.textWrap="true";
            
            gridLayoutInformation.addChild(valuelabel);
            
            var lineLabel = new labelModule.Label();
            lineLabel.width= widthOfWidget;
            lineLabel.cssClass="line";
            
            stackLayoutInformation.addChild(lineLabel);
        }
};
exports.pageLoaded = pageLoaded;

function emailButtonPressed(args) {
    //viewModel.requestPasswordUsing(true);
}
exports.emailButtonPressed = emailButtonPressed;

function passwordButtonPressed(args) {
    //viewModel.requestPasswordUsing(false);
}
exports.passwordButtonPressed = passwordButtonPressed;

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
}
exports.tapOnView = tapOnView;

function editButtonTap(args) {
    frameModule.topmost().navigate({
					moduleName: "./views/summaryedit/summaryedit-page",
					animated: true
          		});
}
exports.editButtonTap = editButtonTap;