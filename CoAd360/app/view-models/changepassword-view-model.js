var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var observable = require("data/observable");
var appSettingsModule = require("application-settings");
var frameModule = require("ui/frame");
var utilityModule = require("../common/utility");
var platformModule = require("platform");

var ChangePasswordViewModel = (function (_super) {
    __extends(ChangePasswordViewModel, _super);
    
    function ChangePasswordViewModel() {
        _super.call(this);
        
        this._newpassword = "";
        this._confirmpassword = "";
        this._securitycode = "";
    }
    Object.defineProperty(ChangePasswordViewModel.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading != value) {
                this._isLoading = value;
                this.notifyPropertyChanged("isLoading", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordViewModel.prototype, "newpassword", {
        get: function () {
            return this._newpassword;
        },
        set: function (value) {
            if (this._newpassword !== value) {
                this._newpassword = value;
                this.notifyPropertyChanged("newpassword", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordViewModel.prototype, "confirmpassword", {
        get: function () {
            return this._confirmpassword;
        },
        set: function (value) {
            if (this._confirmpassword !== value) {
                this._confirmpassword = value;
                this.notifyPropertyChanged("confirmpassword", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordViewModel.prototype, "securitycode", {
        get: function () {
            return this._securitycode;
        },
        set: function (value) {
            if (this._securitycode !== value) {
                this._securitycode = value;
                this.notifyPropertyChanged("securitycode", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordViewModel.prototype.notifyPropertyChanged = function (propertyName, value) {
        
        // hide all the error
        var confirmEmailError = frameModule.topmost().getViewById("confirm-password-error");
        confirmEmailError.style.visibility="collapsed";
        
        var changePasswordButton = frameModule.topmost().getViewById("changePassword");
        
        if (this.validate()) {
            changePasswordButton.isEnabled=true;
            changePasswordButton.cssClass="change-password-button primaryButtonNormal";
        }
        else {
            changePasswordButton.isEnabled=false;
            changePasswordButton.cssClass="change-password-button primaryButtonUnselected";
        }
        
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: propertyName, value: value });
    };
    
    
    
    ChangePasswordViewModel.prototype.beginLoading = function () {
        if (!this._loadingCount) {
            this.isLoading = true;
        }
        this._loadingCount++;
    };
    ChangePasswordViewModel.prototype.endLoading = function () {
        if (this._loadingCount > 0) {
            this._loadingCount--;
            if (!this._loadingCount) {
                this.isLoading = false;
            }
        }
    };
    ChangePasswordViewModel.prototype.changePasswordButtonPressed = function () {
        var _this = this;
        var message = "";
        if (this.validate())
            {
                if (this.newpassword === this.confirmpassword)
            				{
            					//this.beginLoading();
               
                                var confirmEmailError = frameModule.topmost().getViewById("confirm-password-error");
            					confirmEmailError.style.visibility="collapsed";
                
                                alert("Request sent for the change password");
            				}
            			else
            				{
               					var confirmEmailError = frameModule.topmost().getViewById("confirm-password-error");
            					confirmEmailError.style.visibility="visible";
                                
            				}    
            
            
            
                            /*serviceModule.service.login(this.username, this.password).then(function (data) {
                                    frameModule.topmost().navigate({
                                    moduleName: "./views/login/login-page",
                                    animated: true
                                    });
                                _this.endLoading();
                            }, function (error) {
                                _this.clearPassword();
                                _this.endLoading();
                            });*/
            }
        else
            {
                
            }
    };
    
    ChangePasswordViewModel.prototype.clearPassword = function () {
        this.securitycode = "";
    };
    ChangePasswordViewModel.prototype.validate = function () {
        if (!this.newpassword || this.newpassword === "") {
            return false;
        }
        
        if (!this.confirmpassword || this.confirmpassword === "") {
            return false;
        }
        
        if (!this.securitycode || this.securitycode === "") {
            return false;
        }
        
        return true;
    };
    return ChangePasswordViewModel;
})(observable.Observable);

exports.ChangePasswordViewModel = ChangePasswordViewModel;