
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var dependencyObservableModule = require("ui/core/dependency-observable");
var viewModel;
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
    
};
exports.pageLoaded = pageLoaded;

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

var PieDataModel = (function (_super) {
    __extends(PieDataModel, _super);
    function PieDataModel() {
        _super.call(this);
        this.initData();
    }
    PieDataModel.prototype.initData = function () {
        this.set("pieSource", [
            { Brand: "Audi", Amount: 10 },
            { Brand: "Mercedes", Amount: 76 },
            { Brand: "Fiat", Amount: 60 },
            { Brand: "BMW", Amount: 24 },
            { Brand: "Crysler", Amount: 40 }
        ]);
    };
    return PieDataModel;
})(dependencyObservableModule.DependencyObservable);
exports.PieDataModel = PieDataModel;