"use strict";

var expect = require('chai').expect;
var AuthPage = require('../../pageobjects/formauthentication.page');

describe('login form', function () {
	it('should look right', function () {
		AuthPage.openAuthForm();
		AuthPage.usernameInput.setValue('moo');

		expect(AuthPage.usernameInput.getValue()).to.contain('moo');
	});
});