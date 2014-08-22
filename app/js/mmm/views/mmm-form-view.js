'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  //now we need an event that listens for a change
  events: {
    "click input[type=button]": "calculate"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../templates/mmm-form.hbs');
    this.$el.html(template);
    return this;
  },

  calculate: function() {
    //on button clicked
    console.log(this);
  }

});
