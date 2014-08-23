var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var MMMModel = require('../../../app/js/mmm/models/mmm-math');

describe('MMM Math Model', function() {
  var mmm;
  before(function(done) {
    this.mock = sinon.mock(Backbone);
    note = new Note();
    done();
  });

  it('Should be a backbone object', function(done) {
    model.set('numbers', '1,1999,5,5,18,0,16,404,16');
    expect(note).to.be.ok; //checks that it's an object
    expect(note.get('noteBody')).to.eql('a test note');
    done();
  });

  after(function() {
    this.mock.verify();
  });
});
