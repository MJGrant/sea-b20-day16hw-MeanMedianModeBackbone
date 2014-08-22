'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var MMMRouter = require('./mmm/routers/mmm-router'); //class
var mmmRouter = new MMMRouter(); //instance

Backbone.history.start({root: "/mmm"});
mmmRouter.navigate("mmm", {trigger: true});
//carsRouter.navigate("cars", {trigger: true});

//massive removal of notes and cars code from client.js
//client.js is just the highest level steps
//we don't want client.js to know about resources
console.log("Something missing? Did you run grunt build:dev?");
