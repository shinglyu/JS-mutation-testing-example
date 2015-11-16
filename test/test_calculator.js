var assert = require('assert');
var cal = require('../src/calculator.js')

describe('Calculator', function(){
  it('substractPositive', function(){
    assert.equal('2', cal.substractPositive(3, 1));
  });

  /*
  it('substractPositive', function(){
    assert.equal('2', cal.substractPositive(3, 1));
  });
  */

  it('add', function(){
    assert.equal('2', cal.add(1, 1));
    //assert.equal('1', '1');
  });
})
