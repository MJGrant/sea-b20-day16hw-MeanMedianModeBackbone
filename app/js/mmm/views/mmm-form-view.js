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
    return this;
  },

  calculate: function(e) { //on submit button click
    e.preventDefault(); //prevents instant page reload
    var numbers = this.$('input[name=mmmInputField]').val(); //get nums from input box
    //on this click, call the model's functions mean, median, mode
    var calcmean = this.model.mean(numbers); //happens on click
    var calcmedian =this.model.median(numbers); //happens on click
    var calcmode = this.model.mode(numbers); //happens on click
    console.log("Mean: " + calcmean);
    console.log("Median: " + calcmedian);
    console.log("Mode: " + calcmode);
  }

});
