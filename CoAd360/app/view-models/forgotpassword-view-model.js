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

var ForgotPasswordViewModel = (function (_super) {
    __extends(ForgotPasswordViewModel, _super);
    
    function ForgotPasswordViewModel() {
        _super.call(this);
        this._isEmailSelected = true;
        this._username = "";
        this._password = "";
    }
    Object.defineProperty(ForgotPasswordViewModel.prototype, "isLoading", {
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
    Object.defineProperty(ForgotPasswordViewModel.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            if (this._username !== value) {
                this._username = value;
                this.notifyPropertyChanged("username", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgotPasswordViewModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            if (this._password !== value) {
                this._password = value;
                this.notifyPropertyChanged("password", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordViewModel.prototype.notifyPropertyChanged = function (propertyName, value) {
        /*
        // hide all the error
        this.set( "loginErrorVisibility", "visible" );
        var emailError = frameModule.topmost().getViewById("text-email-error");
        emailError.style.opacity="0";
        var loginButton = frameModule.topmost().getViewById("login");
        
        if (this.validate()) {
            loginButton.isEnabled=true;
            loginButton.style.opacity="1";
        }
        else {
            loginButton.isEnabled=false;
            loginButton.style.opacity="0.5";
        }
        
       this.set( "loginErrorVisibility", "collapsed" ); 
       
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: propertyName, value: value });
        */
    };
    
    
    
    ForgotPasswordViewModel.prototype.beginLoading = function () {
        if (!this._loadingCount) {
            this.isLoading = true;
        }
        this._loadingCount++;
    };
    ForgotPasswordViewModel.prototype.endLoading = function () {
        if (this._loadingCount > 0) {
            this._loadingCount--;
            if (!this._loadingCount) {
                this.isLoading = false;
            }
        }
    };
    ForgotPasswordViewModel.prototype.login = function () {
        var _this = this;
        var message = "";
        
        if (this.validate()) {
            
            if (utilityModule.validateEmail(this.username))
            {
            	this.beginLoading();
               
                var emailError = frameModule.topmost().getViewById("text-email-error");
            	emailError.style.opacity="0";
                
                frameModule.topmost().navigate({
					moduleName: "./views/blank/blank",
					animated: true
          		});
            }
            else
            {
                var emailError = frameModule.topmost().getViewById("text-email-error");
            	emailError.style.opacity="1";
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
        else {
            this.clearPassword();
        }
        
        //var loginMessage = frameModule.topmost().getViewById("login-error");
        //loginMessage.
        
        
    };
    
    ForgotPasswordViewModel.prototype.requestPasswordUsing = function (isEmail) {
        var _this = this;
        
        this.isEmailSelected = isEmail;
       
        var userNameField = frameModule.topmost().getViewById("tusername");
        var optionButtonLegalName = frameModule.topmost().getViewById("optionButtonLegalName");
        var optionButtonEmail = frameModule.topmost().getViewById("optionButtonEmail");
        if (isEmail)
            {
                optionButtonEmail.cssClass="optionButton primaryButtonNormal";
                optionButtonLegalName.cssClass="optionButton primaryButtonUnselected";
                userNameField.hint="Email";
            }
        else
            {
                optionButtonEmail.cssClass="optionButton primaryButtonUnselected";
                optionButtonLegalName.cssClass="optionButton primaryButtonNormal";
                userNameField.hint="Legal Name";
            }
    };
    
    
    
    ForgotPasswordViewModel.prototype.clearPassword = function () {
        this.password = "";
    };
    ForgotPasswordViewModel.prototype.validate = function () {
        if (!this.username || this.username === "") {
            return false;
        }
        if (!this.password || this.password === "") {
            return false;
        }
        return true;
    };
    return ForgotPasswordViewModel;
})(observable.Observable);

exports.ForgotPasswordViewModel = ForgotPasswordViewModel;