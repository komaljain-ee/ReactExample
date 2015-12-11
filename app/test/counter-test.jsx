jest.dontMock('../components/counter.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Counter = require('../components/counter.jsx');

describe('CheckboxWithLabel', () => {

    it('changes the count after click', () => {
        var counter = TestUtils.renderIntoDocument(
            <Counter/>
        );

        var counterNode = ReactDOM.findDOMNode(counter);
        expect(counter.state.count).toEqual(0);
    });
});