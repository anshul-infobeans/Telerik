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

var EditSummaryViewModel = (function (_super) {
    __extends(EditSummaryViewModel, _super);
    function EditSummaryViewModel() {
        _super.call(this);
        
        var widthOfWidget = platformModule.screen.mainScreen.widthDIPs - 30;
        this.set( "widthOfWidget", widthOfWidget );
    }
    
    return EditSummaryViewModel;
})(observable.Observable);
exports.EditSummaryViewModel = EditSummaryViewModel;