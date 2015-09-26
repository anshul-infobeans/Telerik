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
var http = require("http");

var LoginViewModel = (function (_super) {
    __extends(LoginViewModel, _super);
    
    function LoginViewModel() {
        _super.call(this);
       
        //set login background image and version number of the app
        this._username = "";
        this._password = "";
        this.set( "imageSource", "~/resources/login/LoginBackground.png" );
        this.set( "loginErrorVisibility", "collapsed" );
        this.set( "emailErrorVisibility", "collapsed" );
        
        //check version numbers
	if (appSettingsModule.hasKey("RememberMe")){
		var isRememberMe = appSettingsModule.getBoolean("RememberMe")
		if (isRememberMe)
        {
            this.set( "checkBoxImageSource", "~/resources/login/CheckboxSelected.png" );
            
            if (appSettingsModule.hasKey("username"))
                {
                    var savedUserName = appSettingsModule.getString("username");
                    this._username = savedUserName;
                }
        }
        else
        {
            this.set( "checkBoxImageSource", "~/resources/login/CheckboxUnselected.png" ); 
        }
	} else {
		appSettingsModule.setBoolean("RememberMe",false)
        this.set( "checkBoxImageSource", "~/resources/login/CheckboxUnselected.png" ); 
	}
     
        appSettingsModule.setString("currentVersion", global.appVersion);
    }
    Object.defineProperty(LoginViewModel.prototype, "isLoading", {
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
    Object.defineProperty(LoginViewModel.prototype, "username", {
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
    Object.defineProperty(LoginViewModel.prototype, "password", {
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
    LoginViewModel.prototype.notifyPropertyChanged = function (propertyName, value) {
        
        // hide all the error
        this.set( "loginErrorVisibility", "collapsed" );
        this.set( "emailErrorVisibility", "collapsed" );
        var loginButton = frameModule.topmost().getViewById("login");
        
        if (this.validate()) {
            loginButton.isEnabled=true;
            loginButton.cssClass="login-button primaryButtonNormal";
        }
        else {
            loginButton.isEnabled=false;
            loginButton.cssClass="login-button primaryButtonUnselected";
        }
        
        this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: propertyName, value: value });
    };
    LoginViewModel.prototype.beginLoading = function () {
        if (!this._loadingCount) {
            this.isLoading = true;
        }
        this._loadingCount++;
    };
    LoginViewModel.prototype.endLoading = function () {
        if (this._loadingCount > 0) {
            this._loadingCount--;
            if (!this._loadingCount) {
                this.isLoading = false;
            }
        }
    };
    LoginViewModel.prototype.login = function () {
        var _this = this;
        var message = "";
        
        if (this.validate()) {
            
            if (utilityModule.validateEmail(this.username))
            {
                appSettingsModule.setString("username",this.username);
                
            	this.beginLoading();
                
                frameModule.topmost().navigate({
					moduleName: "./views/blank/blank",
					animated: true
          		});
                
                /*
                var result;
				http.request({
    				url: "https://360apiqa.coadvantage.com/Api/ValidateUser",
    				method: "POST",
    				headers: { "Content-Type": "application/json" },
    				content: JSON.stringify({ "Email": this.username, "Password": this.password, "IPAddress": "178.68.54.53" })
					}).then(function (response) {
    					result = response.content.toJSON();
    					alert(result);
					}, function (e) {
    				alert("Error occurred " + e);
				});
                
                */
            }
            else
            {
                //show error message for email
                this.set( "emailErrorVisibility", "visible" );
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
    };
    
    LoginViewModel.prototype.rememberMe = function () {
        var _this = this;
        
        var isRememberMe = appSettingsModule.getBoolean("RememberMe")
        appSettingsModule.setBoolean("RememberMe",!isRememberMe)
        if (!isRememberMe) {
            this.set( "checkBoxImageSource", "~/resources/login/CheckboxSelected.png" );
        }
        else {
            this.set( "checkBoxImageSource", "~/resources/login/CheckboxUnselected.png" );
        }
    };
    
    LoginViewModel.prototype.forgotPassword = function () {
        //check for platform
        frameModule.topmost().navigate({
			moduleName: "./views/forgotpassword/forgotpassword-page",
			animated: true
		});
    };
    
    LoginViewModel.prototype.privacyPolicyPressed = function () {
        //check for platform
        //check for platform
        frameModule.topmost().navigate({
			moduleName: "./views/legal/legal-page",
            context : {
              title : "PRIVACY POLICY"
      		},
			animated: true
		});
    };
    
    LoginViewModel.prototype.termsOfUsePressed = function () {
        //check for platform
        frameModule.topmost().navigate({
			moduleName: "./views/legal/legal-page",
            context : {
              title : "TERMS OF USE"
      		},
			animated: true
		});
    };
    
    LoginViewModel.prototype.clearPassword = function () {
        this.password = "";
    };
    LoginViewModel.prototype.validate = function () {
        if (!this.username || this.username === "") {
            return false;
        }
        if (!this.password || this.password === "") {
            return false;
        }
        return true;
    };
    return LoginViewModel;
})(observable.Observable);

exports.LoginViewModel = LoginViewModel;