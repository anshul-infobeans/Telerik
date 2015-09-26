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

var CheckStubViewModel = (function (_super) {
    __extends(CheckStubViewModel, _super);
    function CheckStubViewModel() {
        _super.call(this);
        
        var widthOfWidget = platformModule.screen.mainScreen.widthDIPs - 40;
        this.set( "widthOfWidget", widthOfWidget );
        var infoWidth = widthOfWidget/2;
        this.set( "infoWidth", infoWidth );
        
        //this.dateItems = ["3/5/2015", "16/7/2015", "1/9/2015"];
		//this.selectedDateItem = 1;
    }
    
    return CheckStubViewModel;
})(observable.Observable);
exports.CheckStubViewModel = CheckStubViewModel;
