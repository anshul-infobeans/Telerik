var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var observable = require("data/observable");
var frameModule = require("ui/frame");

var DashboardViewModel = (function (_super) {
    __extends(DashboardViewModel, _super);
    function DashboardViewModel() {
        _super.call(this);
        
    }
    
    DashboardViewModel.prototype.logout = function () {
        frameModule.topmost().goBack()
    };
    
    return DashboardViewModel;
})(observable.Observable);
exports.DashboardViewModel = DashboardViewModel;
