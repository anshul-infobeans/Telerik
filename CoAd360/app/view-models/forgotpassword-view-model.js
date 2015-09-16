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
        this._lastName = "";
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
    Object.defineProperty(ForgotPasswordViewModel.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            if (this._lastName !== value) {
                this._lastName = value;
                this.notifyPropertyChanged("lastName", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordViewModel.prototype.notifyPropertyChanged = function (propertyName, value) {
        
        // hide all the error
        var emailError = frameModule.topmost().getViewById("text-email-error");
        emailError.style.visibility="collapsed";
        
        var getPasswordButton = frameModule.topmost().getViewById("getPassword");
        
        if (this.validate()) {
            getPasswordButton.isEnabled=true;
            getPasswordButton.cssClass="get-password-button primaryButtonNormal";
        }
        else {
            getPasswordButton.isEnabled=false;
            getPasswordButton.cssClass="get-password-button primaryButtonUnselected";
        }
        
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: propertyName, value: value });
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
    ForgotPasswordViewModel.prototype.getPasswordButtonPressed = function () {
        var _this = this;
        var message = "";
        if (this.validate())
            {
                if (this._isEmailSelected)
                	{
            			if (utilityModule.validateEmail(this.username))
            				{
            					//this.beginLoading();
               
                				var emailError = frameModule.topmost().getViewById("text-email-error");
            					emailError.style.visibility="collapsed";
                
                				alert("Request sent for the temporary password");
            				}
            			else
            				{
               					var emailError = frameModule.topmost().getViewById("text-email-error");
            					emailError.style.visibility="visible";
                                
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
                        alert("Request sent for the temporary password");
        			}
            }
        else
            {
                
            }
    };
    
    ForgotPasswordViewModel.prototype.requestPasswordUsing = function (isEmail) {
        var _this = this;
        
        this._isEmailSelected = isEmail;
       
        var userNameField = frameModule.topmost().getViewById("tusername");
        var lastNameField = frameModule.topmost().getViewById("tlastname");
        var lastNameUIComponent = frameModule.topmost().getViewById("lastName");
        
        var optionButtonLegalName = frameModule.topmost().getViewById("optionButtonLegalName");
        var optionButtonEmail = frameModule.topmost().getViewById("optionButtonEmail");
        
        this.username = "";
        this.lastName = "";
        this.password = "";
        
        if (isEmail)
            {
                optionButtonEmail.cssClass="optionButton primaryButtonNormal";
                optionButtonLegalName.cssClass="optionButton primaryButtonUnselected";
                userNameField.hint="Email";
                lastNameUIComponent.style.visibility="collapsed";
            }
        else
            {
                var emailError = frameModule.topmost().getViewById("text-email-error");
        		emailError.style.visibility="collapsed";
                
                optionButtonEmail.cssClass="optionButton primaryButtonUnselected";
                optionButtonLegalName.cssClass="optionButton primaryButtonNormal";
                userNameField.hint="First Name";
                lastNameUIComponent.style.visibility="visible";
            }
        
        
        
        if (optionButtonEmail.android)
            {
                optionButtonEmail.android.setGravity(17);
				optionButtonLegalName.android.setGravity(17);
            }   
    };
    
    
    ForgotPasswordViewModel.prototype.clearPassword = function () {
        this.password = "";
    };
    ForgotPasswordViewModel.prototype.validate = function () {
        
        if (!this.username || this.username === "") {
            return false;
        }
        
        if (!this._isEmailSelected)
            {
                if (!this.lastName || this.lastName === "") {
            		return false;
        		}
            }
        
        if (!this.password || this.password === "") {
            return false;
        }
        return true;
    };
    return ForgotPasswordViewModel;
})(observable.Observable);

exports.ForgotPasswordViewModel = ForgotPasswordViewModel;