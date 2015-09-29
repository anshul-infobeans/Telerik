var applicationSettingsModule = require("application-settings");
var constantsModule = require("../common/constants");
var httpModule = require("http");
var Service = (function () {
    function Service() {
    }
    Service.prototype.login = function (username, password) {
        var _this = this;
        
        return new Promise(function (resolve, reject) {
            
            _this.getIPAddress().then(function (data) {
                var ipAddress = data;
				httpModule.request({
    				url: "http://echo.jsontest.com/key/value/one/two",
    				method: "POST",
    				headers: { "Content-Type": "application/json" }
					}).then(function (response) {
    					var result = response.content.toJSON();
    					resolve(result);
					}, function (e) {
                		reject(e);
				});
            },function (error) {
                reject(error);
            });
        });
    };
    
    Service.prototype.getIPAddress = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
			httpModule.request({
    				url: "http://ip.jsontest.com",
    				method: "GET",
    				headers: { "Content-Type": "application/json" }
					}).then(function (response) {
               			var ipAddress=response.content.toJSON().ip;
    					resolve(ipAddress);
					}, function (e) {
    					reject(e);
				});
        });   
    };
   
    return Service;
})();
exports.Service = Service;
exports.service = new Service();
