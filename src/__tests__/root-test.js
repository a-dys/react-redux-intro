import React from 'react'
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
import * as actions from '../../src/actions/index';

describe('Actions', () => {
    it('should create a ADD_TODO action', () => {
        const text = "new todo";
        const expectedAction = {
            type: 'ADD_TODO',
            id: 0,
            text: text,
            createdAt: new Date().toJSON().slice(0,16).replace(/-/g,'/').replace(/T/g,' ')
        };

        expect(actions.addTodo(text)).toEqual(expectedAction);
    });

    it('should create a SET_VISIBILITY_FILTER action', () => {
        const filter = "SHOW_ALL";
        const expectedAction = {
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
        };

        expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
    });

    it('should create a TOGGLE_TODO action', () => {
        const id = 0;
        const expectedAction = {
            type: 'TOGGLE_TODO',
            id: id
        };

        expect(actions.toggleTodo(id)).toEqual(expectedAction);
    });
});
