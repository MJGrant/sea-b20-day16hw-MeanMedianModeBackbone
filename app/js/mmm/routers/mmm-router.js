'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var MMM = require('../models/mmm-math');
var MMMFormView = require('../views/mmm-form-view');

module.exports = Backbone.Router.extend({
  routes: {
    "mmm" : "create"
  },

  create: function() {
    var newMMM = new MMM();
    var formView = new MMMFormView({model: newMMM});
    $('#content').html(formView.el);
  }

});
