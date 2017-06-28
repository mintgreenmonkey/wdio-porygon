"use strict";

var Page = require('./page')

class AuthPage extends Page {
	/** 
	Elements
	**/
    get usernameInput()  { return browser.element("#username"); }
    get passwordInput() { return browser.element("#password"); }
    get authForm() { return browser.element("#login"); }

    /**
    Methods
    **/
    openAuthForm() { super.open('login'); }
    submitAuthForm() { this.authForm.submitForm(); }
}

module.exports = new AuthPage();