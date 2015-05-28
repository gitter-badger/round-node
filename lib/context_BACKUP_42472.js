// Generated by CoffeeScript 1.9.2
(function() {
<<<<<<< HEAD
  var Context, base64url, crypto, formatDate;
=======
  var Context, base64url, crypto, formatDate,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
>>>>>>> 4bf7ba31cdc3da6385dd1e0bd595dd70005e22d1

  crypto = require('crypto');

  base64url = require('base64-url');

  formatDate = function(date) {
    if (date < 10) {
      return "0" + date;
    } else {
      return "" + date;
    }
  };

  module.exports = Context = (function() {
    Context.SCHEMES = {
      DEVICE: 'Gem-Device',
      APPLICATION: 'Gem-Application',
      IDENTIFY: 'Gem-Identify'
    };

    function Context() {
      this.mfa_token = null;
      this.schemes = {
        'Gem-Identify': {
          credentials: null,
          params: ['api_token']
        },
        'Gem-Application': {
          credentials: null,
          params: ['admin_token', 'api_token']
        },
        'Gem-Device': {
          credentials: null,
          params: ['email', 'api_token', 'device_token']
        }
      };
    }

    Context.prototype.authorize = function(scheme, credentials) {
<<<<<<< HEAD
=======
      var formatedCreds;
>>>>>>> 4bf7ba31cdc3da6385dd1e0bd595dd70005e22d1
      if (!(scheme in this.schemes)) {
        throw new Error('invalid scheme');
      }
      if (Object.keys(credentials).length === 0) {
        throw new Error('credentials cannot be empty');
      }
<<<<<<< HEAD
      return this.schemes[scheme]['credentials'] = credentials;
    };

    Context.prototype.authorizer = function(schemes, resource, action, request) {
      var credential, scheme, _i, _len;
      for (_i = 0, _len = schemes.length; _i < _len; _i++) {
        scheme = schemes[_i];
        if ((this.schemes[scheme] != null) && (this.schemes[scheme]['credentials'] != null)) {
          credential = this.formatCredsForScheme(scheme);
          return {
            scheme: scheme,
            credential: credential
=======
      formatedCreds = Object.keys(credentials).filter((function(_this) {
        return function(credKey) {
          return indexOf.call(_this.schemes[scheme]['params'], credKey) >= 0;
        };
      })(this)).map(function(credKey) {
        return credKey + "=\"" + credentials[credKey] + "\"";
      }).join(', ');
      return this.schemes[scheme]['credentials'] = formatedCreds;
    };

    Context.prototype.authorizer = function(schemes, resource, action, request) {
      var i, len, scheme;
      for (i = 0, len = schemes.length; i < len; i++) {
        scheme = schemes[i];
        if ((this.schemes[scheme] != null) && (this.schemes[scheme]['credentials'] != null)) {
          return {
            scheme: scheme,
            credential: this.schemes[scheme]['credentials']
>>>>>>> 4bf7ba31cdc3da6385dd1e0bd595dd70005e22d1
          };
        }
      }
    };

<<<<<<< HEAD
    Context.prototype.formatCredsForScheme = function(scheme) {
      var compiled, credentials, params;
      credentials = this.schemes[scheme]['credentials'];
      params = this.schemes[scheme]['params'];
      compiled = Object.keys(credentials).filter(function(credKey) {
        return params.indexOf(credKey) > -1;
      }).map(function(credKey) {
        return "" + credKey + "=\"" + credentials[credKey] + "\"";
      }).join(', ');
      if (this.mfa_token) {
        compiled.concat(", mfa_token=" + this.mfa_token);
      }
      return compiled;
    };

    Context.prototype.setMFA = function(mfa_token) {
      return this.mfa_token = mfa_token;
    };

=======
>>>>>>> 4bf7ba31cdc3da6385dd1e0bd595dd70005e22d1
    return Context;

  })();

}).call(this);