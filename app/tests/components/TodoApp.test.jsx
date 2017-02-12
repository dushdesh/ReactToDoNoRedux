var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('shoud exist', () => {
    expect(TodoApp).toExist();
  });
  
  it('should add todo to the todo state on handleAddTodo', () => {
    var todoText = 'abc';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    
    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  
  it('should toggle incompleted to completed', () => {
    var todo = {
      id: 11,
      text: 'abc',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todo]});
    
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  
  it('should toggle completed to incompleted', () => {
    var todo = {
      id: 11,
      text: 'abc',
      completed: true,
      createdAt: undefined,
      completedAt: 0
    };
    
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todo]});
    
    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
  });
});