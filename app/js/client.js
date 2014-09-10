'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

//removed route, put in these direct calls to model and view
var MMMModel = require('../js/mmm/models/mmm-math');
var MMMView = require('../js/mmm/views/mmm-form-view');

var mmm = new MMMModel({});
var mmmView = new MMMView({model: mmm});
$('#content').html(mmmView.el);


