var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var observable = require("data/observable");
var frameModule = require("ui/frame");
var platformModule = require("platform");
var connectivity = require("connectivity");

var DashboardViewModel = (function (_super) {
    __extends(DashboardViewModel, _super);
    function DashboardViewModel() {
        _super.call(this);
        
        var widthOfWidget = platformModule.screen.mainScreen.widthDIPs - 30;
        this.set( "widthOfWidget", widthOfWidget );
    }
    
    DashboardViewModel.prototype.logout = function () {
        frameModule.topmost().goBack()
    };
    
    return DashboardViewModel;
})(observable.Observable);
exports.DashboardViewModel = DashboardViewModel;