import React, { PropTypes } from 'react'
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
import TodoList from '../../src/components/TodoList';
import {List, Map} from 'immutable';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;

//var App = require('../components/App'); //my root-test lives in components/__tests__/, so this is how I require in my components.

//describe('root', function () {
//    it('renders without problems', function () {
//        //var app = TestUtils.renderIntoDocument(<App/>);
//        //expect(app).toExist();
//        var x = 1;
//        var y = 1;
//        expect(x).to.eq(y)
//
//    });
//});

describe('AddTodo', () => {
    it('renders a list with only the active items if the filter is active', () => {
        const todos = List.of(
            Map({id: 1, text: 'React', completed: true}),
            Map({id: 2, text: 'Redux', completed: true}),
            Map({id: 3, text: 'Immutable', completed: false})
        );
        const component = renderIntoDocument(
            <TodoList todos={todos} />
        );
        const items = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(items.length).to.equal(2);
        expect(items[0].textContent).to.contain('React');
        expect(items[1].textContent).to.contain('Redux');
    });
});