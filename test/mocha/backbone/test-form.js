var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var Model = require('../../../app/js/mmm/models/mmm-math');

describe('Mean Median Mode in Backbone Tests', function() {
  var mmmMathModel;
  before(function(done) {
    this.mock = sinon.mock(Backbone);
    mmmMathModel = new Model();
    done();
  });

  it('Should update numbers', function(done) {
    mmmMathModel.set('numbers', '1,1999,5,5,18,0,16,404,16');
    expect(mmmMathModel).to.be.ok; //checks that it's an object
    expect(mmmMathModel.get('numbers')).to.eql('1,1999,5,5,18,0,16,404,16');
    done();
  });

  it('Mean should equal 5', function(done) {
    mmmMathModel.set('numbers', '5,5,5,5');
    expect(mmmMathModel).to.be.ok; //checks that it's an object
    expect(mmmMathModel.get('mean')).to.eql(5);
    done();
  });

  //0,1,3,4,11,45,45 //odd numbered median is 4
  it('Find median in odd-numbered series of numbers', function(done) {
    mmmMathModel.set('numbers', '0,1,3,4,11,45,45');
    expect(mmmMathModel).to.be.ok; //checks that it's an object
    expect(mmmMathModel.get('median')).to.eql(4);
    done();
  });

  //0,1,3,4,11,45 //even numbered should return 3
  it('Find median in an even-numbered series of numbers', function(done) {
    mmmMathModel.set('numbers', '0,1,3,4,11,45');
    expect(mmmMathModel).to.be.ok; //checks that it's an object
    expect(mmmMathModel.get('median')).to.eql(3);
    done();
  });

  it('Find mode in a set of numbers that has a mode', function(done) {
    mmmMathModel.set('numbers', '0,1,7,14,1,2');
    expect(mmmMathModel).to.be.ok; //checks that it's an object
    expect(mmmMathModel.get('mode')).to.eql(1);
    done();
  });

    //0,1,3,4,11,45 //even numbered should return 3
  it('Print "NO MODE" in response to a set of numbers without a mode', function(done) {
    mmmMathModel.set('numbers', '0,1,3,4,5,6');
    expect(mmmMathModel).to.be.ok; //checks that it's an object
    expect(mmmMathModel.get('mode')).to.eql('NO MODE');
    done();
  });

  after(function() {
    this.mock.verify();
  });
});
