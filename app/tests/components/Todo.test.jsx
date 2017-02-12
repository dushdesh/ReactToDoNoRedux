var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Todo = require('Todo');

describe('Todo', ()=> {
  it('should exist', () => {
    expect(Todo).toExist();  
  });
  
  it('should call onToggle prop with id on Click', () => {
    var todo = {
      id: 11,
      text: 'abc',
      completed: true
    };
    
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todo} onToggle={spy}/>);
    
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    
    expect(spy).toHaveBeenCalledWith(11);
  });
  
});