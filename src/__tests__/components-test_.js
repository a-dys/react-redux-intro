import React from 'react';
import expect from 'expect';
var TestUtils = require('react/lib/ReactTestUtils');
import App from '../../src/components/App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'


describe('App component', function(){
    let wrapper
    before('render and locate element', function() {
        const mockStore = configureStore([])
        const initialState = {}
        const store = mockStore(initialState)

        const renderedComponent = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <App />
            </Provider>
        );
        //
        //wrapper = TestUtils.findRenderedDOMComponentWithClass(
        //    renderedComponent,
        //    'wrapper'
        //);


        //this.wrapper = wrapper;

    });


    it('clicking sidebar toggle should open sidebar', function() {
        console.log("!")
        //expect(this.wrapper.getAttribute('class')).toBe('wrapper');
        //TestUtils.Simulate.click(this.sidebarToggle);
        //expect(this.wrapper.getAttribute('class')).toBe('wrapper open');
    });

});