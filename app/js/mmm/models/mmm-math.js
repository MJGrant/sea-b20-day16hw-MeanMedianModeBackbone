var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var calcMMM = Backbone.Model.extend({
  defaults: {
    numbers:'', //create a listener in intiailize that waits for a change to this attribute
    mean:'0',
    median:'0',
    mode:'0'
  },

  initialize: function() {
    this.on("change:numbers",function(){
      var currentNums = this.get('numbers');
      this.mean(currentNums);
      this.median(currentNums);
      this.mode(currentNums);
    });
  },

  update: function(inputNumbers) {
    console.log("calling update");
    this.set({ numbers: inputNumbers});
  },

  test: function() {
    console.log("change numbers test is successful");
  },

  csvToArray: function(numsWithCommas) {
    var array = numsWithCommas.split(',');
    return array;
  },

  sortByAscending: function(nums) {
    //sorting the array - the function(a,b) trick ensures 19999 doesn't come before 2
    //thanks http://www.sitepoint.com/javascript-array-sorting/ for the help
    sortedArray = nums.sort(function(a,b) {
      return a - b;
    });
    return sortedArray;
  },

  sum: function(nums) {
    var sum = 0;
    for (i = 0; i < nums.length; i ++) {
      sum += Number(nums[i]);
    }
    return sum;
  },

  //*** MEAN *** Sum the numbers and divide by the quantity of numbers
  mean: function(csvNums) {
    var numArray = this.csvToArray(csvNums); //convert to array
    var sumNums = this.sum(numArray); //sum the numbers
    var mean = Math.floor(sumNums / (numArray.length - 2)); //round off the long decimal
    this.set('mean', mean);
    console.log("mmm-math mean is " + mean);
  },


  //*** MEDIAN *** Sort into ascending order and return the number in the middle
  median: function(csvNums) {
    var numArray = this.csvToArray(csvNums); //convert to array
    var sortedArray = this.sortByAscending(numArray);

    midpoint = sortedArray.length / 2;
    //this conditional is for handling uneven-numbered arrays
    if (midpoint % 2 !== 0) {
      midpoint = Math.floor(midpoint);
    }
    var median = sortedArray[midpoint];
    this.set('median', median);
  },


  //*** MODE *** The most frequently occurring number in the set, if there is one.
  mode: function(csvNums) {
    var numArray = this.csvToArray(csvNums); //convert to array
    var num = 0;
    var modeMap = {};
    var mostFrequentNum;
    var numOccurrences = 0;
    var mode = 0;
    //loop through the numbers array and build a map
    //the key is the number itself
    //the value is how many times that number is found in the array
    for (i = 0; i < numArray.length; i ++) {
      num = numArray[i];
      if (modeMap[num] == null) {
        modeMap[num] = 1;
      } else {
        modeMap[num]++;
        if (modeMap[num] > numOccurrences) {
          mode = num;
          numOccurrences = modeMap[num];
        }
      }
    }

    if (mode == 0) {
      mode = "NO MODE";
    }

    this.set('mode',mode);
  }
});

module.exports = calcMMM;

