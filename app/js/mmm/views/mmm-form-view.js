'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  //now we need an event that listens for a change
  events: {
    "submit": "calculate"
    //"click input[type=button]": "calculate"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var template = require('../templates/mmm-form.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    //var meanFromModel = this.model.get('mean');
    this.$el.children('#meanresult').append(this.model.get('mean'));
    this.$el.children('#medianresult').append(this.model.get('median'));
    this.$el.children('#moderesult').append(this.model.get('mode'));
    //in render, pull the data from the model in the template
    return this;
  },

  calculate: function(e) { //on submit button click
    e.preventDefault(); //prevents instant page reload
    var myNumbers = this.$('input[name=mmmInputField]').val();
    this.model.update(myNumbers);
    this.render();
  }

});
